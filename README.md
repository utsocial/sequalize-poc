# Sequelize Probe of concept


## How to run the project

Install dependencies :

```
yarn

# or

npm install
```

Edit `config/config.json` :

```
{
    "development": {
        "username": "root",
        "password": null,
        "database": "sequelize-example",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        ...
    },
    "production": {
        ...
    }
}
```

Init and seed database :

```
sequelize db:migrate

sequelize db:seed:all

```

Run the project :

```
npm start

```
Crating a new migration and model with underscore defaults fields (local instalation sequelize)

```
node_modules/.bin/sequelize model:create --underscored --name task --attributes "description:string, quantity:integer"

```
Is possible to follow the tutorial to add relationships:

```
https://www.duringthedrive.com/2017/05/06/models-migrations-sequelize-node/
