import { PriceModel } from "./price.model";
import { AuthorModel } from "./author.model";

export class BookModel{
    public id: number;
    public title: string;
    public totalPages: number;
    public author: string;
    public price: PriceModel;
    public isPublished: boolean;
    public publishedOn: Date;
    public authors: AuthorModel[];

    /*public set author(value: string){
        this._author = 'Author: ' + value;
    }

    public get author(){
        return this._author;
    }*/
}