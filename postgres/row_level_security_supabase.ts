import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.1'

const SUPABASE_URL = 'https://<PROJECT_NAME>.supabase.co'
// supabase API gateway requires use of tokens for access. Use ANON_KEY of the project until you get a user token
const ANON_KEY = ''
const user1 = {
    id: '',
    email: '',
    password: ''
}
const user2 = {
    id: '',
    email: '',
    password: ''
}

const supabase = createClient(SUPABASE_URL, ANON_KEY)

// supabase client's token is changed from anon token to user's after signing in
const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
        console.error(error)
        return
    }
    if (data.user == null || data.session == null) {
        console.error(`Sign In error: user's ${email} data(.user | .session) is null`)
        return
    }

    console.log(`User ${data.session.user.email} is logged in`)
}

const readLeaderboard = async () => {
    const { data, error } = await supabase
        .from('leaderboard')
        .select('user_id, score')
        .order('score', { ascending: false })

    if (error) {
        console.error(error)
        return
    }

    console.log(data)
}

const writeToLeaderboard = async (user_id: string, score: number) => {
    const { data, error } = await supabase
        .from('leaderboard')
        .insert({ user_id, score })

    if (error) {
        console.error(error)
        return
    }

    console.log(data)
}

// await signIn(user1.email, user1.password)
// await writeToLeaderboard(user2.id, 9999)
await readLeaderboard()