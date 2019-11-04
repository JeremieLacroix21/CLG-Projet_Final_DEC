(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n<h1 align=\"center\">Express Shop</h1>\r\n\r\n<mat-card>\r\n  <mat-card-title>Connexion</mat-card-title>\r\n\r\n  <mat-card-content>\r\n    <form [formGroup]=\"form\">\r\n      <p><mat-form-field>\r\n        <input type=\"username\" id=\"inputUsername\" name=\"username\" ngModel class=\"form-control\" matInput placeholder=\"Username\" formControlName=\"username\">\r\n        <mat-error *ngIf=\"username.hasError('required')\">Le nom d'utilisateur est obligatoire</mat-error>\r\n      </mat-form-field></p>\r\n      <br>\r\n\r\n      <p><mat-form-field>\r\n        <input type=\"password\" id=\"inputPassword\" name=\"password\" ngModel class=\"form-control\" placeholder=\"Password\" matInput formControlName=\"password\" >\r\n        <mat-error *ngIf=\"password.hasError('required')\">Le mot de passe est obligatoire</mat-error>\r\n      </mat-form-field></p>\r\n      <br>\r\n\r\n      <mat-checkbox style=\"float: right; margin-top: 15px;\">Se souvenir de moi</mat-checkbox>\r\n      <br>\r\n\r\n      <p *ngIf=\"invalidLogin\" [innerHTML]=\"errormessages\" class=\"error\">{{errormessages.name}}</p>\r\n\r\n      <div class=\"button_div\">\r\n        <button type=\"submit\" (click)=\"onSubmit(false)\" class=\"button_login\" mat-button>Se Connecter</button>\r\n        <button (click)=\"GoToSubscribe()\" mat-button>S'inscrire</button>\r\n        <button (click)=\"onSubmit(true)\" mat-button>Visiter sans compte</button>\r\n      </div>\r\n    </form>\r\n  </mat-card-content>\r\n  \r\n  <button mat-button (click)='DemandeUsername()'class=\"BTN_User\">Nom d'utilisateur oublié?</button>\r\n  <button mat-button (click)='DemandeMotdepasse()' class=\"BTN_Pass\">Mot de passe oublié?</button>\r\n</mat-card>\r\n\r\n<form [formGroup]=\"formUsername\"> <app-pop-up [isOpen]=\"popUpOpen\">\r\n  <div>\r\n\r\n    <header>\r\n      <span><b>Demande de votre nom d'utilisateur</b></span>\r\n    </header>\r\n\r\n    <main>\r\n      <p style=\"height: 1%;\">Veuillez entrer votre adresse mail:</p>\r\n      <mat-form-field>\r\n        <input type=\"text\" id=\"inputemail\" name=\"email\" ngModel class=\"form-control\" matInput placeholder=\"Adresse courriel\" formControlName=\"email\">\r\n        <mat-error *ngIf=\"email.hasError('required')\">L'adresse courriel est obligatoire</mat-error>\r\n      </mat-form-field>\r\n      <p *ngIf=\"ValideUsername\" style=\"color:green\">L'envoi du email à été effectué!</p>\r\n      <p *ngIf=\"InValideUsername\" style=\"color:red\">Aucun compte ne correspondent à ce email</p>\r\n    </main>\r\n\r\n    <footer>\r\n      <button (click)=\"SendEmailUser()\" mat-button style=\"float: left\">Envoyer</button>\r\n      <button (click)=\"cancelOption()\" mat-button style=\"float: right\">Annuler</button>\r\n    </footer>\r\n\r\n  </div>\r\n</app-pop-up> </form>\r\n\r\n<form [formGroup]=\"formPassword\"> <app-pop-up [isOpen]=\"popUpOpenPassword\">\r\n  <div>\r\n\r\n    <header>\r\n      <span><b>Demande de votre mot de passe</b></span>\r\n    </header>\r\n\r\n    <main>\r\n      <p style=\"height: 1%;\">Veuillez entrer votre nom d'utilisateur:</p>\r\n      <mat-form-field>\r\n        <input type=\"text\" id=\"inputemailPop\" name=\"username2\" ngModel class=\"form-control\" matInput placeholder=\"Nom d'utilisateur\" formControlName=\"username2\">\r\n        <mat-error *ngIf=\"username2.hasError('required')\">Le nom d'utilisateur est obligatoire</mat-error>\r\n      </mat-form-field>\r\n      <p *ngIf=\"ValidePassword\" style=\"color:green\">L'envoi du email à été effectué!</p>\r\n      <p *ngIf=\"InValidePassword\" style=\"color:red\">Aucun compte ne correspondent à ce nom d'utilisateur</p>\r\n    </main>\r\n\r\n    <footer>\r\n      <button (click)=\"SendEmailPass()\" mat-button style=\"float: left\">Envoyer</button>\r\n      <button (click)=\"cancelOption()\" mat-button style=\"float: right\">Annuler</button>\r\n    </footer>\r\n\r\n  </div>\r\n</app-pop-up> </form>\r\n\r\n<ngx-spinner [fullScreen]=\"true\" type=\"ball-clip-rotate-multiple\" size=\"medium\">\r\n  <p class=\"loadingText\">Connection en cours...</p>\r\n</ngx-spinner>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up component/pop-up.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up component/pop-up.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shade\" [@openCloseShade]=\"isOpen ? 'open' : 'closed'\">&nbsp;</div>\r\n<div class=\"pop-up\" [@openClose]=\"isOpen ? 'open' : 'closed'\">\r\n  <div class=\"pop-up-box\"><ng-content></ng-content></div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe/subscribe.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe/subscribe.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class.filter]=\"isBlur\">\r\n\r\n    <h1 align=\"center\">Express Shop</h1>\r\n    \r\n    <mat-card>\r\n        <mat-card-title>Inscription</mat-card-title>\r\n    <mat-card-content>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    \r\n        <p><mat-form-field>\r\n            <input type=\"username\" id=\"inputUsername\" name=\"username\" ngModel class=\"form-control\" matInput placeholder=\"Nom d'utilisateur\" formControlName=\"username\">\r\n            <mat-error *ngIf=\"username.hasError('required')\">Le nom d'utilisateur est obligatoire</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input type=\"password\" id=\"inputPassword\" name=\"password\" ngModel class=\"form-control\" placeholder=\"Mot de passe\" matInput formControlName=\"password\" >\r\n            <mat-error *ngIf=\"password.hasError('required')\">Le mot de passe est obligatoire</mat-error>\r\n        </mat-form-field></p>\r\n    \r\n        <p><mat-form-field>\r\n            <input type=\"prenom\" id=\"inputprenom\" name=\"prenom\" ngModel class=\"form-control\" matInput placeholder=\"Prénom\" formControlName=\"prenom\">\r\n            <mat-error *ngIf=\"prenom.hasError('required')\">Le prenom est obligatoire</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input type=\"nom\" id=\"inputnom\" name=\"nom\" ngModel class=\"form-control\" placeholder=\"Nom de famille\" matInput formControlName=\"nom\" >\r\n            <mat-error *ngIf=\"nom.hasError('required')\">Le nom est obligatoire</mat-error>\r\n        </mat-form-field></p>\r\n\r\n        <p><mat-form-field>\r\n            <input type=\"adresse\" id=\"inputadresse\" name=\"adresse\" ngModel class=\"form-control\" matInput placeholder=\"Adresse\"  formControlName=\"adresse\">\r\n            <mat-error *ngIf=\"adresse.hasError('required')\">L'adresse est obligatoire</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input type=\"Telephone\" id=\"inputTelephone\" name=\"Telephone\" ngModel class=\"form-control\"  placeholder=\"Numéro de téléphone\" matInput formControlName=\"Telephone\" >\r\n            <mat-error *ngIf=\"Telephone.hasError('required')\">Le numéro de téléphone est obligatoire</mat-error>\r\n        </mat-form-field></p>\r\n\r\n        <p><mat-form-field>\r\n            <input type=\"email\" id=\"inputemail\" name=\"email\" ngModel class=\"form-control\" matInput placeholder=\"Adresse courriel\" formControlName=\"email\">\r\n            <mat-error *ngIf=\"email.hasError('required')\">L'adresse courriel est obligatoire</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <mat-label>Type du compte</mat-label>\r\n            <select (change)=\"selectChangeHandler($event)\" matNativeControl>\r\n                <option value=\"Fournisseur\">Fournisseur</option>\r\n                <option value=\"Distributeur\">Distributeur</option>\r\n            </select>\r\n        </mat-form-field></p>\r\n        \r\n        <p class=\"upload\">Photo de profil</p>\r\n        <p style=\"height: 155px\">\r\n            <img id=\"Image\" [src]=\"imageSrc\" class=\"IMG\"/>\r\n            <mat-form-field appearance=\"outline\" class=\"description-field\">\r\n                <mat-label>Description</mat-label>\r\n                <textarea matInput placeholder=\"Description de votre compagnie\" name=\"Description\" formControlName=\"Description\" id=\"inputDescription\"></textarea>\r\n                <mat-error *ngIf=\"Description.hasError('required')\">La description est obligatoire</mat-error>\r\n            </mat-form-field>\r\n        </p>\r\n        <p><input type='file' class=\"upload\" (change)=\"onFileChanged($event)\"/></p>\r\n        <p class=\"tag\" *ngIf=\"EstFournisseur\">\r\n            <mat-form-field class=\"tag\">\r\n                   <mat-chip-list #chipList aria-label=\"Tags selection\">\r\n                     <mat-chip *ngFor=\"let tags of tag\" [selectable]=\"selectable\"\r\n                              [removable]=\"removable\" (removed)=\"remove(tags)\">\r\n                       {{tags.name}}\r\n                       <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                     </mat-chip>\r\n                     <input placeholder=\"Tags du Fournisseur\"\r\n                            [matChipInputFor]=\"chipList\"\r\n                            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                            [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                            (matChipInputTokenEnd)=\"add($event)\">\r\n                   </mat-chip-list>\r\n             </mat-form-field>\r\n           </p>\r\n        <p *ngIf=\"invalidsubscribe\" [innerHTML]=\"errormessages\" class=\"error\">{{errormessages.name}}</p>\r\n        \r\n        <div class=\"button_div\">\r\n            <button type=\"submit\" mat-button>S'inscrire</button>\r\n            <button class=\"button_login\" (click)=\"AnnunlerOption()\" mat-button>Annuler</button>\r\n        </div>\r\n    \r\n    </form>\r\n    </mat-card-content>\r\n    </mat-card>\r\n    <app-pop-up [isOpen]=\"popUpOpen\">\r\n        <div class=\"blur\">\r\n          <header>\r\n            <span class=\"title\">Inscription Réussi!</span>\r\n          </header>\r\n          <main style=\"text-align: center\">\r\n            <p>Votre demande d'inscription a été envoyé à notre équipe d'analyste</p>\r\n            <p>Vous receverez une confirmation par email d'ici peu!</p>\r\n          </main>\r\n          <footer>\r\n            <button (click)=\"cancelOption()\" mat-button style=\"float: right\">Retour au menu</button>\r\n          </footer>\r\n        </div>\r\n      </app-pop-up>\r\n      <ngx-spinner [fullScreen]=\"true\" type=\"ball-clip-rotate-multiple\" size=\"medium\">\r\n        <p class=\"loadingText\">Création de votre compte...</p>\r\n      </ngx-spinner>\r\n    </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");







const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '404', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
    {
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule)
    },
    {
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        path: 'subscribe',
        component: _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_5__["SubscribeComponent"],
    },
    { path: '**', redirectTo: '404' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'expressShop';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _pop_up_component_pop_up_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pop-up component/pop-up.module */ "./src/app/pop-up component/pop-up.module.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");











//Angular Material Components


































//other











//google map

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__["SubscribeComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_54__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _pop_up_component_pop_up_module__WEBPACK_IMPORTED_MODULE_43__["PopUpModule"],
            // material
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_40__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_41__["MatBottomSheetModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_42__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_29__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__["MatPaginatorModule"],
            //other
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__["A11yModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_45__["DragDropModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["ScrollingModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_48__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_49__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_50__["CdkTreeModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_52__["TextMaskModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_53__["NgxSpinnerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_55__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyB23aRLsMN0fgjxGHsf-PyXC8EHtgznvg8'
            })
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    canActivate(route, state) {
        console.log("Checking Auth...");
        let canActivate = true;
        if (this.authenticationService.currUser) {
            if (state.url === '/login' || state.url === '/subscribe') {
                console.log("Redirecting to home...");
                this.router.navigate(['/home']);
                canActivate = false;
            }
        }
        else if (state.url !== '/login' && state.url !== '/subscribe') {
            console.log("Redirecting to login...");
            this.router.navigate(['/login']);
            canActivate = false;
        }
        return canActivate;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 100px 0px;\r\n  }\r\n\r\n  .mat-form-field {\r\n    width: 100%;\r\n    min-width: 300px;\r\n  }\r\n\r\n  mat-card-title,\r\n  mat-card-content {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .error {\r\n    padding: 5px;\r\n    width: 100%;\r\n    color:  red;\r\n  }\r\n\r\n  .button_div{\r\n      padding-top: 40px;\r\n  }\r\n\r\n  .button_login {\r\n      float: right;\r\n  }\r\n\r\n  .BTN_User{\r\n    position: relative;\r\n    float: left;\r\n    left: 10px;\r\n    bottom: 240px;\r\n  }\r\n\r\n  .BTN_Pass{\r\n    position: relative;\r\n    right: 176px;\r\n    bottom: 140px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBQ0E7TUFDSSxpQkFBaUI7RUFDckI7O0VBQ0E7TUFDSSxZQUFZO0VBQ2hCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtFQUNmOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMDBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQtdGl0bGUsXHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZXJyb3Ige1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIHJlZDtcclxuICB9ICBcclxuICAuYnV0dG9uX2RpdntcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgfVxyXG4gIC5idXR0b25fbG9naW4ge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5CVE5fVXNlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGJvdHRvbTogMjQwcHg7XHJcbiAgfVxyXG4gIC5CVE5fUGFzc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAxNzZweDtcclxuICAgIGJvdHRvbTogMTQwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _models_DEBUG_LOGIN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/DEBUG-LOGIN */ "./src/app/models/DEBUG-LOGIN.ts");
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/config */ "./src/config.ts");







let LoginComponent = class LoginComponent {
    constructor(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.formUsername = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
        this.formPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.InValideUsername = false;
        this.InValidePassword = false;
        this.ValidePassword = false;
        this.ValideUsername = false;
        this.popUpOpenPassword = false;
        this.popUpOpen = false;
        this.loading = false;
        this.submitted = false;
    }
    get username() { return this.form.get('username'); }
    get password() { return this.form.get('password'); }
    get email() { return this.formUsername.get('email'); }
    get username2() { return this.formPassword.get('username2'); }
    ngOnInit() {
        console.log("login page init");
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (_models_DEBUG_LOGIN__WEBPACK_IMPORTED_MODULE_5__["DEBUGGING"]) {
            localStorage.setItem(src_config__WEBPACK_IMPORTED_MODULE_6__["config"].storedUser, JSON.stringify({ nomutilisateur: "test", pwd: "Qwerty123!" }));
            this.router.navigate([this.returnUrl]);
        }
        else {
            this.errorMessageSub = this.authenticationService.errorMessage.subscribe(err => {
                console.log(err);
                this.invalidLogin = true;
                this.errormessages = err;
                this.loading = false;
            });
            this.currUserSub = this.authenticationService.currentUser.subscribe(u => {
                if (u) {
                    this.router.navigate([this.returnUrl]);
                }
            });
        }
    }
    ngOnDestroy() {
        this.errorMessageSub.unsubscribe();
        this.currUserSub.unsubscribe();
    }
    GoToSubscribe() {
        this.router.navigate(["/subscribe"]);
    }
    DemandeUsername() {
        this.popUpOpen = true;
    }
    DemandeMotdepasse() {
        this.popUpOpenPassword = true;
    }
    cancelOption() {
        this.popUpOpen = false;
        this.popUpOpenPassword = false;
    }
    SendEmailUser() {
        this.authenticationService.SendUsername(this.formUsername.controls.email.value).subscribe(data => {
            this.ValideUsername = true;
        }, err => {
            this.InValideUsername = true;
        });
    }
    SendEmailPass() {
        this.authenticationService.SendPassword(this.formPassword.controls.username2.value).subscribe(data => {
            this.ValidePassword = true;
        }, err => {
            this.InValidePassword = true;
        });
    }
    onSubmit(loginAsVisitor) {
        if (loginAsVisitor) {
            this.authenticationService.loginAsVisitor();
        }
        else {
            this.submitted = true;
            if (!this.form.invalid) {
                this.loading = true;
                this.authenticationService.login(this.form.controls.username.value, this.form.controls.password.value);
            }
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/models/API-CONFIG.ts":
/*!**************************************!*\
  !*** ./src/app/models/API-CONFIG.ts ***!
  \**************************************/
/*! exports provided: USE_LOCAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_LOCAL", function() { return USE_LOCAL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const USE_LOCAL = false;


/***/ }),

/***/ "./src/app/models/DEBUG-LOGIN.ts":
/*!***************************************!*\
  !*** ./src/app/models/DEBUG-LOGIN.ts ***!
  \***************************************/
/*! exports provided: DEBUGGING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUGGING", function() { return DEBUGGING; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const DEBUGGING = false;


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: SUPPLIER, DISTRIB, ADMIN, VISIT, BD_User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPLIER", function() { return SUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISTRIB", function() { return DISTRIB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN", function() { return ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISIT", function() { return VISIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BD_User", function() { return BD_User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const SUPPLIER = "Fournisseur";
const DISTRIB = "Distributeur";
const ADMIN = "Admin";
const VISIT = "Visiteur";
class BD_User {
}


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: ` <h2>404</h2> `
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/pop-up component/animation.ts":
/*!***********************************************!*\
  !*** ./src/app/pop-up component/animation.ts ***!
  \***********************************************/
/*! exports provided: openCloseAnimation, openCloseShadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCloseAnimation", function() { return openCloseAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCloseShadeAnimation", function() { return openCloseShadeAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const openCloseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1,
        transform: 'scale(1)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        transform: 'scale(0)',
        display: 'none',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed, closed => open', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.25s')
    ]),
]);
const openCloseShadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openCloseShade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: .2,
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        display: 'none',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed, closed => open', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.25s')
    ]),
]);


/***/ }),

/***/ "./src/app/pop-up component/pop-up.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pop-up component/pop-up.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 100px 0px;\r\n}\r\n  .shade {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    background: transparent;\r\n  }\r\n  .pop-up {\r\n    z-index: 1001;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    padding: 1ch;\r\n    }\r\n  .pop-up-box {\r\n      width: 40%;\r\n      height: 20%;\r\n      overflow-y: auto;\r\n      max-height: 870px;\r\n      margin: 0 auto;\r\n      padding: 1rem;\r\n      box-shadow: 3px 3px 3px #8d8b8b;\r\n      background: #ffffff;\r\n      color: #000000;\r\n    }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wLXVwIGNvbXBvbmVudC9wb3AtdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25CO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFlBQVk7SUFDWjtFQUNBO01BQ0UsVUFBVTtNQUNWLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxhQUFhO01BQ2IsK0JBQStCO01BQy9CLG1CQUFtQjtNQUNuQixjQUFjO0lBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcG9wLXVwIGNvbXBvbmVudC9wb3AtdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMTAwcHggMHB4O1xyXG59XHJcbiAgLnNoYWRlIHtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnBvcC11cCB7XHJcbiAgICB6LWluZGV4OiAxMDAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAxY2g7XHJcbiAgICB9ICBcclxuICAgIC5wb3AtdXAtYm94IHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIG1heC1oZWlnaHQ6IDg3MHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggIzhkOGI4YjtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/pop-up component/pop-up.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pop-up component/pop-up.component.ts ***!
  \******************************************************/
/*! exports provided: PopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponent", function() { return PopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "./src/app/pop-up component/animation.ts");



let PopUpComponent = class PopUpComponent {
    constructor() {
        this.isOpen = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopUpComponent.prototype, "isOpen", void 0);
PopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pop-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pop-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up component/pop-up.component.html")).default,
        animations: [
            _animation__WEBPACK_IMPORTED_MODULE_2__["openCloseAnimation"],
            _animation__WEBPACK_IMPORTED_MODULE_2__["openCloseShadeAnimation"],
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pop-up.component.css */ "./src/app/pop-up component/pop-up.component.css")).default]
    })
], PopUpComponent);



/***/ }),

/***/ "./src/app/pop-up component/pop-up.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pop-up component/pop-up.module.ts ***!
  \***************************************************/
/*! exports provided: PopUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpModule", function() { return PopUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pop-up.component */ "./src/app/pop-up component/pop-up.component.ts");




let PopUpModule = class PopUpModule {
};
PopUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["PopUpComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["PopUpComponent"]]
    })
], PopUpModule);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







let AuthService = class AuthService {
    constructor(http, spinner) {
        this.http = http;
        this.spinner = spinner;
        this.errorMessageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.errorMessage = this.errorMessageSource.asObservable();
        // TODO : Figure out tokens
        let storedUser = JSON.parse(sessionStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].storedUser));
        if (!storedUser) {
            let loggedUserJSON = localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].storedUser);
            let loggedUserNameAndPwd = JSON.parse(loggedUserJSON);
            if (loggedUserNameAndPwd) {
                this.login(loggedUserNameAndPwd.nomutilisateur, loggedUserNameAndPwd.pwd);
            }
        }
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](storedUser);
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get S() { return _models_user__WEBPACK_IMPORTED_MODULE_5__["SUPPLIER"]; }
    get V() { return _models_user__WEBPACK_IMPORTED_MODULE_5__["VISIT"]; }
    get D() { return _models_user__WEBPACK_IMPORTED_MODULE_5__["DISTRIB"]; }
    get A() { return _models_user__WEBPACK_IMPORTED_MODULE_5__["ADMIN"]; }
    get currType() {
        return this.currUser.TypeUser;
    }
    updateSessionStorage() {
        sessionStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].storedUser, JSON.stringify(this.currentUserSubject.value));
    }
    get currUser() {
        return this.currentUserSubject.value;
    }
    get currSupplier() {
        return this.currentUserSubject.value;
    }
    get currDistributor() {
        return this.currentUserSubject.value;
    }
    updateCurrUser(user) {
        this.currentUserSubject.next(user);
    }
    loginAsVisitor() {
        if (!this.currUser) {
            let visitor = new _models_user__WEBPACK_IMPORTED_MODULE_5__["BD_User"]();
            visitor.TypeUser = _models_user__WEBPACK_IMPORTED_MODULE_5__["VISIT"];
            this.currentUserSubject.next(visitor);
        }
    }
    login(username, password) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('name', username)
            .set('password', password);
        let request = this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_4__["config"].apiUrl}/api/login`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_4__["config"].headerObject);
        this.spinner.show();
        request.subscribe(user => {
            this.spinner.hide();
            this.currentUserSubject.next(user);
            localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].storedUser, JSON.stringify({ "nomutilisateur": username, "pwd": password }));
            sessionStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].storedUser, JSON.stringify(this.currentUserSubject.value));
        }, err => {
            this.spinner.hide();
            this.errorMessageSource.next(err.error);
        });
    }
    SendUsername(email) {
        const sendemail = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', email);
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_4__["config"].apiUrl}/api/RecoverUsername`, sendemail.toString(), _config__WEBPACK_IMPORTED_MODULE_4__["config"].headerObject);
    }
    SendPassword(username) {
        const sendemail = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('nomutilisateur', username);
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_4__["config"].apiUrl}/api/RecoverPassword`, sendemail.toString(), _config__WEBPACK_IMPORTED_MODULE_4__["config"].headerObject);
    }
    logout() {
        localStorage.removeItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].storedUser);
        sessionStorage.removeItem(_config__WEBPACK_IMPORTED_MODULE_4__["config"].storedUser);
        this.currentUserSubject.next(null);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AuthService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/services/subscribe.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/subscribe.service.ts ***!
  \***********************************************/
/*! exports provided: subscribeservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeservice", function() { return subscribeservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let subscribeservice = class subscribeservice {
    constructor(http) {
        this.http = http;
    }
    uploadImage(Images) {
        const Image = new FormData();
        Image.append('Image', Images);
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/AddImage`, Image);
    }
    subscribe(username, password, prenom, nom, adresse, telephone, email, typeuser, photo, description) {
        const User = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('name', username).set('password', password)
            .set('prenom', prenom).set('nom', nom)
            .set('adresse', adresse).set('telephone', telephone)
            .set('email', email).set('TypeUser', typeuser)
            .set('photo', photo).set('description', description)
            .set('admin', "0").set('confirme', "0")
            .set('dateinscription', Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/register`, User.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    AddTag(TagFinal) {
        const tag = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('Tags', TagFinal);
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/AddTag`, tag.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
};
subscribeservice.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
subscribeservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], subscribeservice);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/GetAllUsers`, _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    getAllSuppliers() {
        return this.http.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/GetAllSuppliers`, _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    updateConfirmRegistration(iduser, confirmRegistration) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('iduser', iduser.toString())
            .set('confirme', confirmRegistration.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/UpdateConfirmRegistration`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    deleteUser(iduser) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('iduser', iduser.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/DeleteUser`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    UpdatePassword(iduser, NouveauMotdePasse) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('iduser', iduser.toString())
            .set('nouveaumotdepasse', NouveauMotdePasse.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/UpdatePassword`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    UpdateUser(iduser, nomutilisateur, courriel, téléphone, description) {
        console.log("update");
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('iduser', iduser.toString())
            .set('nomutilisateur', nomutilisateur)
            .set('email', courriel)
            .set('Telephone', téléphone)
            .set('description', description);
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/UpdateUser`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    GetUserInformation(iduser) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('iduser', iduser.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/GetUserInformation`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    getLogs() {
        return this.http.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/GetLogs`, _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    UpdateRating(iduser, idfournisseur, rating) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('iduser', iduser.toString())
            .set('idfournisseur', idfournisseur.toString())
            .set('rating', rating.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/UpdateRating`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    GetFavoriteSuppliers(iduser) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('iduser', iduser.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/GetFavoriteSuppliers`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/subscribe/subscribe.component.css":
/*!***************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 100px 0px;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 300px;\r\n  margin-left:15px;\r\n  margin-right:15px;\r\n}\r\n\r\nmat-card-title,\r\nmat-card-content {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.error {\r\n  padding: 16px;\r\n  width: 100%;\r\n  color: red;\r\n}\r\n\r\n.button_div{\r\n    padding-top: 20px;\r\n}\r\n\r\n.button_login {\r\n    float: right;\r\n}\r\n\r\n.IMG{\r\n  border: 1px solid  darkgray;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  width: 125px;\r\n  min-width: 50px;\r\n  height: 125px;\r\n  margin-left:15px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.upload{\r\n  margin-left: 15px;\r\n  color: darkgray;\r\n}\r\n\r\n.description-field {\r\n  left: 50px;\r\n  bottom: 18px;\r\n}\r\n\r\n.BTN_menu{\r\n  background-color: white;\r\n  width: 30%;\r\n  height: 20%;\r\n  border: 0px;\r\n  color: darkgray;\r\n  float: right;\r\n}\r\n\r\n.blur{\r\n  -webkit-filter: blur(0px);\r\n          filter: blur(0px)\r\n  }\r\n\r\n.tag{\r\n    min-width: 300px;\r\n    width: 90%;\r\n  }\r\n\r\n.filter { -webkit-filter: blur(3px); filter: blur(3px);  } \r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQWdCO1VBQWhCO0VBQ0E7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztBQUVBLFVBQVUseUJBQWlCLEVBQWpCLGlCQUFpQixHQUFHIiwiZmlsZSI6InNyYy9hcHAvc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMDBweCAwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlLFxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHJlZDtcclxufSAgXHJcbi5idXR0b25fZGl2e1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmJ1dHRvbl9sb2dpbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5JTUd7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIGRhcmtncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDEyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG4udXBsb2Fke1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGNvbG9yOiBkYXJrZ3JheTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWZpZWxkIHtcclxuICBsZWZ0OiA1MHB4O1xyXG4gIGJvdHRvbTogMThweDtcclxufVxyXG5cclxuLkJUTl9tZW51e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgY29sb3I6IGRhcmtncmF5O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmJsdXJ7XHJcbiAgZmlsdGVyOiBibHVyKDBweClcclxuICB9XHJcbiAgLnRhZ3tcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlciB7IGZpbHRlcjogYmx1cigzcHgpOyAgfSBcclxuICBcclxuIl19 */");

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_subscribe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/subscribe.service */ "./src/app/services/subscribe.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







let SubscribeComponent = class SubscribeComponent {
    constructor(spinner, route, router, subscribeservice) {
        this.spinner = spinner;
        this.route = route;
        this.router = router;
        this.subscribeservice = subscribeservice;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]),
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            prenom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            TypeUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            adresse: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Telephone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            Image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.popUpOpen = false;
        this.loading = false;
        this.isBlur = false;
        this.submitted = false;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.tag = [];
    }
    get username() { return this.form.get('username'); }
    get password() { return this.form.get('password'); }
    get nom() { return this.form.get('nom'); }
    get prenom() { return this.form.get('prenom'); }
    get TypeUser() { return this.form.get('TypeUser'); }
    get adresse() { return this.form.get('adresse'); }
    get email() { return this.form.get('email'); }
    get Telephone() { return this.form.get('Telephone'); }
    get Image() { return this.form.get('Image'); }
    get Description() { return this.form.get('Description'); }
    get tags() { return this.form.get('tags'); }
    cancelOption() {
        this.popUpOpen = false;
        this.isBlur = false;
        this.router.navigate(["/home/browseProduct"]);
    }
    AnnunlerOption() {
        this.router.navigate([this.returnUrl]);
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.imageSrc = "assets/img/campagne.jpg";
        this.form.controls.Image.setValue(this.imageSrc);
        this.form.controls.TypeUser.setValue("Fournisseur");
        this.EstFournisseur = true;
    }
    selectChangeHandler(event) {
        if (event.target.value == "Fournisseur") {
            this.EstFournisseur = true;
        }
        else {
            this.EstFournisseur = false;
        }
        this.form.controls.TypeUser.setValue(event.target.value);
    }
    onFileChanged(event) {
        this.selectedfile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result.toString();
        reader.readAsDataURL(this.selectedfile);
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        else {
            this.spinner.show();
            this.onUpload();
            this.subscribeservice.subscribe(this.form.controls.username.value, this.form.controls.password.value, this.form.controls.prenom.value, this.form.controls.nom.value, this.form.controls.adresse.value, this.form.controls.Telephone.value, this.form.controls.email.value, this.form.controls.TypeUser.value, this.form.controls.Image.value, this.form.controls.Description.value).subscribe((res) => {
                if (this.form.controls.TypeUser.value == "Fournisseur") {
                    this.AjoutTags(this.tag);
                }
                this.invalidsubscribe = false;
                this.spinner.hide();
                this.isBlur = true;
                this.popUpOpen = true;
            }, (err) => {
                this.spinner.hide();
                this.invalidsubscribe = true;
                this.errormessages = err.error;
            });
        }
    }
    onUpload() {
        this.subscribeservice.uploadImage(this.selectedfile).subscribe((res) => {
            this.form.controls.Image.setValue(res.toString());
        }, (err) => {
            console.log(err);
        });
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add our tag
        if ((value || '').trim()) {
            this.tag.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(tag) {
        const index = this.tag.indexOf(tag);
        if (index >= 0) {
            this.tag.splice(index, 1);
        }
    }
    AjoutTags(tag) {
        this.TagChaine = "";
        tag.forEach(element => {
            this.TagChaine += element.name + ";";
        });
        this.TagChaine = this.TagChaine.substring(0, this.TagChaine.length - 1);
        this.subscribeservice.AddTag(this.TagChaine).subscribe((res) => {
            this.form.controls.tags.setValue(res.toString());
        }, (err) => {
            console.log(err);
        });
    }
};
SubscribeComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_subscribe_service__WEBPACK_IMPORTED_MODULE_4__["subscribeservice"] }
];
SubscribeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscribe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subscribe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subscribe/subscribe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subscribe.component.css */ "./src/app/subscribe/subscribe.component.css")).default]
    })
], SubscribeComponent);



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_models_API_CONFIG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/models/API-CONFIG */ "./src/app/models/API-CONFIG.ts");



const config = {
    apiUrl: _app_models_API_CONFIG__WEBPACK_IMPORTED_MODULE_2__["USE_LOCAL"] ? 'http://127.0.0.1:8000' : 'http://3.15.151.13/Laravel',
    headerObject: { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded') },
    storedUser: 'currentUser'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Git-Repo\Projet_Final_Technique\frontend2\expressShop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map