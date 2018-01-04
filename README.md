# Flib - backend

## Local Setup
1. Install nodejs > v7.1 
1. Install mysql-server
1. Create a database called `flib`
1. Install TypeScript
1. Install dependencies `npm install`
1. Create a `.env` file at the project root
1. Run migrations `npm run migrate-up`
1. Run tests `npm test`
1. Start the server `npm start`

### `.env` file sample

```
DB_URI=mysql://root:@localhost:3306/flib
port=3000
```
