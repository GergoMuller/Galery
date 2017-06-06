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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Constants_1 = require("../services/Constants");
var PaintingService = (function () {
    function PaintingService(http, config) {
        this.http = http;
        this.config = config;
        this.url = config.paintingsUrl;
        this.header = new http_1.Headers();
        this.header.append("Content-Type", "application/json");
        this.header.append("Accept", "application/json, text/plain");
    }
    PaintingService.prototype.savePainting = function (p) {
        var pJson = JSON.stringify(p);
        return this.http.post(this.url, pJson, { headers: this.header })
            .map(function (response) { return response.json(); });
    };
    PaintingService.prototype.getAllPaintings = function () {
        return this.http.get(this.url)
            .map(function (resp) { return resp.json(); });
    };
    return PaintingService;
}());
PaintingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, Constants_1.Configuration])
], PaintingService);
exports.PaintingService = PaintingService;
//# sourceMappingURL=PaintingService.js.map