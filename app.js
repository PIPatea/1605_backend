
const MongoManager = require('./mongo-manager')

MongoManager.openMongoConnection();


app.listen(PORT, () => {
    console.log(` server listening on port ${PORT} `);
  });