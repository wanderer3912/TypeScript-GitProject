import { Repo } from "./repo";

export class User {
    login: string ;
    fullName: string ;
    reppoCount: number ;
    followerCount: number ;
    repos? : Repo[];
    
constructor(userResponse : any)
{
    this.login= userResponse.login;
    this.fullName=userResponse.name;
    this.reppoCount= userResponse.public_repos;
    this.followerCount= userResponse.followers;
    //this.repos= userResponse.login;
}
}