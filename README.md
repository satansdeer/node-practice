# 2020-04-11 - Week 5

* Remote mongodb server
  * whitelist your dev machine IP
  * `ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -d\  -f2`
  * Cheat Sheet
    * `show dbs` - list databases
    * `db` - current show current db
    * `use <db_name>` - create or switch to `<db_name>`
    * `db.dropDatabase()` - drop
    * `db.createCollection('users')` - create `users` collection
    * `db.users.insert({name: 'Maksim'})` - add record
    * `db.users.find()` - list `users` records
    * `quit()` - close connection
  * https://www.npmjs.com/package/mongodb
* Migrate data between databases
  * https://docs.atlas.mongodb.com/import/
  * Postgres
    * `pg_dump the_db_name > the_backup.sql`
    * `psql the_new_dev_db < the_backup.sql`
* Streams
  * Readable
  * Writable
  * Duplex
* Threads
  * https://nodejs.org/docs/latest-v10.x/api/worker_threads.html
  * Are based on **V8 Isolates**: https://v8docs.nodesource.com/node-0.8/d5/dda/classv8_1_1_isolate.html
  * In depth: https://blog.insiderattack.net/deep-dive-into-worker-threads-in-node-js-e75e10546b11
* Role based authorization
  * `/role-based-auth/server.js#L13`
  * `/role-based-auth/users/users.controller.js#L9`
  * `/role-based-auth/users/users.controller.js#L31`
  * `/role-based-auth/_helpers/authorize.js#L6`
  * `/role-based-auth/users/user.service.js#L20`
* Auth, JWT, bcrypt
  * Authenticated routes
    * `/jwt-auth-example/server.ts#L2`
    * `/jwt-auth-example/api/config/express.ts#L28`
    * `/jwt-auth-example/api/controllers/auth.ts#L14`
  * Login route
    * `/jwt-auth-example/api/config/express.ts#L26`
    * `/jwt-auth-example/api/config/express.ts#L42`
    * `/jwt-auth-example/api/routes/index.ts#L3`
    * `/jwt-auth-example/api/routes/auth.ts#L39`
    * `/jwt-auth-example/api/controllers/auth.ts#L30`
    * `/jwt-auth-example/api/controllers/auth.ts#L42`
    * `/jwt-auth-example/api/models/user.ts#L38`