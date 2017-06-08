"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PaintingService_1 = require("../services/PaintingService");
var Account_1 = require("../model/Account");
var MainComponent = (function () {
    function MainComponent(service) {
        this.service = service;
        this.isAdmin = false;
        this.acc = new Account_1.Account();
    }
    MainComponent.prototype.login = function () {
        var _this = this;
        this.service.login(this.acc)
            .subscribe(function (res) { return _this.resultString = res; }, function (error) { return console.log(error); });
        setTimeout(function () {
            if (_this.resultString === "Successful login") {
                _this.isAdmin = true;
            }
        }, 200);
        this.acc = new Account_1.Account();
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: "main-comp",
        templateUrl: "./app/main/main.html",
    }),
    __metadata("design:paramtypes", [PaintingService_1.PaintingService])
], MainComponent);
exports.MainComponent = MainComponent;
$(document).ready(function () {
    $(document).scroll(function () {
        var nav = $('.navdiv');
        nav.toggleClass('nav2', $(this).scrollTop() > nav.height());
        $('ul li a').toggleClass('a2', $(this).scrollTop() > nav.height());
    });
});
//# sourceMappingURL=MainComponent.js.map