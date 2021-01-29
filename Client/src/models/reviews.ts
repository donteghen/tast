import { User } from 'src/models/user';
export class Review{
    constructor(public _id?:string,
        public reviewer?:User,
        public content?:string,
        public star_rating?:number,
        public review_date:number = Date.now()){}
}

