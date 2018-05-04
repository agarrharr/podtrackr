const uri = process.env.MONGOLAB_URI || `mongodb://localhost:27017/podtrackr`;

const mongoose = require(`mongoose`);
mongoose.connect(uri);

const db = mongoose.connection;
db.on(`error`, console.error.bind(console, `Connection error:`));
db.once(`open`, (callback) => { console.log(`open`); })

const downloadSchema = mongoose.Schema({
  url: String,
  isURL: String,
  timestamp: String,
  ip: String,
});

exports.Download = mongoose.model(`Download`, downloadSchema);

// exports.Download.find({}, (err, download) => {
//   console.log(download);
// });
