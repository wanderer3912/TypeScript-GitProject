"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var githubApiService_1 = require("./githubApiService");
var _ = __importStar(require("lodash"));
var svc = new githubApiService_1.GithubApiService;
svc.getUserInfo('wanderer3912', function (user) {
    svc.getRepo('wanderer3912', function (repos) {
        var sortedRepos = _.sortBy(repos, [function (repo) { return repo.numberOfForks * -1; }]);
        user.repos = sortedRepos;
        console.log(user);
    });
});
