// index.js

const express = require('express');
const elasticsearch = require('elasticsearch');
const fs = require('fs');
const app = express();

const PORT = 8000;
const vertify = require('./vertify');
const searchData = require('./search');

// const client = new elasticsearch.Client({
//     host: '127.0.0.1:9200',
//  });

// vertify();
searchData();

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});