import * as ko from 'knockout';

export class Product {
    name: string;
    userRating = ko.observable<string>();
    constructor(name: string, rating?: string) {
        this.name = name;
        this.userRating(rating)
    }
}