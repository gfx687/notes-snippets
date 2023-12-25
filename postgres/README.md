## Create and connect to database
Start PostgreSQL database in docker container:

`docker run --name postgres -e POSTGRES_PASSWORD=1234 -p 5432:5432 postgres`

Connect to container's shell:

`dk exec -it --user postgres postgres bash`

Connection string:

`postgres://postgres:1234@0.0.0.0:5432/<database_name>`

## Work with database:
1) Via container's own `psql`
    ```bash
   docker exec -it --user postgres postgres psql
    ```

2) Install `psql` on the local machine, packages exist that will not pull entire postgresql with it.

    Debian example: `apt install postgresql-client`

    Then connect to database with `psql $CONNECTION_STRING`

3) Install third party database viewer, e.g. DBeaver

## Test data
Check [full-text-search](https://github.com/gfx687/notes/tree/main/postgres/full-text-search) folder for database schema and script to fill it with data


