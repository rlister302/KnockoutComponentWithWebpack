import * as ko from 'knockout';
import { ProductViewModel } from './ProductViewModel';
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
        this.firstName = ko.observable();
        this.lastName = ko.observable();
        this.firstName("Ryan");
        this.lastName("Lister");
    }
    HelloWorld.trigger = function (el) {
        ko.applyBindings(new HelloWorld(), $(el)[0]);
    };
    HelloWorld.triggerComp = function (el) {
        ko.components.register('like-widget', {
            viewModel: function (params) {
                console.log("creating");
                this.chosenValue = params.value;
                this.like = function () { this.chosenValue('like'); }.bind(this);
                this.dislike = function () { this.chosenValue('dislike'); }.bind(this);
            },
            template: '<div class="like-or-dislike" data-bind="visible: !chosenValue()">\
            <button data-bind="click: like">Like it</button>\
            <button data-bind="click: dislike">Dislike it</button>\
        </div>\
        <div class="result" data-bind="visible: chosenValue">\
            You <strong data-bind="text: chosenValue"></strong> it\
        </div>'
        });
        var vm = new ProductViewModel();
        ko.applyBindings(vm, $(el)[0]);
    };
    HelloWorld.makeComp = function () {
        //ko.components.register('like-widget', {
        //    viewModel: function (params) {
        //        this.chosenValue = params.value;
        //        this.like = function () { this.chosenValue('like'); }.bind(this);
        //        this.dislike = function () { this.chosenValue('dislike'); }.bind(this);
        //    },
        //    template: '<div class="like-or-dislike" data-bind="visible: !chosenValue()">\
        //    <button data-bind="click: like">Like it</button>\
        //    <button data-bind="click: dislike">Dislike it</button>\
        //</div>\
        //<div class="result" data-bind="visible: chosenValue">\
        //    You <strong data-bind="text: chosenValue"></strong> it\
        //</div>'
        //})
        ko.components.register('hello-widget', {
            template: '<div>Hello!</div>'
        });
    };
    return HelloWorld;
}());
export { HelloWorld };
//# sourceMappingURL=hello.js.map