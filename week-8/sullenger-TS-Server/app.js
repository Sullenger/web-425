"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var composers = [
    { id: 11, firstName: "Johann", lastName: "Bach" },
    { id: 22, firstName: "Wolfgang", lastName: "Mozart" },
    { id: 33, firstName: "Ludwig", lastName: "Beethoven" },
    { id: 44, firstName: "Giuseppe", lastName: "Verdi" },
    { id: 55, firstName: "Frederic", lastName: "Chopin" },
];
function getComposers() {
    return composers;
}
app.get('/', function (req, res) {
    res.send('The URL for composers is http://localhost:3000/api/composers');
});
app.get('/api/composers', function (req, res) {
    res.json(getComposers());
});
function getComposerById(composerId) {
    return composers.find(function (c) { return c.id == composerId; });
}
;
app.get('/api/composer/:id', function (req, res) {
    res.json(getComposerById(parseInt(req.params.id)));
});
var server = app.listen(3000, "localhost", function () {
    console.log("listening on port 3000");
});
