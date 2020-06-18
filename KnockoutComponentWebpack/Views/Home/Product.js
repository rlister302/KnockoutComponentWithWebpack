import * as ko from 'knockout';
var Product = /** @class */ (function () {
    function Product(name, rating) {
        this.userRating = ko.observable();
        this.name = name;
        this.userRating(rating);
    }
    return Product;
}());
export { Product };
//# sourceMappingURL=Product.js.map