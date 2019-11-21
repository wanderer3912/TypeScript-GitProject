"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.htm_url;
        this.size = repo.html_size;
        this.numberOfForks = repo.forks;
    }
    return Repo;
}());
exports.Repo = Repo;
