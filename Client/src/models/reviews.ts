export class Review{
    constructor(public _id?:string,
        public reviewer?:string,
        public content?:string,
        public star_rating?:number,
        public review_date:number = Date.now()){}
}

