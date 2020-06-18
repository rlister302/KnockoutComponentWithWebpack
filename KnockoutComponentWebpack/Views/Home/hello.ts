import * as ko from 'knockout';
import { Product } from './Product';
import { ProductViewModel } from './ProductViewModel';


export class HelloWorld {

    firstName = ko.observable<string>();
    lastName = ko.observable<string>();

    constructor() {
        this.firstName("Ryan");
        this.lastName("Lister");
    }

    public static trigger(el: JQuery) {
        ko.applyBindings(new HelloWorld(), $(el)[0]);
    }

    public static triggerComp(el: JQuery) {
        ko.components.register('like-widget', {
            viewModel: function (params) {
                console.log("creating")
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
        })

        var vm = new ProductViewModel();
        ko.applyBindings(vm, $(el)[0]);

    }

    public static makeComp() {
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
        })
    }
}