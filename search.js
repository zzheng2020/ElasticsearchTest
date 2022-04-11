// search.js

const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    host: '127.0.0.1:9200',
});

const search = function search(index, body) {
    return client.search({index: index, body: body});
};

module.exports =  function searchData() {

    let body = {
        query: {
            match: {
                fName: 'tree'
            }
        }
    };

    search('code_search_test', body)
        .then(results => {
            console.log(`returned results:`);
            results.hits.hits.forEach(
                (hit, index) => console.log(
                    hit._source
                )
            )
        })
        .catch(console.error);
};
