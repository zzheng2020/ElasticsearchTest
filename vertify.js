const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    host: '127.0.0.1:9200',
 });


function indices() {
    return client.cat.indices({v: true})
    .then(console.log)
    .catch(err => console.error(`Error connecting to the es client: ${err}`));
  }

module.exports = function vertify() {
    console.log(`elasticsearch indices information:`);
    indices();
}