"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
var data = [1, 2, 3, 4];
app.get('/test', function (req, res) {
    console.log(req);
    res.send({ data: data });
});
app.listen(port, function () {
    console.log("Example app listen at http://localhost:" + port);
});
//# sourceMappingURL=app.js.map