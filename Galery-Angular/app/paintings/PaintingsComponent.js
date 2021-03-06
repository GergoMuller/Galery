"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var PaintingsComponent = (function (_super) {
    __extends(PaintingsComponent, _super);
    function PaintingsComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.selectedPainting = new Painting_1.Painting();
        return _this;
    }
    PaintingsComponent.prototype.ngOnInit = function () {
        this.refreshPaintings();
    };
    PaintingsComponent.prototype.refreshPaintings = function () {
        var _this = this;
        this.service.getAllPaintings()
            .subscribe(function (res) { return _this.paintings = res; }, function (error) { return console.log(error); }, function () { return console.log("REST get painting done"); });
    };
    PaintingsComponent.prototype.delete = function () {
        this.service.delete(this.selectedPainting.id);
        this.paintings.splice(this.selIndex, 1);
    };
    PaintingsComponent.prototype.over = function (i) {
        var elementName = "#details" + i;
        $(elementName).removeAttr("hidden");
        $("#p" + i).addClass("fadep");
    };
    PaintingsComponent.prototype.leave = function (i) {
        var elementName = "#details" + i;
        $(elementName).attr("hidden", "true");
        $("#p" + i).removeClass("fadep");
    };
    PaintingsComponent.prototype.showBig = function (i) {
        this.selectedPainting = this.paintings[i];
        this.selIndex = i;
    };
    PaintingsComponent.prototype.forward = function (i) {
        if (this.selIndex < this.paintings.length - 1) {
            this.selectedPainting = this.paintings[this.selIndex++ + 1];
        }
    };
    PaintingsComponent.prototype.back = function (i) {
        if (this.selIndex > 0) {
            this.selectedPainting = this.paintings[this.selIndex-- - 1];
        }
    };
    PaintingsComponent.prototype.ngAfterViewChecked = function () { };
    return PaintingsComponent;
}(core_1.OnInit));
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PaintingsComponent.prototype, "isAdmin", void 0);
PaintingsComponent = __decorate([
    core_1.Component({
        selector: "paintings-comp",
        templateUrl: "./app/paintings/paintings.html"
    }),
    __metadata("design:paramtypes", [PaintingService_1.PaintingService])
], PaintingsComponent);
exports.PaintingsComponent = PaintingsComponent;
//# sourceMappingURL=PaintingsComponent.js.map