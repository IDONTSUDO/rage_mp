const { env } = require('./util/env');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const Fawn = require('fawn');

Promise.promisifyAll(require('mongoose'));

mongoose
  .connect(`mongodb://localhost/${env.database}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    poolSize: 10,
  })
  .then(() => {
    console.log(`Server connect to Database ${env.database}`);
    if (env.e2e) {
      mongoose.connection.db.dropDatabase();
      console.log(`${mongoose.connection.db.databaseName} database dropped.`);
    }
  });
mongoose.connection.on('error', (err) => {
  console.log(`DB connection error: ${err.message}`);
});
Fawn.init(mongoose);
if (env.debugDB) {
  mongoose.set('debug', true);
}

if (env.gameContext) {
  require('./rage/include.js');
}
