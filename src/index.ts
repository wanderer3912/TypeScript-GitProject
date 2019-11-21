import {GithubApiService} from './githubApiService';
import { User } from './user';
import { Repo } from './repo';
 import * as _ from 'lodash';
let svc =new GithubApiService;
svc.getUserInfo('wanderer3912', (user: User) => {

svc.getRepo('wanderer3912',(repos : Repo[])=> {
    let sortedRepos =_.sortBy(repos,[(repo: Repo) => repo.numberOfForks * -1]);
     user.repos=sortedRepos;
     console.log(user);
})

});
