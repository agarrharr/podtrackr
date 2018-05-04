# podtrackr

Podcast Analytics

Node/Express app to redirect traffic to podcast audio files and track requests.

It should also have a web interface for viewing stats. You can look at stats for a particular file or for all files in an rss feed. There should be no need to register or log in. Just start using it by prefixing your url with this service's url. If you want, you could whitelist the urls allowed.

It also should have an api for retrieving the stats.

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
MONGOLAB_URI=mongodb://localhost:27017/podtrackr
```

Visit `localhost:5000/redirct/http://www.url.com` and it will redirect you.

## Deploy

```
git push origin heroku
heroku ps:scale web=1
```

## MongoDB

Install Mongo DB:

```
brew install mongodb
mkdir -p /data/db
sudo chmod -R go+w /data/db
sudo chown -R $USER /data/db
```

Start Mongo DB:

```
mongodb
```

Import the example data:

```
mongoimport --db podtrackr --collection downloads --drop --file example-data.mongo.json
```
