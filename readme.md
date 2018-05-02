# trackr

Simple app to redirect traffic and keep a log.

## Running

```
npm start
```

For development (watches for file changes and restarts the server):

```
npm run develop
```

You can also make a `.env` file with the following:

```
port=5000
```

Visit `localhost:5000/redirct/http://www.url.com` and it will redirect you.

## Deploy

```
git push origin heroku
heroku ps:scale web=1
```
