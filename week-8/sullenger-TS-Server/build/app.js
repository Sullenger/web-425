"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const composers = [
    { id: 11, firstName: "Johann", lastName: "Bach" },
    { id: 22, firstName: "Wolfgang", lastName: "Mozart" },
    { id: 33, firstName: "Ludwig", lastName: "Beethoven" },
    { id: 44, firstName: "Giuseppe", lastName: "Verdi" },
    { id: 55, firstName: "Frederic", lastName: "Chopin" },
];
function getComposers() {
    return composers;
}
app.get('/', (req, res) => {
    res.send('The URL for composers is http://localhost:3000/api/composers');
});
app.get('/api/composers', (req, res) => {
    res.json(getComposers());
});
function getComposerById(composerId) {
    return composers.find(c => c.id == composerId);
}
;
app.get('/api/composer/:id', (req, res) => {
    res.json(getComposerById(parseInt(req.params.id)));
});
const server = app.listen(3000, "localhost", () => {
    console.log("listening on port 3000");
});
