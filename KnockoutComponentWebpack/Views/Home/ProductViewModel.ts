import * as ko from 'knockout';
import { Product } from './Product'

export class ProductViewModel {
    public products: Product[];

    constructor() {
        this.products = [
            new Product("Garlic bread"),
            new Product("Pain au chocolat"),
            new Product("Seagull Spaghetti", "like")
        ]
    }
}