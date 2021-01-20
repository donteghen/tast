export class Restaurant{
    constructor(public _id?:string,
        public name?:string, 
        public location?:string,
        public menu?:{drinks:string[], dishes:string[]},
        public reviews?:string[]){}
}