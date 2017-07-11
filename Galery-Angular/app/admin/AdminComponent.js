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
var Painting_1 = require("../model/Painting");
var PaintingService_1 = require("../services/PaintingService");
var AdminComponent = (function () {
    function AdminComponent(service) {
        this.service = service;
        this.refreshEvent = new core_1.EventEmitter();
        this.newPainting = new Painting_1.Painting();
    }
    AdminComponent.prototype.savePainting = function () {
        var _this = this;
        this.service.savePainting(this.newPainting)
            .subscribe(function (res) { return _this.resultString = res; }, function (error) { console.log(error); _this.resultString = "ERROR"; }, function () { return console.log("REST post painting done"); });
        setTimeout(function () { return _this.refreshEvent.emit(); }, 800);
    };
    AdminComponent.prototype.ngOnInit = function () {
        var a = $('#browse');
        a.click(function () {
            $("#browse2").trigger("click");
        });
        var a = $('#imp');
        a.click(function () {
            $("#imp2").trigger("click");
        });
    };
    AdminComponent.prototype.onImgChange = function (event) {
        this.readThis(event.target);
    };
    AdminComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.newPainting.painting = myReader.result;
            _this.newPainting.painting = _this.newPainting.painting.substring(23);
        };
        myReader.readAsDataURL(file);
    };
    AdminComponent.prototype.onImgChange2 = function (event) {
        this.readThis2(event.target);
    };
    AdminComponent.prototype.readThis2 = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.newPainting.imprint = myReader.result;
            _this.newPainting.imprint = _this.newPainting.imprint.substring(23);
        };
        myReader.readAsDataURL(file);
    };
    return AdminComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AdminComponent.prototype, "refreshEvent", void 0);
AdminComponent = __decorate([
    core_1.Component({
        selector: "admin-comp",
        templateUrl: "./app/admin/admin.html",
    }),
    __metadata("design:paramtypes", [PaintingService_1.PaintingService])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=AdminComponent.js.map