export class Repo{
    name: string ;
    description: string ;
    url:string ;
    size: number ;
    numberOfForks: number ;

    constructor(repo: any)
    {
        this.name= repo.name;
        this.description= repo.description;
        this.url=repo.htm_url;
        this.size=repo.html_size;
        this.numberOfForks= repo.forks;
    }
}