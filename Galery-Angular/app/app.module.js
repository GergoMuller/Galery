"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_page_scroll_1 = require("ng2-page-scroll");
var MainComponent_1 = require("../app/main/MainComponent");
var AdminComponent_1 = require("../app/admin/AdminComponent");
var PaintingsComponent_1 = require("../app/paintings/PaintingsComponent");
var Constants_1 = require("../app/services/Constants");
var PaintingService_1 = require("../app/services/PaintingService");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_page_scroll_1.Ng2PageScrollModule.forRoot(),
        ],
        declarations: [
            MainComponent_1.MainComponent,
            AdminComponent_1.AdminComponent,
            PaintingsComponent_1.PaintingsComponent,
        ],
        bootstrap: [MainComponent_1.MainComponent],
        providers: [
            Constants_1.Configuration,
            PaintingService_1.PaintingService,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map