(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/ng-starrating/fesm2015/ng-starrating.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng-starrating/fesm2015/ng-starrating.js ***!
  \**************************************************************/
/*! exports provided: RatingModule, StarRatingComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return RatingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { StarRatingComponent } from '../components/star-rating/star-rating.component'
class RatingComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RatingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-rating',
                template: `
    <p>
      rating works!
    </p>
  `
            }] }
];
/** @nocollapse */
RatingComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StarRatingComponent {
    constructor() {
        this.stars = [];
        this._readOnly = false;
        this.rate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (!this.onValueChange) {
            this.onValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onValueChange.subscribe((/**
             * @return {?}
             */
            () => {
                this.generateRating();
                this.applySizeAllStars();
            }));
        }
        if (!this.onCheckedColorChange) {
            this.onCheckedColorChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onCheckedColorChange.subscribe((/**
             * @return {?}
             */
            () => {
                this.applyColorStyleAllStars(true);
            }));
        }
        if (!this.onUnCheckedColorChange) {
            this.onUnCheckedColorChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onUnCheckedColorChange.subscribe((/**
             * @return {?}
             */
            () => {
                this.applyColorStyleAllStars(false);
            }));
        }
        if (!this.onSizeChange) {
            this.onSizeChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onSizeChange.subscribe((/**
             * @return {?}
             */
            () => {
                this.applySizeAllStars();
            }));
        }
        if (!this.onReadOnlyChange) {
            this.onReadOnlyChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onReadOnlyChange.subscribe((/**
             * @return {?}
             */
            () => {
                this.addRemoveEvents();
            }));
        }
    }
    /**
     * @return {?}
     */
    get checkedcolor() {
        return this._checkedColor;
    }
    /**
     * @return {?}
     */
    get uncheckedcolor() {
        return this._unCheckedColor;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size.concat((!this._size.includes("px") ? "px" : ""));
    }
    /**
     * @return {?}
     */
    get readonly() {
        return String(this._readOnly) === "true";
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checkedcolor(value) {
        this._checkedColor = value;
        if (this._checkedColor) {
            this.onCheckedColorChange.next(this._checkedColor);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set uncheckedcolor(value) {
        this._unCheckedColor = value;
        if (this._unCheckedColor) {
            this.onUnCheckedColorChange.next(this._unCheckedColor);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (!value || value == null) {
            value = 0;
        }
        if (value > 5) {
            value = 5;
        }
        this._value = value;
        if (this._value >= 0) {
            this.onValueChange.next(this._value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        if (!value || value == null || value == "0px") {
            value = "24px";
        }
        this._size = value;
        this.onSizeChange.next(this._size);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set readonly(value) {
        this._readOnly = value;
        this.onReadOnlyChange.next(value);
    }
    /**
     * @private
     * @return {?}
     */
    makeEditable() {
        this.mainElement.nativeElement.addEventListener('mouseleave', this.offStar.bind(this));
        this.mainElement.nativeElement.style.cursor = "pointer";
        this.mainElement.nativeElement.title = this.value;
        this.stars.forEach((/**
         * @param {?} star
         * @return {?}
         */
        (star) => {
            star.nativeElement.addEventListener('click', this.onRate.bind(this));
            star.nativeElement.addEventListener('mouseenter', this.onStar.bind(this));
            star.nativeElement.style.cursor = "pointer";
            star.nativeElement.title = star.nativeElement.dataset.index;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    makeReadOnly() {
        this.mainElement.nativeElement.__zone_symbol__mouseleavefalse = null;
        this.mainElement.nativeElement.style.cursor = "default";
        this.mainElement.nativeElement.title = this.value;
        this.stars.forEach((/**
         * @param {?} star
         * @return {?}
         */
        (star) => {
            star.nativeElement.__zone_symbol__clickfalse = null;
            star.nativeElement.__zone_symbol__mouseenterfalse = null;
            star.nativeElement.style.cursor = "default";
            star.nativeElement.title = "";
        }));
    }
    /**
     * @private
     * @return {?}
     */
    addRemoveEvents() {
        if (this.readonly) {
            this.makeReadOnly();
        }
        else {
            this.makeEditable();
            this.onValueChange.next(this.value);
        }
    }
    /**
     * @private
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onRate(event) {
        /** @type {?} */
        let star = (/** @type {?} */ (event.srcElement));
        /** @type {?} */
        let oldValue = this.value;
        this.value = parseInt(star.dataset.index);
        if (this.value == 0) {
            this.value = 1;
        }
        /** @type {?} */
        let rateValues = { oldValue: oldValue, newValue: this.value, starRating: this };
        this.rate.emit(rateValues);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onStar(event) {
        /** @type {?} */
        let star = (/** @type {?} */ (event.srcElement));
        /** @type {?} */
        let currentIndex = parseInt(star.dataset.index);
        for (let index = 0; index < currentIndex; index++) {
            this.stars[index].nativeElement.classList = [];
            this.addDefaultClass(this.stars[index].nativeElement);
            this.addCheckedStarClass(this.stars[index].nativeElement);
        }
        for (let index = currentIndex; index < this.stars.length; index++) {
            this.stars[index].nativeElement.classList = [];
            this.addDefaultClass(this.stars[index].nativeElement);
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    offStar(event) {
        this.generateRating();
    }
    /**
     * @private
     * @param {?} star
     * @return {?}
     */
    addDefaultClass(star) {
        star.classList.add(StarRatingComponent.CLS_DEFAULT_STAR);
    }
    /**
     * @private
     * @param {?} star
     * @return {?}
     */
    addCheckedStarClass(star) {
        star.classList.add(StarRatingComponent.CLS_CHECKED_STAR);
    }
    /**
     * @private
     * @param {?} star
     * @return {?}
     */
    addHalfStarClass(star) {
        star.classList.add(StarRatingComponent.CLS_HALF_STAR);
    }
    /**
     * @private
     * @return {?}
     */
    setStars() {
        if (this.stars.length == 0) {
            this.stars.push(this.star1Element);
            this.stars.push(this.star2Element);
            this.stars.push(this.star3Element);
            this.stars.push(this.star4Element);
            this.stars.push(this.star5Element);
        }
    }
    /**
     * @private
     * @return {?}
     */
    applySizeAllStars() {
        if (this._size) {
            this.stars.forEach((/**
             * @param {?} star
             * @return {?}
             */
            (star) => {
                /** @type {?} */
                let newSize = this.size.match(/\d+/)[0];
                /** @type {?} */
                let halfSize = (parseInt(newSize) * 10) / 24;
                /** @type {?} */
                let halfMargin = 0 - ((parseInt(newSize) * 20) / 24);
                star.nativeElement.style.setProperty(StarRatingComponent.VAR_SIZE, this.size);
                if (star.nativeElement.classList.contains(StarRatingComponent.CLS_HALF_STAR)) {
                    star.nativeElement.style.setProperty(StarRatingComponent.VAR_HALF_WIDTH, `${halfSize}px`);
                    star.nativeElement.style.setProperty(StarRatingComponent.VAR_HALF_MARGIN, `${halfMargin}px`);
                }
            }));
        }
    }
    /**
     * @private
     * @param {?} setChecked
     * @return {?}
     */
    applyColorStyleAllStars(setChecked) {
        this.stars.forEach((/**
         * @param {?} star
         * @return {?}
         */
        (star) => {
            if (setChecked) {
                this.applyCheckedColorStyle(star.nativeElement);
            }
            else {
                this.applyUnCheckedColorStyle(star.nativeElement);
            }
        }));
    }
    /**
     * @private
     * @param {?} starElement
     * @return {?}
     */
    applyColorStyle(starElement) {
        this.applyCheckedColorStyle(starElement);
        this.applyUnCheckedColorStyle(starElement);
    }
    /**
     * @private
     * @param {?} starElement
     * @return {?}
     */
    applyCheckedColorStyle(starElement) {
        starElement.style.setProperty(StarRatingComponent.VAR_CHECKED_COLOR, this.checkedcolor);
    }
    /**
     * @private
     * @param {?} starElement
     * @return {?}
     */
    applyUnCheckedColorStyle(starElement) {
        starElement.style.setProperty(StarRatingComponent.VAR_UNCHECKED_COLOR, this.uncheckedcolor);
    }
    /**
     * @private
     * @return {?}
     */
    generateRating() {
        if (this.readonly) {
            return;
        }
        this.setStars();
        if (this.value >= 0) {
            this.mainElement.nativeElement.title = this.value;
            /** @type {?} */
            let hasDecimals = ((Number.parseFloat(this.value.toString()) % 1)
                .toString()
                .substring(3, 2)) ? true : false;
            /** @type {?} */
            let i = 1;
            this.stars.forEach((/**
             * @param {?} star
             * @return {?}
             */
            (star) => {
                star.nativeElement.classList = [];
                this.applyColorStyle(star.nativeElement);
                this.addDefaultClass(star.nativeElement);
                if (this.value >= i) {
                    // star on
                    this.addCheckedStarClass(star.nativeElement);
                }
                else {
                    // half star
                    if (hasDecimals) {
                        this.addHalfStarClass(star.nativeElement);
                        hasDecimals = false;
                    }
                }
                i++;
            }));
        }
    }
}
StarRatingComponent.VAR_CHECKED_COLOR = '--checkedColor';
StarRatingComponent.VAR_UNCHECKED_COLOR = '--unCheckedColor';
StarRatingComponent.VAR_SIZE = '--size';
StarRatingComponent.VAR_HALF_WIDTH = '--halfWidth';
StarRatingComponent.VAR_HALF_MARGIN = '--halfMargin';
StarRatingComponent.CLS_CHECKED_STAR = 'on';
StarRatingComponent.CLS_DEFAULT_STAR = 'star';
StarRatingComponent.CLS_HALF_STAR = 'half';
StarRatingComponent.INP_CHECKED_COLOR = 'checkedcolor';
StarRatingComponent.INP_UNCHECKED_COLOR = 'uncheckedcolor';
StarRatingComponent.INP_VALUE = 'value';
StarRatingComponent.INP_SIZE = 'size';
StarRatingComponent.INP_READONLY = 'readonly';
StarRatingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'star-rating',
                template: `
  <div #starMain>
    <span data-index="1" title="1" #star1></span>
    <span data-index="2" title="2" #star2></span>
    <span data-index="3" title="3" #star3></span>
    <span data-index="4" title="4" #star4></span>
    <span data-index="5" title="5" #star5></span>
  </div>
  <style>
    :root {
      --checkedColor: gold;
      --unCheckedColor: gray;
      --size: 24px;
      --halfWidth: 10px;
      --halfMargin: -20px;
    }  
    .star {
      cursor: pointer;
      color: var(--unCheckedColor);
      font-size: var(--size);
      width: var(--size);
      display: inline-block;
    }
    .star:last-child {
      margin-right: 0;
    }
    .star:before {
      content:'\\2605';
    }
    .star.on {
      color: var(--checkedColor);
    }
    .star.half:after {
      content:'\\2605';
      color: var(--checkedColor);
      position: absolute;
      margin-left: var(--halfMargin);
      width: var(--halfWidth);
      overflow: hidden;
    }
  </style>
   `
            }] }
];
/** @nocollapse */
StarRatingComponent.ctorParameters = () => [];
StarRatingComponent.propDecorators = {
    mainElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['starMain', { static: true },] }],
    star1Element: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['star1', { static: true },] }],
    star2Element: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['star2', { static: true },] }],
    star3Element: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['star3', { static: true },] }],
    star4Element: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['star4', { static: true },] }],
    star5Element: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['star5', { static: true },] }],
    rate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    checkedcolor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: [StarRatingComponent.INP_CHECKED_COLOR,] }],
    uncheckedcolor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: [StarRatingComponent.INP_UNCHECKED_COLOR,] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: [StarRatingComponent.INP_VALUE,] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: [StarRatingComponent.INP_SIZE,] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: [StarRatingComponent.INP_READONLY,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RatingModule {
    /**
     * @return {?}
     */
    ngDoBootstrap() { }
}
RatingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                declarations: [
                    RatingComponent,
                    StarRatingComponent
                ],
                exports: [StarRatingComponent],
                entryComponents: [StarRatingComponent]
            },] }
];


//# sourceMappingURL=ng-starrating.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/about/about.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/about/about.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n    <script src=\"https://kit.fontawesome.com/yourcode.js\"></script>\r\n    <body>\r\n        <div class=\"header\">\r\n            <img src=\"assets/img/BackgroundRoute.jpg\" class=\"ImagePrincipal\">\r\n            <div class=\"centered\">\r\n                <img class=\"logoES\" src=\"assets/img/ESLogo2_Black_NoBg_NoText_Reverse_278x155.png\" />\r\n                <span class=\"EStitle-black\">xpress Shop</span>\r\n        </div>\r\n        <div class=\"custom-container container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n                    <h3>Qu'est-ce que Express Shop?</h3>\r\n                    <p style=\"margin-top: 5%;\">\r\n                        Express Shop est un site web qui assure la gestion des commandes en ligne \r\n                        entre les distributeurs et les fournisseurs. Le fournisseur se créer\r\n                        un compte sur le site, personnalise sa page et paramètres et ajoute ses \r\n                        produits au site. Le distributeur se connecte sur le site et accède au menu \r\n                        contenant tous les produits disponibles de tous les fournisseurs. \r\n                        Il peut filtrer sa recherche pour obtenir ce qui recherche au plus bas prix. \r\n                        Il peut aussi communiquer au fournisseur à l’aide d’une messagerie rapide. \r\n                        Les items sélectionnés par le distributeur se retrouve dans un panier qu’il peut ensuite\r\n                        valider. En validant sa commande, les fournisseurs recevront le bon de commande et pourront\r\n                        ensuite valider la date d'arrivée. Les fournisseurs peuvent ajouter des produits qu’ils veulent\r\n                        mettre en vente, modifier la page de leur entreprise et tout comme les distributeurs \r\n                        modifier leur compte. \r\n                    </p>\r\n                    <p style=\"margin-bottom: 5%;\">\r\n                        Ce projet est aussi constitué d’une application mobile qui permet au distributeurs\r\n                        de se connecter avec son compte et de consulter ces commandes. \r\n                        Celle-ci permet aussi de recevoir des notifications de la messagerie instantané \r\n                        et de communiquer avec ces clients. Ils peuvent aussi soumettre une inscription par \r\n                        l’application mobile et explorer les produits offerts par les fournisseurs. \r\n                        Il pourra tout comme sur le site web compléter des commandes.\r\n                    </p>\r\n                 </div>\r\n                 <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n                      <h3>Les membres de notre équipe</h3>\r\n                      <div class=\"row\">\r\n                        <!-- Team Member 1 -->\r\n                        <div class=\"col-xl-6 col-md-12 mb-4\">\r\n                            <div class=\"card border-0 shadow\">\r\n                              <img src=\"assets/img/charles.jpg\" class=\"card-img-top\" alt=\"...\">\r\n                              <div class=\"card-body text-center\">\r\n                                <h4 class=\"card-title mb-0\">Charles Bourgeois</h4>\r\n                                <div class=\"card-text text-black-50\">Développeur</div>\r\n                                <div class=\"card-text text-black-50\">charlesbourgeois@live.ca</div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- Team Member 2 -->\r\n                          <div class=\"col-xl-6 col-md-12 mb-4\">\r\n                            <div class=\"card border-0 shadow\">\r\n                              <img src=\"assets/img/mathieu.jpg\" class=\"card-img-top\" alt=\"...\">\r\n                              <div class=\"card-body text-center\">\r\n                                <h4 class=\"card-title mb-0\">Mathieu Sévigny-Lavallé</h4>\r\n                                <div class=\"card-text text-black-50\">Développeur</div>\r\n                                <div class=\"card-text text-black-50\">charlesbourgeois@live.ca</div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- Team Member 3 -->\r\n                          <div class=\"col-xl-6  col-md-12 mb-4\">\r\n                            <div class=\"card border-0 shadow\">\r\n                              <img src= \"assets/img/gab.jpg\" class=\"card-img-top\" alt=\"...\">\r\n                              <div class=\"card-body text-center\">\r\n                                <h4 class=\"card-title mb-0\">Gabriel Fournier-Cloutier</h4>\r\n                                <div class=\"card-text text-black-50\">Développeur</div>\r\n                                <div class=\"card-text text-black-50\">gabrielfournier.c@gmail.com</div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- Team Member 4 -->\r\n                          <div class=\"col-xl-6 col-md-12 mb-4\">\r\n                            <div class=\"card border-0 shadow\">\r\n                              <img src=\"assets/img/jé.jpg\" class=\"card-img-top\" alt=\"...\">\r\n                              <div class=\"card-body text-center\">\r\n                                <h4 class=\"card-title mb-0\">Jérémie Lacroix</h4>\r\n                                <div class=\"card-text text-black-50\">Développeur</div>\r\n                                <div class=\"card-text text-black-50\">lacroixj21@videotron.ca</div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"video row\">\r\n                    <div class=\"col-xl-12\">\r\n                    <h3 style=\"color: white;\">Comment fonctionne Express Shop?</h3>\r\n                    <div style=\"margin-top: 50px;\">\r\n                        <iframe width=\"50%\" height=\"700\" src=\"//www.youtube.com/embed/YE7VzlLtp-4\" frameborder=\"1\" allowfullscreen></iframe>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row justify-content-center\">\r\n                    <h3>Fonctions de notre site</h3>\r\n                    <div style=\"padding-top: 30px;\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6 col-xs-12\">\r\n                                <div class=\"card\">\r\n                                    <img class=\"card-img-top\" src=\"assets/img/citynight.jpg\">\r\n                                    <div class=\"card-body text-center\"> \r\n                                        <h5 class=\"card-title\">Voir les produits offerts</h5>\r\n                                        <p class=\"card-text\">Express shop vous permet de voir tous les produits offerts par les différents fournisseurs inscrit au site.</p>\r\n                                        <a href=\"#\" class=\"btn btn-info\">Voir la page</a>\r\n                                    </div>\r\n                                  </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-xs-12\">\r\n                                <div class=\"card\">\r\n                                    <img class=\"card-img-top\" src=\"assets/img/citynight.jpg\">\r\n                                    <div class=\"card-body text-center\"> \r\n                                        <h5 class=\"card-title\">Ajouter des produits à votre commande</h5>\r\n                                        <p class=\"card-text\">Les distributeurs inscrits sur Express Shop peuvent compléter leur commande à l'aide de leur panier.</p>\r\n                                        <a href=\"#\" class=\"btn btn-info\">Voir la page</a>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6 col-xs-12\">\r\n                                <div class=\"card\">\r\n                                    <img class=\"card-img-top\" src=\"assets/img/citynight.jpg\">\r\n                                    <div class=\"card-body text-center\"> \r\n                                        <h5 class=\"card-title\">Voir vos commandes</h5>\r\n                                        <p class=\"card-text\">Express Shop vous permet de consulter vos commandes en cours, ainsi que celle terminé.</p>\r\n                                        <a href=\"#\" class=\"btn btn-info\">Voir la page</a>\r\n                                    </div>\r\n                                  </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-xs-12\">\r\n                                <div class=\"card\">\r\n                                    <img class=\"card-img-top\" src=\"assets/img/citynight.jpg\">\r\n                                    <div class=\"card-body text-center\"> \r\n                                        <h5 class=\"card-title\">Voir les informations des fournisseurs</h5>\r\n                                        <p class=\"card-text\">Express Shop vous permet de consulter les profils de tous les fournisseurs inscirt au site.</p>\r\n                                        <a href=\"#\" class=\"btn btn-info\">Voir la page</a>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"margin-bottom:5%;\">\r\n                            <div class=\"col-sm-6 col-xs-12\">\r\n                                <div class=\"card\">\r\n                                    <img class=\"card-img-top\" src=\"assets/img/citynight.jpg\">\r\n                                    <div class=\"card-body text-center\"> \r\n                                        <h5 class=\"card-title\">Modifier votre inventaire</h5>\r\n                                        <p class=\"card-text\">Les fournisseurs peuvent ajouter, modifier et supprimer des produits de leur inventaire.</p>\r\n                                        <a href=\"#\" class=\"btn btn-info\">Voir la page</a>\r\n                                    </div>\r\n                                  </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-xs-12\">\r\n                                <div class=\"card\">\r\n                                    <img class=\"card-img-top\" src=\"assets/img/citynight.jpg\">\r\n                                    <div class=\"card-body text-center\"> \r\n                                        <h5 class=\"card-title\">Modifier les informations de votre profil</h5>\r\n                                        <p class=\"card-text\">Les utilisateurs inscrits à Express Shop peuvent modifier les informations de leur profil.</p>\r\n                                        <a href=\"#\" class=\"btn btn-info\">Voir la page</a>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"message row\">\r\n                    <div class=\"container contact-form\">\r\n                        <form [formGroup]=\"form\">\r\n                            <h3>Envoyez nous un message</h3>\r\n                           <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <mat-form-field class=\"fieldinput\" >\r\n                                        <input type=\"Nom\" id=\"inputNom\" name=\"Nom\" ngModel class=\"form-control\" matInput placeholder=\"Votre nom\" formControlName=\"Nom\">\r\n                                        <mat-error *ngIf=\"Nom.hasError('required')\">Le nom est obligatoire</mat-error>\r\n                                    </mat-form-field>\r\n                                    <mat-form-field class=\"fieldinput\"> \r\n                                        <input type=\"email\" id=\"inputemail\" name=\"email\" ngModel class=\"form-control\" matInput placeholder=\"Votre adresse courriel\" formControlName=\"email\" style=\"outline:none;\">\r\n                                        <mat-error *ngIf=\"email.hasError('required')\">votre adresse courriel est obligatoire</mat-error>\r\n                                    </mat-form-field>\r\n                                    <div class=\"button_div\">\r\n                                        <button type=\"submit\" (click)=\"onSubmit()\"  mat-button>Envoyer le message</button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <mat-form-field appearance=\"outline\" class=\"description-field\">\r\n                                        <mat-label>Votre message</mat-label>\r\n                                        <textarea matInput placeholder=\"Votre message\" name=\"message\" formControlName=\"message\" id=\"inputmessage\" style=\"height: 80px;\"></textarea>\r\n                                        <mat-error *ngIf=\"message.hasError('required')\">Le message est obligatoire</mat-error>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                </div>\r\n                </div>\r\n              </div>\r\n </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/add-product/add-product.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/add-product/add-product.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"product-mat-card\">\r\n  <mat-card-title>Ajouter Produit</mat-card-title>\r\n  <mat-card-content>\r\n    <form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\" class=\"product-card\">\r\n      <div id=\"left\">\r\n        <p>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Nom\" formControlName=\"nom\">\r\n          </mat-form-field>\r\n        </p>\r\n        <p>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"definition\" formControlName=\"description\">\r\n          </mat-form-field>\r\n        </p>\r\n        <p>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Prix\" type=\"number\" class=\"example-right-align\" formControlName=\"prix\">\r\n            <span matPrefix>$&nbsp;</span>\r\n          </mat-form-field>\r\n        </p>\r\n        <p>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Quantité\" type=\"number\" class=\"example-right-align\" formControlName=\"quantite\">\r\n          </mat-form-field>\r\n        </p>\r\n        <p>\r\n          <mat-form-field class=\"example-chip-list\">\r\n            <mat-chip-list #chipList aria-label=\"Fruit selection\">\r\n              <mat-chip *ngFor=\"let tag of tags\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n                (removed)=\"remove(tag)\">\r\n                {{tag.name}}\r\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n              </mat-chip>\r\n              <input placeholder=\"New tag...\" [matChipInputFor]=\"chipList\"\r\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                (matChipInputTokenEnd)=\"add($event)\">\r\n            </mat-chip-list>\r\n          </mat-form-field>\r\n        </p>\r\n      </div>\r\n      <div id=\"right\">\r\n        <p class=\"upload\">Photo du produit</p>\r\n        <p style=\"height: 155px\">\r\n          <img id=\"Image\" [src]=\"imageSrc\" class=\"IMG\" />\r\n        </p>\r\n        <p><input type='file' class=\"upload\" (change)=\"onFileChanged($event)\" /></p>\r\n      </div>\r\n      <button mat-button type=\"submit\">Ajouter</button>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin-users/admin-users.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin-users/admin-users.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf='(loadedUsers | async) as users'>\r\n<div class=\"container\">\r\n    <mat-card>\r\n        <mat-form-field class=\"filter-form-field\">\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter par mots-clés...\">\r\n        </mat-form-field>\r\n    </mat-card>\r\n    \r\n    <mat-tab-group (selectedTabChange)=\"requestLogs()\">\r\n        <mat-tab label=\"Comptes\"><mat-card class=\"users-table-card\">\r\n        <h3>Comptes</h3>\r\n\r\n        <table *ngIf=\"!this.logsAreShown\" mat-table [dataSource]=\"dataSourceUsers\" matSort class=\"users-table\">\r\n            \r\n            <ng-container matColumnDef=\"iduser\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\r\n                <td mat-cell *matCellDef='let element'> {{element.iduser}} </td>\r\n            </ng-container>\r\n            \r\n            <ng-container matColumnDef=\"nomutilisateur\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Nom d'utilisateur</th>\r\n                <td mat-cell *matCellDef='let element'> {{element.nomutilisateur}} </td>\r\n            </ng-container>\r\n    \r\n            <ng-container matColumnDef=\"nom\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Nom</th>\r\n                <td mat-cell *matCellDef='let element'> {{element.nom}} </td>\r\n            </ng-container>\r\n    \r\n            <ng-container matColumnDef=\"prenom\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Prenom</th>\r\n                <td mat-cell *matCellDef='let element'> {{element.prenom}} </td>\r\n            </ng-container>\r\n    \r\n            <ng-container matColumnDef=\"TypeUser\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Type de compte</th>\r\n                <td mat-cell *matCellDef='let element'> {{element.TypeUser}} </td>\r\n            </ng-container>\r\n    \r\n            <ng-container matColumnDef=\"confirme\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Confirmé</th>\r\n                <td mat-cell *matCellDef='let element'>\r\n                    <mat-slide-toggle\r\n                        id=\"confirm-register-{{element.iduser}}\"\r\n                        (change)=\"onChangeConfirmRegistration($event)\"\r\n                        [checked]=\"element.confirme ? 'checked' : null\">\r\n                    </mat-slide-toggle>\r\n                </td>\r\n            </ng-container>\r\n    \r\n            <ng-container matColumnDef=\"dateinscription\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Date d'inscription</th>\r\n                <td mat-cell *matCellDef='let element'> {{element.dateinscription}} </td>\r\n            </ng-container>\r\n    \r\n            <ng-container matColumnDef=\"email\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Courriel</th>\r\n                <td mat-cell *matCellDef='let element'> {{element.email}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"actions\">\r\n                <th mat-header-cell *matHeaderCellDef></th>\r\n                <td mat-cell *matCellDef='let element'>\r\n                    <button id=\"delete-account-{{element.iduser}}\" (click)=\"onClickDeleteAccount($event)\" mat-icon-button>\r\n                        <mat-icon color=\"warn\">delete_outline</mat-icon>\r\n                    </button>\r\n                </td>\r\n            </ng-container>\r\n            \r\n            <tr mat-header-row *matHeaderRowDef=\"columnsToDisplayUsers; sticky: true\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: columnsToDisplayUsers;\"></tr>\r\n    \r\n        </table>\r\n\r\n        </mat-card></mat-tab>\r\n\r\n        <mat-tab label=\"Activités\"><mat-card class=\"users-table-card\">\r\n            <h3>Activités</h3>\r\n            <table *ngIf='(loadedLogs | async) as logs' mat-table [dataSource]=\"dataSourceLog\" matSort matSortActive=\"timestamp\" matSortDirection=\"desc\" matSortDisableClear class=\"users-table\">\r\n    \r\n                <ng-container matColumnDef=\"timestamp\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\r\n                    <td mat-cell *matCellDef='let element'>{{element.timestamp}}</td>\r\n                </ng-container>\r\n                \r\n                <ng-container matColumnDef=\"log\">\r\n                    <th mat-header-cell *matHeaderCellDef>Activité</th>\r\n                    <td mat-cell *matCellDef='let element'>{{formatLog(element)}}</td>\r\n                </ng-container>\r\n                \r\n                <tr mat-header-row *matHeaderRowDef=\"columnsToDisplayLog; sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: columnsToDisplayLog;\"></tr>\r\n        \r\n            </table>\r\n        </mat-card></mat-tab>\r\n\r\n    </mat-tab-group>\r\n</div>\r\n</ng-container>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/browse-products/browse-products.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/browse-products/browse-products.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n    <mat-card class=\"filter-card\">\r\n\r\n        <mat-form-field>\r\n            <input matInput (keyup)=\"Filter(nom.value, idf.value, pmin.value, pmax.value, tag1.value)\" placeholder=\"Nom\"\r\n                #nom>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input matInput (keyup)=\"Filter(nom.value, idf.value, pmin.value, pmax.value, tag1.value)\"\r\n                placeholder=\"Fournisseur\" #idf>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input matInput (keyup)=\"Filter(nom.value, idf.value, pmin.value, pmax.value, tag1.value)\" OnlyNumber=\"true\"\r\n                placeholder=\"Prix min\" #pmin>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input matInput (keyup)=\"Filter(nom.value, idf.value, pmin.value, pmax.value, tag1.value)\" OnlyNumber=\"true\"\r\n                placeholder=\"Prix max\" #pmax>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input matInput (keyup)=\"Filter(nom.value, idf.value, pmin.value, pmax.value, tag1.value)\"\r\n                placeholder=\"Mots cles\" #tag1>\r\n        </mat-form-field>\r\n    </mat-card>\r\n\r\n    <ng-container *ngIf='(filteredProducts) as products'>\r\n        <div class=\"grid-container\">\r\n            <ng-container *ngFor=\"let product of products\">\r\n                <app-product-card [product]=\"product\"></app-product-card>\r\n            </ng-container>\r\n        </div>\r\n    </ng-container>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/browse-products/product-card/product-card.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/browse-products/product-card/product-card.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"product-card grid-item\">\r\n\r\n    <mat-card-title-group>\r\n        <mat-card-title>{{product.nom}}</mat-card-title>\r\n        <!-- TODO: Redirect to supplier's profile page when clicking the name or the logo -->\r\n        <mat-card-subtitle class=\"supplier-name\">Offert par \r\n        <a [routerLink]=\"'/home/supplierInfos'\" [queryParams]=\"{ s: product.idFournisseur }\">\r\n            {{product.nomFournisseur}}\r\n        </a>\r\n        </mat-card-subtitle>\r\n        <!-- TODO: Load the supplier's logo -->\r\n        <a [routerLink]=\"'/home/supplierInfos'\" [queryParams]=\"{ s: product.idFournisseur }\">\r\n            <img mat-card-avatar src=\"https://pbs.twimg.com/profile_images/378800000498110973/232c0075e8606910dc6545d774b48d63_400x400.png\" />\r\n        </a>\r\n    </mat-card-title-group>\r\n\r\n    <!-- TODO: Load the product's image -->\r\n    <!-- TODO: Define and implement the action to execute when clicking the product's picture -->\r\n    <a href=\"\"><img mat-card-image class=\"product-img-card\" src=\"assets/img/{{product.imgGUID}}\" /></a>\r\n\r\n    <mat-card-content class=\"product-card-content\">\r\n        {{product.description}}\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions [allowUserTypes]=\"[auth.D]\">\r\n        <button id=\"favorite-{{product.idproduits}}\" class=\"mdc-icon-button\" (click)=\"onClickFavoriteBtn()\">\r\n            <i class=\"material-icons mdc-icon-button__icon\">{{isInFavorites ? 'star' : 'star_border'}}</i>\r\n        </button>\r\n        <mat-card-subtitle class=\"price-text\">${{product.prix}}</mat-card-subtitle>\r\n        <button id=\"cart-{{product.idproduits}}\" class=\"mdc-icon-button cart-btn\" (click)=\"onClickCartBtn()\">\r\n            <i class=\"material-icons mdc-icon-button__icon\">{{isInCart ? 'remove_shopping_cart' : 'add_shopping_cart'}}</i>\r\n        </button>\r\n    </mat-card-actions>\r\n\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/commande/commande.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/commande/commande.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"titre\">Vos commandes</h1>\r\n<!-- nav table -->\r\n<mat-form-field class=\"Nav\">\r\n  <mat-label>Choisir le type de commande</mat-label>\r\n  <mat-select [(value)]=\"selectedrow\">\r\n    <mat-option value=\"0\" (click)=\"ChangeRow()\">En cours</mat-option>\r\n    <mat-option value=\"1\" (click)=\"ChangeRow()\">Terminé</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n<!-- filter -->\r\n<mat-form-field class=\"Nav\" style=\"width: 15%; left:7%\">\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\r\n</mat-form-field>\r\n<div class=\"Nav\" style=\"width: 90%;\">\r\n  <!-- Affichage Distributeur -->\r\n  <table *ngIf=\"EstDistributeur\" mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\" matSort>\r\n    <ng-container  matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{column}} </th>\r\n      <td mat-cell *matCellDef=\"let commande\"> {{commande[column]}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"expandedDetail\">\r\n      <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n      <td mat-cell *matCellDef=\"let commande\" [attr.colspan]=\"displayedColumns.length\">\r\n        <div class=\"example-element-detail\"\r\n            [@detailExpand]=\"commande == expandedElement ? 'expanded' : 'collapsed'\">\r\n            <table class=\"tableproduit\">\r\n              <th>Image du produit</th><th>Nom</th><th>Prix</th><th>Quantité</th><th>Description</th>\r\n            <ng-container *ngFor=\"let item of commande.TableItem; let i = index\">\r\n              <tr class=\"tableelement\">\r\n                  <td class=\"image\">\r\n                    <img src=\"../../assets/img/{{item.imgGUID}}\"  style=\"min-width: 80px; height: 80px;\" >\r\n                </td>\r\n                <td class=\"prix\">\r\n                    {{item.nom}}\r\n                </td>\r\n                <td class=\"prix\">\r\n                    {{item.prix}}$\r\n                </td>\r\n                <td class=\"prix\">\r\n                    {{item.quantite}}\r\n                </td>\r\n                <td class=\"description\">\r\n                    {{item.description}}\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            </table>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"\r\n        class=\"example-element-row\"\r\n        [class.example-expanded-row]=\"expandedElement === element\"\r\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n    </tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n  </table>\r\n\r\n   <!-- Affichage Fournisseur -->\r\n   <table *ngIf=\"!EstDistributeur\" mat-table [dataSource]=\"dataSourceFournisseur\" multiTemplateDataRows class=\"mat-elevation-z8\" matSort>\r\n    <ng-container  matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns2\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{column}} </th>\r\n      <td mat-cell *matCellDef=\"let commande\"> {{commande[column]}}\r\n          <button mat-button *ngIf=\"column == 'Terminé la commande' && !TermineSection\" class=\"buttonterminé\"  (click)=\"CompleteCommande($event,commande.idCommande)\">Complété la commande</button>\r\n          <p *ngIf=\"column == 'Terminé la commande' && TermineSection\"> Commande complétée <mat-icon style=\"color: green;\">check_circle</mat-icon></p>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"expandedDetail\">\r\n      <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n      <td mat-cell *matCellDef=\"let commande\" [attr.colspan]=\"displayedColumns2.length\">\r\n        <div class=\"example-element-detail\"\r\n            [@detailExpand]=\"commande == expandedElement ? 'expanded' : 'collapsed'\">\r\n            <table class=\"tableproduit\">\r\n              <th>Image du produit</th><th>Nom</th><th>Prix</th><th>Quantité</th><th>Description</th>\r\n            <ng-container *ngFor=\"let item of commande.TableItem; let i = index\">\r\n              <tr class=\"tableelement\">\r\n                  <td class=\"image\">\r\n                    <img src=\"../../assets/img/{{item.imgGUID}}\"  style=\"min-width: 80px; height: 80px;\" >\r\n                </td>\r\n                <td class=\"prix\">\r\n                    {{item.nom}}\r\n                </td>\r\n                <td class=\"prix\">\r\n                    {{item.prix}}$\r\n                </td>\r\n                <td class=\"prix\">\r\n                    {{item.quantite}}\r\n                </td>\r\n                <td class=\"description\">\r\n                    {{item.description}}\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            </table>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\r\n    <tr mat-row *matRowDef=\"let element; columns: displayedColumns2;\"\r\n        class=\"example-element-row\"\r\n        [class.example-expanded-row]=\"expandedElement === element\"\r\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n    </tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/favorite-supplier/favorite-supplier.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/favorite-supplier/favorite-supplier.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<h1>Fournisseurs Favoris</h1>\r\n<div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n  \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"nomutilisateur\">\r\n        <th mat-header-cell *matHeaderCellDef>nom d'utilisateur</th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.nomutilisateur}} </td>\r\n      </ng-container>\r\n  \r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef> email</th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.email}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Telephone\">\r\n        <th mat-header-cell *matHeaderCellDef> Téléphone </th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.Telephone}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"description\">\r\n        <th mat-header-cell *matHeaderCellDef> description </th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.description}} </td>\r\n      </ng-container>\r\n      \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"background-color: rgb(149, 161, 172)\">\r\n    <mat-toolbar-row>\r\n\r\n      <button mat-icon-button><mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon></button>\r\n      \r\n      <a class=\"homeLink\" [routerLink]=\"''\">\r\n        <img class=\"logoES\" src=\"assets/img/ESLogo2_Black_NoBg_NoText_Reverse_278x155.png\" />\r\n        <span class=\"EStitle-black\">xpress Shop</span>\r\n      </a>\r\n\r\n      <span class=\"menu-spacer\"></span>\r\n      <div>\r\n        <button mat-button [matMenuTriggerFor]=\"menu\">{{nomutilisateur}}</button>\r\n        <mat-menu #menu>\r\n          <button *ngIf=\"auth.currUser.TypeUser === this.auth.S || auth.currUser.TypeUser === this.auth.A\" mat-menu-item [routerLink]=\"'inventaire'\" routerLinkActive=\"active\">inventaire</button>\r\n          <button *ngIf=\"auth.currUser.TypeUser !== this.auth.V\" mat-menu-item [routerLink]=\"'modifprofile'\" routerLinkActive=\"active\">Modifier Profil</button>\r\n          <button *ngIf=\"auth.currUser.TypeUser === this.auth.D \" mat-menu-item [routerLink]=\"'Favoritesupplier'\" routerLinkActive=\"active\">Founisseur(s) favori(s)</button>\r\n          <button *ngIf=\"auth.currUser.TypeUser === this.auth.D \" mat-menu-item [routerLink]=\"'Allsuppliers'\" routerLinkActive=\"active\">Toutes les compagnies</button>\r\n        </mat-menu>\r\n        <button mat-icon-button><mat-icon (click)=\"callLogout()\">power_off</mat-icon></button>\r\n        <a [allowUserTypes]=\"[auth.D]\" mat-button matBadge=\"{{nbCartItems}}\" [routerLink]=\"'shoppingCart'\" routerLinkActive=\"active\"><i class=\"material-icons\">shopping_cart</i></a>\r\n      </div>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container>\r\n\r\n  <mat-sidenav #sidenav>\r\n    \r\n    <mat-nav-list>\r\n      <a [allowUserTypes]=\"[auth.D, auth.S, auth.A]\" mat-list-item [routerLink]=\"'supplierInfos'\" routerLinkActive=\"active\">Fournisseurs</a>\r\n      <a mat-list-item [routerLink]=\"'browseProduct'\" routerLinkActive=\"active\">Produits</a>\r\n      <a [allowUserTypes]=\"[auth.D]\" mat-list-item [routerLink]=\"'shoppingCart'\" routerLinkActive=\"active\">Panier d'achat</a>\r\n      <a [allowUserTypes]=\"[auth.S]\" mat-list-item [routerLink]=\"'add-product'\" routerLinkActive=\"active\">Ajouter Produit</a>\r\n      <a [allowUserTypes]=\"[auth.S, auth.D]\" mat-list-item [routerLink]=\"'commande'\" routerLinkActive=\"active\">Voir vos commandes</a>\r\n      <a [allowUserTypes]=\"[auth.A]\" mat-list-item [routerLink]=\"'admin-users'\" routerLinkActive=\"active\">Gérer les utilisateurs</a>\r\n      <a mat-list-item [routerLink]=\"'about'\" routerLinkActive=\"active\">À propos</a>\r\n    </mat-nav-list>\r\n    \r\n  </mat-sidenav>\r\n  \r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n\r\n    <ngx-spinner [fullScreen]=\"true\" type=\"ball-clip-rotate-multiple\" size=\"medium\">\r\n      <p class=\"loadingText\">{{loaderText}}</p>\r\n    </ngx-spinner>\r\n  </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/inventaire/expanded-panel/expanded-panel.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/inventaire/expanded-panel/expanded-panel.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\" class=\"product-card\">\n    <mat-form-field>\n        <input matInput formControlName=\"nom\" placeholder=\"Nom\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput formControlName=\"prix\" placeholder=\"Prix\">\n        <span matPrefix>$&nbsp;</span>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-chip-list\">\n        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n            <mat-chip *ngFor=\"let tag of tags\" [selectable]=\"selectable\" [removable]=\"removable\"\n                (removed)=\"remove(tag)\">\n                {{tag.name}}\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n            </mat-chip>\n            <input placeholder=\"New tag...\" [matChipInputFor]=\"chipList\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n                (matChipInputTokenEnd)=\"add($event)\">\n        </mat-chip-list>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput formControlName=\"enStock\" placeholder=\"Enstock\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput formControlName=\"description\" placeholder=\"Description\">\n    </mat-form-field>\n\n    <button mat-button type=\"submit\">Save</button>\n    <button mat-button (click)=\"DeleteProduct($event)\">Delete</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/inventaire/inventaire.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/inventaire/inventaire.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"titre\">Mon inventaire</h1>\n\n<div class=\"Nav\" style=\"width: 90%;\">\n    <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\" matSort>\n        <ng-container matColumnDef=\"nom\">\n            <th mat-header-cell *matHeaderCellDef> nom </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.nom}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"prix\">\n            <th mat-header-cell *matHeaderCellDef> prix </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.prix}}$ </td>\n        </ng-container>\n        <ng-container matColumnDef=\"tags\">\n            <th mat-header-cell *matHeaderCellDef> tags </th>\n            <td mat-cell *matCellDef=\"let element\">\n                <ng-container *ngFor=\"let item of element.tags;let i = index\">\n                    {{item.tag}}\n                </ng-container>\n            </td>\n        </ng-container>\n        <ng-container matColumnDef=\"enStock\">\n            <th mat-header-cell *matHeaderCellDef> enStock </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.enStock}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"description\">\n            <th mat-header-cell *matHeaderCellDef> description </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n        </ng-container>\n\n        <ng-container class=\"expend-container\" matColumnDef=\"expandedDetail\">\n            <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n            <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\n                <div class=\"example-element-detail\"\n                    [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n                    <app-expanded-panel style=\"width: 100%;\" [item]=\"element\" (refresh)=\"refreshMethod($event)\"></app-expanded-panel>\n                </div>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" class=\"example-element-row\"\n            [class.example-expanded-row]=\"expandedElement === element\"\n            (click)=\"expandedElement = expandedElement === element ? null : element\">\n        </tr>\n        <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/liste-compagnie/liste-compagnie.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/liste-compagnie/liste-compagnie.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>liste-compagnie works!</p>\r\n\r\n<h1>Fournisseurs Favoris</h1>\r\n<div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n  \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"nomutilisateur\">\r\n        <th mat-header-cell *matHeaderCellDef>nom d'utilisateur</th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.nomutilisateur}} </td>\r\n      </ng-container>\r\n  \r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef> email</th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.email}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"Telephone\">\r\n        <th mat-header-cell *matHeaderCellDef> Téléphone </th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.Telephone}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"description\">\r\n        <th mat-header-cell *matHeaderCellDef> description </th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.description}} </td>\r\n      </ng-container>\r\n      \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modif-profile/modif-profile.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/modif-profile/modif-profile.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mat-card class=\"profile-mat-card\">\r\n    <mat-card-title>Modifier Profil</mat-card-title>\r\n<mat-card-content>\r\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"onClickModifyProfile()\">\r\n\r\n    <!-- TODO: Display/Hide fields based on the type of the connected user -->\r\n\r\n    <p><mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"Nom d'utilisateur\" [formControl]=\"username\">\r\n        <mat-error *ngIf=\"username.hasError('required')\">Le nom d'utilisateur est obligatoire</mat-error>\r\n    </mat-form-field></p>\r\n\r\n    <p><mat-form-field>\r\n        <input type=\"email\" matInput placeholder=\"Courriel\" [formControl] =\"email\">\r\n        <mat-error *ngIf=\"email.hasError('email') && !email.hasError('required')\">Veuillez entrer une addresse courriel valide</mat-error>\r\n        <mat-error *ngIf=\"email.hasError('required')\">Le courriel est obligatoire</mat-error>\r\n    </mat-form-field></p>\r\n\r\n    <p><mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"Téléphone\" [formControl]=\"phone\" [textMask]=\"phoneMask\">\r\n        <mat-error *ngIf=\"phone.hasError('minlength') && !phone.hasError('required')\">Veuillez entrer un numéro de téléphone valide</mat-error>\r\n        <mat-error *ngIf=\"phone.hasError('required')\">Le numéro de téléphone est obligatoire</mat-error>\r\n    </mat-form-field></p>\r\n    \r\n    <!-- TODO: Modify Logo\r\n    <p><mat-form-field>\r\n    </mat-form-field></p>\r\n    -->\r\n\r\n    <p><mat-form-field appearance=\"outline\" class=\"description-field\">\r\n        <mat-label>Description</mat-label>\r\n        <textarea matInput [formControl]=\"description\"></textarea>\r\n    </mat-form-field></p>\r\n\r\n    <!-- TODO: Add/Remove Tags (https://www.google.com/search?q=youtube+tags&sxsrf=ACYBGNQrpy2igjoIgql048fJKLUoI7ew-g:1569376391098&source=lnms&tbm=isch&sa=X&ved=0ahUKEwikrr3S7urkAhUhTt8KHdfCAdcQ_AUIEigB&biw=1440&bih=799#imgrc=KyZffDHBnFvYwM:)\r\n    <p><mat-form-field>\r\n    </mat-form-field></p>\r\n    -->\r\n\r\n    <p *ngIf=\"error\" class=\"error\">\r\n        {{ error }}\r\n    </p>\r\n    \r\n    <p class=\"btn-container\">\r\n        <button type=\"submit\" mat-button>Modifier</button>\r\n    </p>\r\n\r\n</form>\r\n</mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"profile-mat-card\">\r\n    <mat-card-title>Changer Mot de Passe</mat-card-title>\r\n<mat-card-content>\r\n<form [formGroup]=\"passwordForm\" (ngSubmit)=\"onClickChangePassword()\">\r\n\r\n    <p><mat-form-field>\r\n        <input type=\"password\" matInput placeholder=\"Mot de passe\" [formControl]=\"oldPassword\">\r\n        <mat-error *ngIf=\"oldPassword.hasError('required')\">Le mot de passe est obligatoire</mat-error>\r\n    </mat-form-field></p>\r\n\r\n    <p><mat-form-field>\r\n        <input type=\"password\" matInput placeholder=\"Nouveau mot de passe\" [formControl]=\"newPassword\">\r\n        <mat-error *ngIf=\"newPassword.hasError('required')\">Le nouveau mot de passe est obligatoire</mat-error>\r\n    </mat-form-field></p>\r\n\r\n    <p><mat-form-field>\r\n        <input type=\"password\" matInput placeholder=\"Confirmation\" [formControl]=\"confirm\">\r\n        <mat-error *ngIf=\"confirm.hasError('notMatching') && !confirm.hasError('required')\">Le confirmation ne correspond pas au nouveau mot de passe</mat-error>\r\n        <mat-error *ngIf=\"confirm.hasError('required')\">Le confirmation de mot de passe est obligatoire</mat-error>\r\n    </mat-form-field></p>\r\n\r\n    <p *ngIf=\"error\" class=\"error\">\r\n        {{ error }}\r\n    </p>\r\n\r\n    <p class=\"btn-container\">\r\n        <button type=\"submit\" mat-button>Changer</button>\r\n    </p>    \r\n\r\n</form>\r\n</mat-card-content>\r\n</mat-card>\r\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/shopping-cart/shopping-cart.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/shopping-cart/shopping-cart.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div [class.filter]=\"isBlur\">\r\n<h1>Votre Panier</h1>\r\n  <div class=\"mat-elevation-z8\" >\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n        \r\n      <!-- image -->\r\n      <ng-container matColumnDef=\"image\">\r\n        <th mat-header-cell *matHeaderCellDef>image</th>\r\n        <td mat-cell *matCellDef=\"let product\" style=\"max-width: 100px;\"><img src=\"../../assets/img/{{product.imgGUID}}\" style=\"max-width: 100px; max-height: 100px;\" alt=\"...\"></td>\r\n        <td mat-footer-cell *matFooterCellDef>Total</td>\r\n      </ng-container>\r\n      <!-- id -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef>id</th>\r\n        <td mat-cell *matCellDef=\"let product\">{{product.idproduits}}</td>\r\n        <td mat-footer-cell *matFooterCellDef></td>\r\n      </ng-container>\r\n      <!-- nom -->\r\n      <ng-container matColumnDef=\"nom\">\r\n        <th mat-header-cell *matHeaderCellDef>nom</th>\r\n        <td mat-cell *matCellDef=\"let product\">{{product.nom}}</td>\r\n        <td mat-footer-cell *matFooterCellDef></td>\r\n      </ng-container>\r\n      <!-- prix -->\r\n      <ng-container matColumnDef=\"prix\">\r\n        <th mat-header-cell *matHeaderCellDef>prix</th>\r\n        <td mat-cell *matCellDef=\"let product\">{{product.prix}}</td>\r\n        <td mat-footer-cell *matFooterCellDef></td>\r\n      </ng-container>\r\n      <!--qté -->\r\n      <ng-container matColumnDef=\"quantité\">\r\n        <th mat-header-cell *matHeaderCellDef>quantité</th>\r\n        <td mat-cell *matCellDef=\"let product\">\r\n           <button type=\"submit\" (click)=\"this.increment(product.idproduits)\" id=\"bt2plus\">+</button>\r\n            <input type=\"number\" min=\"0\" id=\"text+i\" (keyup)=\"0\" (key.enter)=\"set(product.idproduits)\"  placeholder=\"{{product.quantity}}\">\r\n          <button type=\"submit\" (click)=\"decrement(product.idproduits)\" id=\"bt2moin\">-</button>\r\n        </td>\r\n        <td mat-footer-cell *matFooterCellDef></td>\r\n        \r\n      </ng-container>\r\n      <!--sous total -->\r\n      <ng-container matColumnDef=\"sous-total\">\r\n        <th mat-header-cell *matHeaderCellDef>sous-total</th>\r\n        <td mat-cell *matCellDef=\"let product\">{{product.prix * product.quantity}}</td>\r\n        <td mat-footer-cell *matFooterCellDef>{{total}}$CAD</td>\r\n      </ng-container> \r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\r\n    </table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[20, 10, 5]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n  \r\n  <div class=\"PanierButtonDiv\">\r\n      <a routerLink=\"/home\"><button mat-raised-button color=\"primary\" class=\"PanierButton\">retourner au browser</button></a>\r\n      <button *ngIf=\"!EstVide\" mat-raised-button color=\"primary\" class=\"PanierButton\" (click)=\"ValidateCommande()\">Passer la commande</button>\r\n  </div>\r\n</div>\r\n<app-pop-up [isOpen]=\"popUpOpen\">\r\n  <div style=\"text-align: center\">\r\n    <header>\r\n      <span><b>Envoyer la ou les commande(s) au(x) fournisseur(s)?</b></span>\r\n    </header>\r\n    <main style=\"margin-top: 20px\">\r\n    <button mat-raised-button color=\"primary\" class=\"PanierButton\" (click)=\"SendCommande()\">confirmer</button>\r\n    <button mat-raised-button color=\"primary\" class=\"PanierButton\" (click)=\"ClosePopUp()\">annuler</button>      \r\n    </main>\r\n  </div>\r\n</app-pop-up>\r\n<app-pop-up [isOpen]=\"popUpEmail\">\r\n  <div style=\"text-align: center\">\r\n    <header>\r\n      <span><b>Commande(s) envoyée(s) au(x) fournisseur(s)!</b></span>\r\n    </header>\r\n    <main style=\"margin-top: 20px\">\r\n    <button mat-raised-button color=\"primary\" class=\"PanierButton\" (click)=\"ReturnMenu()\">retourner au menu</button>      \r\n    </main>\r\n  </div>\r\n</app-pop-up>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/supplier-infos/supplier-infos.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/supplier-infos/supplier-infos.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(loadedSuppliers | async) as users\">\r\n<mat-drawer-container class=\"container\">\r\n\r\n<mat-drawer #browserSection class=\"browse-section\" mode=\"side\" opened (openedChange)=\"onClickCollapseBtn($event)\">\r\n    <mat-form-field class=\"filter-form-field\" [floatLabel]=\"never\">\r\n        <mdb-icon fas icon=\"search\" aria-hidden=\"true\"></mdb-icon>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Recherche\"/>\r\n        <mat-hint>{{dataSource.filteredData.length}} résultats correspondent</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <mat-divider></mat-divider>\r\n    \r\n    <mat-list>\r\n        <mat-list-item *ngFor=\"let supplier of dataSource.filteredData; last as isLastSupplier\" (click)=\"onClickSupplier(supplier)\">\r\n            <img matListAvatar src=\"https://pbs.twimg.com/profile_images/378800000498110973/232c0075e8606910dc6545d774b48d63_400x400.png\" />\r\n            <h4 mat-line>{{supplier.nomutilisateur}}</h4>\r\n\r\n            <p mat-line class=\"tags-display\">\r\n                <ng-container *ngFor=\"let tag of supplier.tags; last as isLastTag\">{{tag}}<ng-container *ngIf=\"!isLastTag\">, </ng-container></ng-container>\r\n            </p>\r\n            <mat-divider [inset]=\"true\" *ngIf=\"!isLastSupplier\"></mat-divider>\r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n    </mat-list>\r\n</mat-drawer>\r\n\r\n<mat-drawer-content class=\"profile-section\">\r\n    <button id=\"collapseBtn\" class=\"mdc-icon-button\" collapsed=\"false\" (click)=\"browserSection.toggle()\">\r\n        <i class=\"material-icons mdc-icon-button__icon\">forward</i>\r\n    </button>\r\n    \r\n    <ng-container *ngIf=\"profileToShow\">\r\n\r\n        \r\n            \r\n            \r\n        <div class=\"username-block\">\r\n                \r\n            <h1>{{profileToShow.nomutilisateur}}</h1>\r\n            <div class=\"boutton_messagerie\">\r\n                    <button mat-raised-button color=\"primary\">Envoyer un message</button>\r\n                    <button mat-raised-button color=\"primary\" (click)=\"openPopUp()\">Noter la compagnie</button>\r\n                </div>\r\n            \r\n            <div class=\"info-block\"> <h3>Infos</h3>\r\n                <p>Description : {{profileToShow.description}}</p>\r\n                <p>Tags : {{profileToShow.tags}}</p>\r\n                <p>Nombre d'étoiles : {{rating}}\r\n                <star-rating [value]=\"rating\" checkedcolor=\"yellow\" uncheckedcolor=\"black\" size=\"30px\" [readonly]=\"ratingreadonly\">\r\n                </star-rating></p>\r\n                \r\n            </div>\r\n            <img class=\"shown-logo\" src=\"https://pbs.twimg.com/profile_images/378800000498110973/232c0075e8606910dc6545d774b48d63_400x400.png\" />\r\n        </div>\r\n        <div class=\"contact-block\"> <h3>Contact</h3>\r\n            <p>Email : {{profileToShow.email}}</p>\r\n            <p>Telephone : {{profileToShow.telephone}}</p>\r\n            <p>Adresse : {{profileToShow.adresse}}</p>\r\n            <div class=\"map_container\">\r\n                    <agm-map \r\n                    [latitude]=\"location?.lat\"\r\n                    [longitude]=\"location?.lng\"\r\n                    [zoom]=\"zoom\"\r\n                    [disableDefaultUI]=\"false\"\r\n                    [zoomControl]=\"false\">\r\n                    <agm-marker [latitude]=\"location?.lat\"\r\n                    [longitude]=\"location?.lng\"></agm-marker>\r\n\r\n                  </agm-map></div>\r\n        </div>\r\n        \r\n    </ng-container>\r\n    \r\n</mat-drawer-content>\r\n\r\n</mat-drawer-container>\r\n</ng-container>\r\n<app-pop-up [isOpen]=\"popupvisible\">\r\n        <div style=\"text-align: center\">\r\n          <header>\r\n            <span><b>Noter la compagnie:</b></span>\r\n          </header>\r\n          <main style=\"margin-top: 20px\">\r\n            <star-rating [value]=\"newnewrating\" checkedcolor=\"yellow\" uncheckedcolor=\"black\" size=\"24px\" readonly=\"false\" (rate)=\"onRate($event)\" readonly>\r\n            </star-rating>\r\n          <button mat-raised-button color=\"primary\" class=\"PanierButton\" (click)=\"onClickNoterCompagnie()\">confirmer</button>\r\n          <button mat-raised-button color=\"primary\" class=\"PanierButton\" (click)=\"closePopUp()\">annuler</button>      \r\n          </main>\r\n        </div>\r\n      </app-pop-up>\r\n\r\n");

/***/ }),

/***/ "./src/app/directives/app-user-type.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/app-user-type.directive.ts ***!
  \*******************************************************/
/*! exports provided: AppUserTypeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserTypeDirective", function() { return AppUserTypeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");



let AppUserTypeDirective = class AppUserTypeDirective {
    constructor(auth, renderer, element) {
        this.auth = auth;
        this.renderer = renderer;
        this.element = element;
    }
    set allowed(types) {
        if (types.findIndex(t => t === this.auth.currUser.TypeUser) == -1) {
            let parentNode = this.renderer.parentNode(this.element.nativeElement);
            this.renderer.removeChild(parentNode, this.element.nativeElement);
        }
    }
};
AppUserTypeDirective.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('allowUserTypes')
], AppUserTypeDirective.prototype, "allowed", null);
AppUserTypeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[allowUserTypes]'
    })
], AppUserTypeDirective);



/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_user_type_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-user-type.directive */ "./src/app/directives/app-user-type.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let DirectivesModule = class DirectivesModule {
};
DirectivesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        declarations: [_app_user_type_directive__WEBPACK_IMPORTED_MODULE_2__["AppUserTypeDirective"]],
        exports: [_app_user_type_directive__WEBPACK_IMPORTED_MODULE_2__["AppUserTypeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
    })
], DirectivesModule);



/***/ }),

/***/ "./src/app/guard/user-type.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guard/user-type.guard.ts ***!
  \******************************************/
/*! exports provided: UserTypeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeGuard", function() { return UserTypeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");




let UserTypeGuard = class UserTypeGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    canActivate(route, state) {
        console.log("Checking UserType...");
        let canActivate = false;
        let currentUser = this.authenticationService.currUser;
        let allowedTypes = route.data.allowed;
        canActivate = (allowedTypes) ? (allowedTypes.findIndex(type => type == currentUser.TypeUser) > -1) : true;
        if (!canActivate) {
            this.router.navigate(['/404']);
        }
        return canActivate;
    }
};
UserTypeGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
UserTypeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserTypeGuard);



/***/ }),

/***/ "./src/app/home/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/home/about/about.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "./src/app/home/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: Aboutcomponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aboutcomponent", function() { return Aboutcomponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_about_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services//about.service */ "./src/app/services/about.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");





let Aboutcomponent = class Aboutcomponent {
    constructor(AboutService, loader) {
        this.AboutService = AboutService;
        this.loader = loader;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    get Nom() { return this.form.get('Nom'); }
    get email() { return this.form.get('email'); }
    get message() { return this.form.get('message'); }
    ngOnInit() {
    }
    onSubmit() {
        this.loader.show("Envoi de votre message...");
        this.AboutService.SendMessageToAdmin(this.form.controls.Nom.value, this.form.controls.email.value, this.form.controls.message.value).subscribe(res => {
            this.loader.hide();
        });
    }
};
Aboutcomponent.ctorParameters = () => [
    { type: _services_about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
];
Aboutcomponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/home/about/about.component.css")).default]
    })
], Aboutcomponent);



/***/ }),

/***/ "./src/app/home/add-product/add-product.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/add-product/add-product.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-card{\r\n    margin: 25px;\r\n}\r\n\r\nmat-card-title,\r\nmat-card-content {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nmat-card{\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n    margin-top: 5%;\r\n}\r\n\r\nmat-form-field{\r\n  width: 70%;\r\n}\r\n\r\np{\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n\r\n#left {\r\n  float: left;\r\n  width: 65%;\r\n  overflow: hidden;\r\n}\r\n\r\n#right {\r\n  overflow: hidden;\r\n  justify-content: center;\r\n}\r\n\r\n.IMG{\r\n  border: 1px solid  darkgray;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  width: 125px;\r\n  min-width: 50px;\r\n  height: 125px;\r\n  margin-left:15px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.upload{\r\n  margin-left: 15px;\r\n  color: darkgray;\r\n}\r\n\r\nbutton{\r\n  margin-top: 55px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWNhcmR7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlLFxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxucHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2xlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI3JpZ2h0IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uSU1He1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICBkYXJrZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAxMjVweDtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuLnVwbG9hZHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBjb2xvcjogZGFya2dyYXk7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBtYXJnaW4tdG9wOiA1NXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/add-product/add-product.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/add-product/add-product.component.ts ***!
  \***********************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_subscribe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/subscribe.service */ "./src/app/services/subscribe.service.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");








let AddProductComponent = class AddProductComponent {
    constructor(productService, auth, loader, subscribeservice) {
        this.productService = productService;
        this.auth = auth;
        this.loader = loader;
        this.subscribeservice = subscribeservice;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            prix: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            quantite: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.tags = [];
    }
    get nom() { return this.productForm.get('nom'); }
    get description() { return this.productForm.get('description'); }
    get prix() { return this.productForm.get('prix'); }
    get quantite() { return this.productForm.get('quantite'); }
    ngOnInit() {
        this.imageSrc = "assets/img/missing-image-640x360.png";
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.tags.push({ name: value.trim() });
        }
        if (input) {
            input.value = '';
        }
    }
    remove(Tag) {
        const index = this.tags.indexOf(Tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }
    onFileChanged(event) {
        this.selectedfile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result.toString();
        reader.readAsDataURL(this.selectedfile);
    }
    onSubmit() {
        if (this.productForm.invalid) {
            return;
        }
        else {
            this.TagChaine = "";
            this.tags.forEach(element => {
                this.TagChaine += element.name + ";";
            });
            this.TagChaine = this.TagChaine.substring(0, this.TagChaine.length - 1);
            console.log(this.TagChaine);
            //Envoi de l'image
            this.subscribeservice.uploadImage(this.selectedfile).subscribe((res) => {
                this.productService.AddProduct(this.productForm.controls.nom.value, this.productForm.controls.prix.value, this.auth.currUser.iduser, this.productForm.controls.quantite.value, res.toString(), this.productForm.controls.description.value, this.TagChaine).subscribe((res) => {
                    console.log(res);
                    this.productForm.reset();
                    this.tags = new Array();
                }, (err) => {
                    console.log('error inserting');
                });
            });
            (err) => {
                console.log('error inserting');
            };
        }
    }
};
AddProductComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: _services_subscribe_service__WEBPACK_IMPORTED_MODULE_5__["subscribeservice"] }
];
AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/add-product/add-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-product.component.css */ "./src/app/home/add-product/add-product.component.css")).default]
    })
], AddProductComponent);



/***/ }),

/***/ "./src/app/home/admin-users/admin-users.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/admin-users/admin-users.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.filter-form-field {\r\n    width: -webkit-fill-available;\r\n}\r\n\r\n.users-table-card {\r\n    margin-top: 10px;\r\n}\r\n\r\n.users-table {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbi11c2Vycy9hZG1pbi11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRtaW4tdXNlcnMvYWRtaW4tdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZmlsdGVyLWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuXHJcbi51c2Vycy10YWJsZS1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi51c2Vycy10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/admin-users/admin-users.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/admin-users/admin-users.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");





let AdminUsersComponent = class AdminUsersComponent {
    constructor(userService, loader) {
        this.userService = userService;
        this.loader = loader;
        this.columnsToDisplayUsers = ['iduser', 'TypeUser', 'nomutilisateur', 'prenom', 'nom', 'email', 'dateinscription', 'confirme', 'actions'];
        this.columnsToDisplayLog = ['timestamp', 'log'];
        this.logsAreShown = false;
    }
    set findSort(s) {
        if (s && this.dataSourceUsers) {
            if (this.logsAreShown && this.dataSourceLog) {
                this.dataSourceLog.sort = s;
            }
            else {
                this.dataSourceUsers.sort = s;
            }
            setTimeout(() => {
                this.loader.hide();
            });
        }
    }
    ;
    // Inits the mat-toggle elements by giving them the 'isChecked' class if [checked] is true
    // See : this.onChangeConfirmRegistration()
    set findMatSlideToggle(s) {
        if (!this.logsAreShown && s && s.checked) {
            document.getElementById(s.id).classList.add('isChecked');
        }
    }
    ;
    ngOnInit() {
        this.requestAllUser();
    }
    ngOnDestroy() {
    }
    applyFilter(filterValue) {
        this.dataSourceUsers.filter = filterValue.trim().toLowerCase();
        this.dataSourceLog.filter = filterValue.trim().toLowerCase();
    }
    formatLog(item) {
        let format = "";
        if (item.type == 0) {
            format = 'Le compte ' + item.username + ' a été créé';
        }
        else if (item.type == 1) {
            format = "L'utilisateur " + item.username + " a passé une commande au fournisseur " + item.data;
        }
        else if (item.type == 2) {
            format = "L'utilisateur " + item.username + " a ajouter le produit " + item.data + " à son inventaire";
        }
        else if (item.type == 3) {
            format = "L'utilisateur " + item.username + " a retirer le produit " + item.data + " de son inventaire";
        }
        return format;
    }
    requestLogs() {
        this.logsAreShown = !this.logsAreShown;
        if (this.dataSourceLog) {
            return;
        }
        this.loader.show("Chargement des activités...");
        this.loadedLogs = this.userService.getLogs();
        this.loadedLogs.subscribe(data => {
            this.dataSourceLog = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            this.dataSourceLog.filterPredicate = (data, filter) => {
                console.log('big nigga');
                return this.formatLog(data).trim().toLowerCase().includes(filter.trim().toLowerCase());
            };
        });
    }
    requestAllUser() {
        this.loader.show("Chargement des utilisateurs...");
        this.loadedUsers = this.userService.getAll();
        this.loadedUsers.subscribe(data => {
            this.dataSourceUsers = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
        });
    }
    onChangeConfirmRegistration(event) {
        // The mat-slide-toggle [checked] value is broken
        // Use a class to keep the "real" [checked] value on the html element and set [checked] here
        let sourceAsElement = document.getElementById(event.source.id);
        sourceAsElement.classList.toggle('isChecked');
        let newCheckedValue = sourceAsElement.classList.contains('isChecked');
        let messageConfirmBlock = "Êtes-vous sûr de vouloir bloquer cet utilisateur ?";
        let messageConfirmUnblock = "Êtes-vous sûr de vouloir débloquer cet utilisateur ?" +
            "\nIl gagnera accès aux fonctionnalitées majeures du site en fonction de son type de compte.";
        if (confirm(newCheckedValue ? messageConfirmUnblock : messageConfirmBlock)) {
            // Manually check/uncheck the mat-slide-toggle element
            event.source.checked = newCheckedValue;
            // Get the user id from the sender
            let userIdToConfirm = event.source.id.split('-')[2];
            //this.spinner.show();
            this.loader.show("Mise à jour de l'utilisateur...");
            // Call the api to update the user
            this.userService.updateConfirmRegistration(userIdToConfirm, event.checked).subscribe(data => {
                this.loader.hide();
            });
            // Update the user locally
            this.dataSourceUsers.data.find(u => u.iduser == userIdToConfirm).confirme = event.checked;
        }
        else {
            sourceAsElement.classList.toggle('isChecked');
            event.source.checked = !newCheckedValue;
        }
    }
    onClickDeleteAccount(event) {
        let messageConfirmDelete = "Êtes-vous sûr de vouloir supprimer cet utilisateur ?" +
            "\nToute les données associées au compte seront perdues définitivement.";
        if (confirm(messageConfirmDelete)) {
            // Get the user id from the sender
            let senderBtn = document.getElementById(event.currentTarget.id);
            let userIdToDelete = parseInt(senderBtn.id.split('-')[2]);
            this.loader.show("Suppression de l'utilisateur...");
            // Call the api to delete the user
            this.userService.deleteUser(userIdToDelete).subscribe(data => {
                this.loader.hide();
            });
            // Delete the user locally
            this.dataSourceUsers.data = this.dataSourceUsers.data.filter(u => u.iduser != userIdToDelete);
        }
    }
};
AdminUsersComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], AdminUsersComponent.prototype, "findSort", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], { static: false })
], AdminUsersComponent.prototype, "findMatSlideToggle", null);
AdminUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin-users/admin-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-users.component.css */ "./src/app/home/admin-users/admin-users.component.css")).default]
    })
], AdminUsersComponent);



/***/ }),

/***/ "./src/app/home/browse-products/browse-products.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/browse-products/browse-products.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\r\n    padding-left: 20px;\r\n}\r\n\r\n.grid-container {\r\n    display: grid;\r\n    \r\n    grid-column-gap: 1%;\r\n    grid-row-gap: 2%;\r\n\r\n    padding-top: 10px;\r\n}\r\n\r\n/****************************************************************************************\r\n    ADAPTING THE GRID TO DIFFERENT SIZES OF SCREENS\r\n\r\n    We want N items of the same width, and we want a gap equal to 1% of the container's width between each item.\r\n    For N items, we always have (N - 1) gaps, so the width of an item can be calculated as follows : (100% - (N - 1)%) / N%\r\n\r\n    grid-template-columns: 24.25% 24.25% 24.25% 24.25%;\r\n****************************************************************************************/\r\n\r\n@media only screen and (min-width: 800px) {\r\n    .grid-container {\r\n        grid-template-columns: 15.66% 15.66% 15.66% 15.66% 15.66% 15.66%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 799px) {\r\n    .grid-container {\r\n        grid-template-columns: 24.25% 24.25% 24.25% 24.25%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .grid-container {\r\n        grid-template-columns: 32.66% 32.66% 32.66%;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9icm93c2UtcHJvZHVjdHMvYnJvd3NlLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhOztJQUViLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0lBRWhCLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7Ozt3RkFPd0Y7O0FBQ3hGO0lBQ0k7UUFDSSxnRUFBZ0U7SUFDcEU7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0RBQWtEO0lBQ3REO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJDQUEyQztJQUMvQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9icm93c2UtcHJvZHVjdHMvYnJvd3NlLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIFxyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxJTtcclxuICAgIGdyaWQtcm93LWdhcDogMiU7XHJcblxyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBBREFQVElORyBUSEUgR1JJRCBUTyBESUZGRVJFTlQgU0laRVMgT0YgU0NSRUVOU1xyXG5cclxuICAgIFdlIHdhbnQgTiBpdGVtcyBvZiB0aGUgc2FtZSB3aWR0aCwgYW5kIHdlIHdhbnQgYSBnYXAgZXF1YWwgdG8gMSUgb2YgdGhlIGNvbnRhaW5lcidzIHdpZHRoIGJldHdlZW4gZWFjaCBpdGVtLlxyXG4gICAgRm9yIE4gaXRlbXMsIHdlIGFsd2F5cyBoYXZlIChOIC0gMSkgZ2Fwcywgc28gdGhlIHdpZHRoIG9mIGFuIGl0ZW0gY2FuIGJlIGNhbGN1bGF0ZWQgYXMgZm9sbG93cyA6ICgxMDAlIC0gKE4gLSAxKSUpIC8gTiVcclxuXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0LjI1JSAyNC4yNSUgMjQuMjUlIDI0LjI1JTtcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1LjY2JSAxNS42NiUgMTUuNjYlIDE1LjY2JSAxNS42NiUgMTUuNjYlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5OXB4KSB7XHJcbiAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQuMjUlIDI0LjI1JSAyNC4yNSUgMjQuMjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIuNjYlIDMyLjY2JSAzMi42NiU7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/home/browse-products/browse-products.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/browse-products/browse-products.component.ts ***!
  \*******************************************************************/
/*! exports provided: BrowseProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseProductsComponent", function() { return BrowseProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");





let BrowseProductsComponent = class BrowseProductsComponent {
    constructor(auth, productService, loader) {
        this.auth = auth;
        this.productService = productService;
        this.loader = loader;
        this.max = 0;
        this.min = 0;
        this.subscription = this.productService.getAll().subscribe(products => {
            this.filteredProducts = this.products = products;
            setTimeout(() => {
                this.loader.hide();
            });
        });
    }
    ngOnInit() {
        this.loader.show("Chargement des produits...");
        console.log(this.auth.currUser);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    AddProductToCart(idproduct) {
        this.productService.AddProductToCart(this.auth.currUser.iduser, idproduct, 1);
    }
    Filter(chaine, idf, pmin, pmax, tagS) {
        this.filteredProducts = this.products;
        var newArray = new Array();
        this.filteredProducts = (chaine) ?
            this.filteredProducts.filter(p => p.nom.toLowerCase().includes(chaine.toLowerCase())) :
            this.filteredProducts;
        this.filteredProducts = (idf) ?
            this.filteredProducts.filter(p => p.nomFournisseur.toLowerCase().includes(idf.toLowerCase())) :
            this.filteredProducts;
        if (pmax) {
            var j = 0;
            for (var i = 0; i < this.filteredProducts.length; i++) {
                if (this.filteredProducts[i].prix <= pmax) {
                    newArray[j] = this.filteredProducts[i];
                    j++;
                }
            }
            this.filteredProducts = newArray;
        }
        newArray = new Array();
        if (pmin) {
            var j = 0;
            for (var i = 0; i < this.filteredProducts.length; i++) {
                if (this.filteredProducts[i].prix >= pmin) {
                    newArray[j] = this.filteredProducts[i];
                    j++;
                }
            }
            this.filteredProducts = newArray;
        }
        newArray = new Array();
        if (tagS) {
            var j = 0;
            for (var i = 0; i < this.filteredProducts.length; i++) {
                let x = false;
                this.ArrayTags = this.filteredProducts[i].tags.map(function (item) { return item['tag']; });
                this.ArrayTags.forEach(tag => {
                    if (tag.toLowerCase().includes(tagS.toLowerCase())) {
                        x = true;
                    }
                });
                if (x) {
                    newArray[j] = this.filteredProducts[i];
                    j++;
                }
            }
            this.filteredProducts = newArray;
        }
    }
};
BrowseProductsComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
];
BrowseProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-browse-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./browse-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/browse-products/browse-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./browse-products.component.css */ "./src/app/home/browse-products/browse-products.component.css")).default]
    })
], BrowseProductsComponent);



/***/ }),

/***/ "./src/app/home/browse-products/product-card/product-card.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/home/browse-products/product-card/product-card.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-img-card {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\napp-product-card {\r\n    /*display: inline-grid;*/\r\n}\r\n\r\n.supplier-name {\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.price-text {\r\n    display: inline-block;\r\n    margin: 0px;\r\n    width: calc(100% - 38px - 38px);\r\n    text-align: center;\r\n}\r\n\r\n.product-card-content {\r\n    text-align: justify;\r\n    max-height: 34px;\r\n}\r\n\r\n.cart-btn {\r\n    float: right;\r\n}\r\n\r\n.mdc-icon-button {\r\n    padding: 0px;\r\n    padding-top: 4px;\r\n    top: 2.2px;\r\n    width: 38px;\r\n    height: 38px;\r\n}\r\n\r\n.mat-card-title {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n}\r\n\r\n@media only screen and (max-width: 900px) {\r\n    .product-img-card {\r\n        max-height: 250px;\r\n    }\r\n\r\n    .supplier-name {\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 800px) {\r\n    .product-img-card {\r\n        max-height: 300px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9icm93c2UtcHJvZHVjdHMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWlCO09BQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Jyb3dzZS1wcm9kdWN0cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pbWctY2FyZCB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuYXBwLXByb2R1Y3QtY2FyZCB7XHJcbiAgICAvKmRpc3BsYXk6IGlubGluZS1ncmlkOyovXHJcbn1cclxuXHJcbi5zdXBwbGllci1uYW1lIHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLnByaWNlLXRleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzhweCAtIDM4cHgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1heC1oZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5jYXJ0LWJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZGMtaWNvbi1idXR0b24ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIHRvcDogMi4ycHg7XHJcbiAgICB3aWR0aDogMzhweDtcclxuICAgIGhlaWdodDogMzhweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5wcm9kdWN0LWltZy1jYXJkIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VwcGxpZXItbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAucHJvZHVjdC1pbWctY2FyZCB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/browse-products/product-card/product-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/browse-products/product-card/product-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_models_productPanier_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/productPanier.entity */ "./src/app/models/productPanier.entity.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");






let ProductCardComponent = class ProductCardComponent {
    constructor(auth, productService, loader) {
        this.auth = auth;
        this.productService = productService;
        this.loader = loader;
    }
    ngOnInit() {
        if (this.auth.currType == this.auth.D) {
            this.isInCart = (this.auth.currDistributor.cart.findIndex(p => p.idproduits == this.product.idproduits) > -1);
            this.isInFavorites = false;
        }
    }
    onClickCartBtn(event) {
        this.loader.show("Modification du panier en cours...");
        let currUserId = this.auth.currUser.iduser;
        let foundIndexInCart = this.auth.currDistributor.cart.findIndex(p => p.idproduits == this.product.idproduits);
        if (foundIndexInCart > -1) {
            this.productService.DeleteProductFromCart(currUserId, this.product.idproduits).subscribe(() => {
                delete this.auth.currDistributor.cart[foundIndexInCart];
                this.auth.currDistributor.cart.splice(foundIndexInCart, 1);
                this.productService.RefreshCartItemCount(this.auth.currDistributor.cart.length);
                this.isInCart = false;
                this.loader.hide();
            });
        }
        else {
            this.productService.AddProductToCart(currUserId, this.product.idproduits, 1).subscribe(() => {
                let p = new src_app_models_productPanier_entity__WEBPACK_IMPORTED_MODULE_4__["productPanier"]();
                p.idproduits = this.product.idproduits;
                p.imgGUID = this.product.imgGUID;
                p.nom = this.product.nom;
                p.prix = this.product.prix;
                p.quantity = 1;
                this.auth.currDistributor.cart.push(p);
                this.productService.RefreshCartItemCount(this.auth.currDistributor.cart.length);
                this.isInCart = true;
                this.loader.hide();
            });
        }
    }
    onClickFavoriteBtn(event) {
        this.isInFavorites = !this.isInFavorites;
    }
};
ProductCardComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductCardComponent.prototype, "product", void 0);
ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/browse-products/product-card/product-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-card.component.css */ "./src/app/home/browse-products/product-card/product-card.component.css")).default]
    })
], ProductCardComponent);



/***/ }),

/***/ "./src/app/home/commande/commande.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/commande/commande.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n  }\r\n\r\n  .image{\r\n    width: 15%;\r\n    height: 100px;\r\n    margin: 5px;\r\n  }\r\n\r\n  .prix{\r\n    width: 15%;\r\n    outline : thin solid #777;\r\n  }\r\n\r\n  .description{\r\n    width: 40%;\r\n  }\r\n\r\n  .tableproduit{\r\n    border: #777 1px solid;\r\n  }\r\n\r\n  table > th{\r\n    text-align: center;\r\n    outline: thin solid #777;\r\n  }\r\n\r\n  .tableelement{\r\n    text-align: center;\r\n    outline: thin solid #777;\r\n  }\r\n\r\n  tr.example-detail-row {\r\n    height: 0;\r\n  }\r\n\r\n  tr.example-element-row:not(.example-expanded-row):hover {\r\n    background: #777;\r\n  }\r\n\r\n  tr.example-element-row:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n  }\r\n\r\n  .example-element-row td {\r\n    border-bottom-width: 0;\r\n  }\r\n\r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n\r\n  .example-element-diagram {\r\n    min-width: 80px;\r\n    border: 1px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 3px 0;\r\n    height: 104px;\r\n  }\r\n\r\n  .example-element-symbol {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n  }\r\n\r\n  .example-element-description {\r\n    padding: 16px;\r\n  }\r\n\r\n  .example-element-description-attribution {\r\n    opacity: 0.5;\r\n  }\r\n\r\n  .Nav{\r\n    position: relative;\r\n    left: 5%;\r\n    top: 30px;\r\n    padding: 5px;\r\n  }\r\n\r\n  .filter{\r\n    position: relative;\r\n    left: 15%;\r\n    padding: 5px;\r\n  }\r\n\r\n  .titre{\r\n    position: relative;\r\n    left: 5%;\r\n    top: 10px;\r\n  }\r\n\r\n  .buttonterminé{\r\n    position: relative;\r\n    font-size: larger;\r\n    right: 15px;\r\n  }\r\n\r\n  p{\r\n    position: relative;\r\n    top: 4px;\r\n  }\r\n\r\n  mat-icon{\r\n    position: relative;\r\n    top: 5px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21tYW5kZS9jb21tYW5kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxVQUFVO0lBQ1YseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsVUFBVTtFQUNaOztFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHdCQUF3QjtFQUMxQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQix3QkFBd0I7RUFDMUI7O0VBR0E7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7RUFDZDs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtFQUNkOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0VBQ1Y7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtFQUNWIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21tYW5kZS9jb21tYW5kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2V7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICAucHJpeHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBvdXRsaW5lIDogdGhpbiBzb2xpZCAjNzc3O1xyXG4gIH1cclxuICAuZGVzY3JpcHRpb257XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICAudGFibGVwcm9kdWl0e1xyXG4gICAgYm9yZGVyOiAjNzc3IDFweCBzb2xpZDtcclxuICB9XHJcblxyXG4gIHRhYmxlID4gdGh7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdXRsaW5lOiB0aGluIHNvbGlkICM3Nzc7XHJcbiAgfVxyXG4gIC50YWJsZWVsZW1lbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdXRsaW5lOiB0aGluIHNvbGlkICM3Nzc7XHJcbiAgfVxyXG5cclxuICBcclxuICB0ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3Nzc7XHJcbiAgfVxyXG4gIFxyXG4gIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICAuTmF2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC5maWx0ZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC50aXRyZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuYnV0dG9udGVybWluw6l7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICBwe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgfVxyXG4gIG1hdC1pY29ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/home/commande/commande.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/commande/commande.component.ts ***!
  \*****************************************************/
/*! exports provided: CommandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeComponent", function() { return CommandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _services_commande_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commande.service */ "./src/app/services/commande.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");









let CommandeComponent = class CommandeComponent {
    constructor(auth, commandeService, loader) {
        this.auth = auth;
        this.commandeService = commandeService;
        this.loader = loader;
        this.EstDistributeur = false;
        this.TermineSection = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.dataSourceFournisseur = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.displayedColumns = ['idCommande', 'dateCreation', 'nomFournisseur', 'EmailFournisseur', 'telephone'];
        this.displayedColumns2 = ['idCommande', 'dateCreation', 'nomDistributeur', 'EmailDistributeur', 'telephone', 'Terminé la commande'];
        this.itemsColumns = ['nom', 'prix', 'quantite', 'description'];
        if (this.auth.currUser.TypeUser == this.auth.D) {
            this.TermineSection = false;
            this.EstDistributeur = true;
            let i = 0;
            this.commandeService.GetCommande(this.auth.currUser.iduser).subscribe(commandes => {
                this.CommandesEnCour = commandes;
                commandes.forEach(Numcommande => {
                    this.CommandesEnCour[i].telephone = "+1 " + Numcommande.telephone;
                    this.date = new Date(this.CommandesEnCour[i].dateCreation);
                    this.CommandesEnCour[i].dateCreation = this.date.toDateString();
                    i++;
                });
                this.dataSource.data = this.CommandesEnCour;
                this.dataSource.data = this.dataSource.data.filter(u => u.complete == 0);
                this.loader.hide();
            });
        }
        else {
            let i = 0;
            this.commandeService.GetCommandeFournisseur(this.auth.currUser.iduser).subscribe(commandes => {
                this.CommandesFournisseur = commandes;
                commandes.forEach(Numcommande => {
                    this.CommandesFournisseur[i].telephone = "+1 " + Numcommande.telephone;
                    this.date = new Date(this.CommandesFournisseur[i].dateCreation);
                    this.CommandesFournisseur[i].dateCreation = this.date.toDateString();
                    i++;
                });
                this.dataSourceFournisseur.data = this.CommandesFournisseur;
                this.dataSourceFournisseur.data = this.dataSourceFournisseur.data.filter(u => u.complete == 0);
                this.loader.hide();
            });
        }
    }
    ngOnInit() {
        if (this.EstDistributeur) {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.selectedrow = "0";
        }
        else {
            this.dataSourceFournisseur.paginator = this.paginator;
            this.dataSourceFournisseur.sort = this.sort;
            this.selectedrow = "0";
        }
        this.lastrow = parseInt(this.selectedrow);
        this.loader.show("Chargement des commandes...");
    }
    applyFilter(filterValue) {
        if (this.EstDistributeur) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        }
        else {
            this.dataSourceFournisseur.filter = filterValue.trim().toLowerCase();
            if (this.dataSourceFournisseur.paginator) {
                this.dataSourceFournisseur.paginator.firstPage();
            }
        }
    }
    ChangeRow() {
        if (this.EstDistributeur) {
            if (this.lastrow != parseInt(this.selectedrow)) {
                this.dataSource.data = this.CommandesEnCour;
                this.lastrow = parseInt(this.selectedrow);
                if (this.selectedrow == "0") {
                    this.dataSource.data = this.dataSource.data.filter(u => u.complete == 0);
                }
                else {
                    this.dataSource.data = this.dataSource.data.filter(u => u.complete == 1);
                }
            }
        }
        else {
            if (this.lastrow != parseInt(this.selectedrow)) {
                this.dataSourceFournisseur.data = this.CommandesFournisseur;
                this.lastrow = parseInt(this.selectedrow);
                if (this.selectedrow == "0") {
                    this.TermineSection = false;
                    this.dataSourceFournisseur.data = this.dataSourceFournisseur.data.filter(u => u.complete == 0);
                }
                else {
                    this.TermineSection = true;
                    this.dataSourceFournisseur.data = this.dataSourceFournisseur.data.filter(u => u.complete == 1);
                }
            }
        }
    }
    CompleteCommande(event, idCommande) {
        event.stopPropagation();
        this.loader.show("Achèvement de votre commande...");
        this.commandeService.CompleteCommande(idCommande).subscribe(res => {
            this.updatecommandelist();
        });
    }
    updatecommandelist() {
        let i = 0;
        this.commandeService.GetCommandeFournisseur(this.auth.currUser.iduser).subscribe(commandes => {
            this.CommandesFournisseur = commandes;
            commandes.forEach(Numcommande => {
                this.CommandesFournisseur[i].telephone = "+1 " + Numcommande.telephone;
                this.date = new Date(this.CommandesFournisseur[i].dateCreation);
                this.CommandesFournisseur[i].dateCreation = this.date.toDateString();
                i++;
            });
            this.dataSourceFournisseur.data = this.CommandesFournisseur;
            this.dataSourceFournisseur.data = this.dataSourceFournisseur.data.filter(u => u.complete == 0);
            this.loader.hide();
        });
    }
};
CommandeComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_commande_service__WEBPACK_IMPORTED_MODULE_3__["CommandeService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true })
], CommandeComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: true })
], CommandeComponent.prototype, "sort", void 0);
CommandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-commande',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./commande.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/commande/commande.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./commande.component.css */ "./src/app/home/commande/commande.component.css")).default]
    })
], CommandeComponent);



/***/ }),

/***/ "./src/app/home/favorite-supplier/favorite-supplier.component.css":
/*!************************************************************************!*\
  !*** ./src/app/home/favorite-supplier/favorite-supplier.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mYXZvcml0ZS1zdXBwbGllci9mYXZvcml0ZS1zdXBwbGllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mYXZvcml0ZS1zdXBwbGllci9mYXZvcml0ZS1zdXBwbGllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/favorite-supplier/favorite-supplier.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/favorite-supplier/favorite-supplier.component.ts ***!
  \***********************************************************************/
/*! exports provided: FavoriteSupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteSupplierComponent", function() { return FavoriteSupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");







let FavoriteSupplierComponent = class FavoriteSupplierComponent {
    constructor(userservice, authservice, loader) {
        this.userservice = userservice;
        this.authservice = authservice;
        this.loader = loader;
        this.displayedColumns = ['nomutilisateur', 'email', 'Telephone', 'description'];
        this.initiatedatasource();
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
    initiatedatasource() {
        this.subscription = this.userservice.GetFavoriteSuppliers(this.authservice.currUser.iduser);
        this.subscription.subscribe(data => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data);
            console.log(data);
        });
    }
};
FavoriteSupplierComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
], FavoriteSupplierComponent.prototype, "paginator", void 0);
FavoriteSupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite-supplier',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite-supplier.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/favorite-supplier/favorite-supplier.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorite-supplier.component.css */ "./src/app/home/favorite-supplier/favorite-supplier.component.css")).default]
    })
], FavoriteSupplierComponent);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _browse_products_browse_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browse-products/browse-products.component */ "./src/app/home/browse-products/browse-products.component.ts");
/* harmony import */ var _modif_profile_modif_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modif-profile/modif-profile.component */ "./src/app/home/modif-profile/modif-profile.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/home/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/home/admin-users/admin-users.component.ts");
/* harmony import */ var _supplier_infos_supplier_infos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./supplier-infos/supplier-infos.component */ "./src/app/home/supplier-infos/supplier-infos.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/home/add-product/add-product.component.ts");
/* harmony import */ var _commande_commande_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./commande/commande.component */ "./src/app/home/commande/commande.component.ts");
/* harmony import */ var _guard_user_type_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../guard/user-type.guard */ "./src/app/guard/user-type.guard.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/home/about/about.component.ts");
/* harmony import */ var _inventaire_inventaire_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inventaire/inventaire.component */ "./src/app/home/inventaire/inventaire.component.ts");
/* harmony import */ var _favorite_supplier_favorite_supplier_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./favorite-supplier/favorite-supplier.component */ "./src/app/home/favorite-supplier/favorite-supplier.component.ts");
/* harmony import */ var _liste_compagnie_liste_compagnie_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./liste-compagnie/liste-compagnie.component */ "./src/app/home/liste-compagnie/liste-compagnie.component.ts");


















const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivateChild: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _guard_user_type_guard__WEBPACK_IMPORTED_MODULE_11__["UserTypeGuard"]],
        children: [
            { path: '', redirectTo: 'browseProduct' },
            { path: 'browseProduct', component: _browse_products_browse_products_component__WEBPACK_IMPORTED_MODULE_4__["BrowseProductsComponent"] },
            { path: 'modifprofile', component: _modif_profile_modif_profile_component__WEBPACK_IMPORTED_MODULE_5__["ModifProfileComponent"], data: { allowed: [_models_user__WEBPACK_IMPORTED_MODULE_12__["DISTRIB"], _models_user__WEBPACK_IMPORTED_MODULE_12__["SUPPLIER"], _models_user__WEBPACK_IMPORTED_MODULE_12__["ADMIN"]] } },
            { path: 'shoppingCart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"], data: { allowed: [_models_user__WEBPACK_IMPORTED_MODULE_12__["DISTRIB"]] } },
            { path: 'admin-users', component: _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_7__["AdminUsersComponent"], data: { allowed: [_models_user__WEBPACK_IMPORTED_MODULE_12__["ADMIN"]] } },
            { path: 'supplierInfos', component: _supplier_infos_supplier_infos_component__WEBPACK_IMPORTED_MODULE_8__["SupplierInfosComponent"], data: { allowed: [_models_user__WEBPACK_IMPORTED_MODULE_12__["DISTRIB"], _models_user__WEBPACK_IMPORTED_MODULE_12__["SUPPLIER"], _models_user__WEBPACK_IMPORTED_MODULE_12__["ADMIN"]] } },
            { path: 'add-product', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__["AddProductComponent"], data: { allowed: [_models_user__WEBPACK_IMPORTED_MODULE_12__["SUPPLIER"], _models_user__WEBPACK_IMPORTED_MODULE_12__["ADMIN"]] } },
            { path: 'commande', component: _commande_commande_component__WEBPACK_IMPORTED_MODULE_10__["CommandeComponent"], data: { allowed: [_models_user__WEBPACK_IMPORTED_MODULE_12__["SUPPLIER"], _models_user__WEBPACK_IMPORTED_MODULE_12__["DISTRIB"]] } },
            { path: 'inventaire', component: _inventaire_inventaire_component__WEBPACK_IMPORTED_MODULE_15__["InventaireComponent"], data: { allowed: [_models_user__WEBPACK_IMPORTED_MODULE_12__["SUPPLIER"], _models_user__WEBPACK_IMPORTED_MODULE_12__["ADMIN"]] } },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["Aboutcomponent"] },
            { path: 'Favoritesupplier', component: _favorite_supplier_favorite_supplier_component__WEBPACK_IMPORTED_MODULE_16__["FavoriteSupplierComponent"], data: { allowed: [_models_user__WEBPACK_IMPORTED_MODULE_12__["DISTRIB"]] } },
            { path: 'Allsuppliers', component: _liste_compagnie_liste_compagnie_component__WEBPACK_IMPORTED_MODULE_17__["ListeCompagnieComponent"], data: { allowed: [_models_user__WEBPACK_IMPORTED_MODULE_12__["DISTRIB"]] } }
        ]
    },
    { path: '**', redirectTo: '404' }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logoES {\r\n    height: 46px;\r\n}\r\n\r\n.EStitle-black {\r\n    color: #424244;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n}\r\n\r\n.EStitle-red {\r\n    color: #ee1b24;\r\n    font-style: italic;\r\n}\r\n\r\n.menu-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.homeLink {\r\n    text-decoration: none;\r\n    display: contents;\r\n}\r\n\r\n.mat-sidenav-container {\r\n    height: calc(100% - 64px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvRVMge1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG59XHJcblxyXG4uRVN0aXRsZS1ibGFjayB7XHJcbiAgICBjb2xvcjogIzQyNDI0NDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uRVN0aXRsZS1yZWQge1xyXG4gICAgY29sb3I6ICNlZTFiMjQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5tZW51LXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmhvbWVMaW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let HomeComponent = class HomeComponent {
    constructor(router, auth, loader, spinner, productsService) {
        this.router = router;
        this.auth = auth;
        this.loader = loader;
        this.spinner = spinner;
        this.productsService = productsService;
        this.nomutilisateur = auth.currUser.nomutilisateur;
    }
    ngOnInit() {
        this.loaderSubscription = this.loader.text.subscribe(data => {
            this.loaderText = data;
            if (data === "") {
                this.spinner.hide();
            }
            else {
                this.spinner.show();
            }
        });
        this.nbCartItemsSubscription = this.productsService.nbCartItems.subscribe(data => {
            this.nbCartItems = data;
        });
        if (this.auth.currUser.TypeUser === this.auth.D) {
            this.productsService.RefreshCartItemCount(this.auth.currDistributor.cart.length);
        }
    }
    ngOnDestroy() {
        this.loaderSubscription.unsubscribe();
        this.nbCartItemsSubscription.unsubscribe();
        console.log("aw man, creeper");
    }
    callLogout() {
        this.auth.logout();
        this.router.navigate(['/login']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _browse_products_browse_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browse-products/browse-products.component */ "./src/app/home/browse-products/browse-products.component.ts");
/* harmony import */ var _modif_profile_modif_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modif-profile/modif-profile.component */ "./src/app/home/modif-profile/modif-profile.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/home/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/home/admin-users/admin-users.component.ts");
/* harmony import */ var _supplier_infos_supplier_infos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./supplier-infos/supplier-infos.component */ "./src/app/home/supplier-infos/supplier-infos.component.ts");
/* harmony import */ var _browse_products_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./browse-products/product-card/product-card.component */ "./src/app/home/browse-products/product-card/product-card.component.ts");
/* harmony import */ var _pop_up_component_pop_up_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pop-up component/pop-up.module */ "./src/app/pop-up component/pop-up.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
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
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/home/add-product/add-product.component.ts");
/* harmony import */ var _commande_commande_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./commande/commande.component */ "./src/app/home/commande/commande.component.ts");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./about/about.component */ "./src/app/home/about/about.component.ts");
/* harmony import */ var _inventaire_inventaire_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./inventaire/inventaire.component */ "./src/app/home/inventaire/inventaire.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _inventaire_expanded_panel_expanded_panel_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./inventaire/expanded-panel/expanded-panel.component */ "./src/app/home/inventaire/expanded-panel/expanded-panel.component.ts");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/fesm2015/ng-starrating.js");
/* harmony import */ var _favorite_supplier_favorite_supplier_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./favorite-supplier/favorite-supplier.component */ "./src/app/home/favorite-supplier/favorite-supplier.component.ts");
/* harmony import */ var _liste_compagnie_liste_compagnie_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./liste-compagnie/liste-compagnie.component */ "./src/app/home/liste-compagnie/liste-compagnie.component.ts");













//Angular Material Components

































//other















//google map






let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _browse_products_browse_products_component__WEBPACK_IMPORTED_MODULE_4__["BrowseProductsComponent"],
            _modif_profile_modif_profile_component__WEBPACK_IMPORTED_MODULE_5__["ModifProfileComponent"],
            _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartComponent"],
            _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_9__["AdminUsersComponent"],
            _browse_products_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__["ProductCardComponent"],
            _supplier_infos_supplier_infos_component__WEBPACK_IMPORTED_MODULE_10__["SupplierInfosComponent"],
            _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_54__["AddProductComponent"],
            _commande_commande_component__WEBPACK_IMPORTED_MODULE_55__["CommandeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_57__["Aboutcomponent"],
            _inventaire_inventaire_component__WEBPACK_IMPORTED_MODULE_58__["InventaireComponent"],
            _favorite_supplier_favorite_supplier_component__WEBPACK_IMPORTED_MODULE_63__["FavoriteSupplierComponent"],
            _inventaire_expanded_panel_expanded_panel_component__WEBPACK_IMPORTED_MODULE_61__["ExpandedPanelComponent"],
            _liste_compagnie_liste_compagnie_component__WEBPACK_IMPORTED_MODULE_64__["ListeCompagnieComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_60__["HttpClientModule"],
            _pop_up_component_pop_up_module__WEBPACK_IMPORTED_MODULE_12__["PopUpModule"],
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_56__["DirectivesModule"],
            // material
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_42__["MatBottomSheetModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_40__["MatPaginatorModule"],
            //other
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_52__["TextMaskModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__["A11yModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_45__["DragDropModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_46__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_47__["ScrollingModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_48__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_49__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_50__["CdkTreeModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_53__["NgxSpinnerModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_59__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyB23aRLsMN0fgjxGHsf-PyXC8EHtgznvg8' }),
            ng_starrating__WEBPACK_IMPORTED_MODULE_62__["RatingModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/inventaire/expanded-panel/expanded-panel.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/home/inventaire/expanded-panel/expanded-panel.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form{\r\n    width: 100%;\r\n}\r\n\r\nmat-form-field{\r\n    padding-right:10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbnZlbnRhaXJlL2V4cGFuZGVkLXBhbmVsL2V4cGFuZGVkLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2ludmVudGFpcmUvZXhwYW5kZWQtcGFuZWwvZXhwYW5kZWQtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/home/inventaire/expanded-panel/expanded-panel.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/inventaire/expanded-panel/expanded-panel.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExpandedPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandedPanelComponent", function() { return ExpandedPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");







let ExpandedPanelComponent = class ExpandedPanelComponent {
    constructor(productService, auth, loader) {
        this.productService = productService;
        this.auth = auth;
        this.loader = loader;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            prix: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            enStock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.tags = [];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
    }
    uploadComplete() {
        this.refresh.emit(true);
    }
    get nom() { return this.productForm.get('nom'); }
    get description() { return this.productForm.get('description'); }
    get prix() { return this.productForm.get('prix'); }
    get enStock() { return this.productForm.get('enStock'); }
    ngOnInit() {
        this.productForm.controls['nom'].setValue(this.item.nom);
        this.productForm.controls['enStock'].setValue(this.item.enStock);
        this.productForm.controls['prix'].setValue(this.item.prix);
        this.productForm.controls['description'].setValue(this.item.description);
        this.addArraytoChips(this.item.tags);
    }
    addArraytoChips(str_array) {
        str_array.forEach(element => {
            this.tags.push({ name: element['tag'].trim() });
        });
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.tags.push({ name: value.trim() });
        }
        if (input) {
            input.value = '';
        }
    }
    remove(Tag) {
        const index = this.tags.indexOf(Tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }
    onSubmit() {
        if (this.productForm.invalid) {
            return;
        }
        else {
            this.TagChaine = "";
            this.tags.forEach(element => {
                this.TagChaine += element.name + ";";
            });
            this.TagChaine = this.TagChaine.substring(0, this.TagChaine.length - 1);
            this.productService.UpdateProduct(this.item.idproduits, this.productForm.controls.nom.value, this.productForm.controls.prix.value, this.TagChaine, this.productForm.controls.enStock.value, this.productForm.controls.description.value).subscribe((res) => {
                this.uploadComplete();
            }, (err) => {
            });
        }
    }
    DeleteProduct() {
        console.log(this.item.idproduits);
        this.productService.DeleteProduct(this.item.idproduits).subscribe();
        this.uploadComplete();
        console.log("del product");
    }
};
ExpandedPanelComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExpandedPanelComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ExpandedPanelComponent.prototype, "refresh", void 0);
ExpandedPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expanded-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expanded-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/inventaire/expanded-panel/expanded-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expanded-panel.component.css */ "./src/app/home/inventaire/expanded-panel/expanded-panel.component.css")).default]
    })
], ExpandedPanelComponent);



/***/ }),

/***/ "./src/app/home/inventaire/inventaire.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/inventaire/inventaire.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\n.image{\r\n  width: 15%;\r\n  height: 100px;\r\n  margin: 5px;\r\n}\r\n\r\n.prix{\r\n  width: 15%;\r\n}\r\n\r\n.description{\r\n  width: 40%;\r\n}\r\n\r\ntable > th{\r\n  text-align: center;\r\n}\r\n\r\n.tableelement{\r\n  text-align: center;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 3px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n.Nav{\r\n  position: relative;\r\n  left: 5%;\r\n  top: 30px;\r\n  padding: 5px;\r\n}\r\n\r\n.filter{\r\n  position: relative;\r\n  left: 15%;\r\n  padding: 5px;\r\n}\r\n\r\n.titre{\r\n  position: relative;\r\n  left: 5%;\r\n  top: 10px;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbnZlbnRhaXJlL2ludmVudGFpcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW52ZW50YWlyZS9pbnZlbnRhaXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICB3aWR0aDogMTUlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLnByaXh7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG4uZGVzY3JpcHRpb257XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxudGFibGUgPiB0aHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhYmxlZWxlbWVudHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzc3NztcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gIG1pbi13aWR0aDogODBweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgbWFyZ2luOiAzcHggMDtcclxuICBoZWlnaHQ6IDEwNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLk5hdntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNSU7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZmlsdGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxNSU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi50aXRyZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNSU7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/inventaire/inventaire.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/inventaire/inventaire.component.ts ***!
  \*********************************************************/
/*! exports provided: InventaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventaireComponent", function() { return InventaireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");






let InventaireComponent = class InventaireComponent {
    constructor(productService, auth) {
        this.productService = productService;
        this.auth = auth;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.resultsLength = 0;
        this.displayedColumns = ['nom', 'prix', 'tags', 'enStock', 'description'];
        this.subscription = this.productService.getProduitByFournisseur(auth.currUser.iduser).subscribe(products => {
            this.dataSource.data = this.products = products;
            this.resultsLength = products.length;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    refreshMethod($event) {
        if ($event) {
            this.subscription = this.productService.getProduitByFournisseur(this.auth.currUser.iduser).subscribe(products => {
                this.dataSource.data = this.products = products;
                this.resultsLength = products.length;
            });
        }
    }
};
InventaireComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
InventaireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventaire',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inventaire.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/inventaire/inventaire.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inventaire.component.css */ "./src/app/home/inventaire/inventaire.component.css")).default]
    })
], InventaireComponent);



/***/ }),

/***/ "./src/app/home/liste-compagnie/liste-compagnie.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/liste-compagnie/liste-compagnie.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9saXN0ZS1jb21wYWduaWUvbGlzdGUtY29tcGFnbmllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xpc3RlLWNvbXBhZ25pZS9saXN0ZS1jb21wYWduaWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/liste-compagnie/liste-compagnie.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/liste-compagnie/liste-compagnie.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListeCompagnieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeCompagnieComponent", function() { return ListeCompagnieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");







let ListeCompagnieComponent = class ListeCompagnieComponent {
    constructor(userservice, authservice, loader) {
        this.userservice = userservice;
        this.authservice = authservice;
        this.loader = loader;
        this.displayedColumns = ['nomutilisateur', 'email', 'Telephone', 'description'];
        this.initiatedatasource();
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
    initiatedatasource() {
        this.userservice.getAllSuppliers;
        this.subscription = this.userservice.getAllSuppliers();
        this.subscription.subscribe(data => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data);
            console.log(data);
        });
    }
};
ListeCompagnieComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
], ListeCompagnieComponent.prototype, "paginator", void 0);
ListeCompagnieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-liste-compagnie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./liste-compagnie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/liste-compagnie/liste-compagnie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./liste-compagnie.component.css */ "./src/app/home/liste-compagnie/liste-compagnie.component.css")).default]
    })
], ListeCompagnieComponent);



/***/ }),

/***/ "./src/app/home/modif-profile/modif-profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/modif-profile/modif-profile.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-mat-card {\r\n    margin: 25px;\r\n}\r\n\r\n.profile-mat-card mat-form-field {\r\n    display: inline;\r\n}\r\n\r\n.profile-mat-card p {\r\n    margin: 20px;\r\n}\r\n\r\n.btn-container {\r\n    text-align: center;\r\n}\r\n\r\n.upload{\r\n    margin-left: 15px;\r\n    color: darkgray;\r\n}\r\n\r\n.IMG{\r\n    border: 1px solid  darkgray;\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n    width: 125px;\r\n    min-width: 50px;\r\n    height: 125px;\r\n    margin-left:15px;\r\n    margin-bottom: 24px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tb2RpZi1wcm9maWxlL21vZGlmLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbW9kaWYtcHJvZmlsZS9tb2RpZi1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLW1hdC1jYXJkIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnByb2ZpbGUtbWF0LWNhcmQgcCB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udXBsb2Fke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbn1cclxuLklNR3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICBkYXJrZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/home/modif-profile/modif-profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/modif-profile/modif-profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ModifProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifProfileComponent", function() { return ModifProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");





let ModifProfileComponent = class ModifProfileComponent {
    constructor(UserService, AuthService) {
        this.UserService = UserService;
        this.AuthService = AuthService;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(14)]),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        }, this.checkPasswords);
        this.phoneMask = {
            guide: false,
            showMask: true,
            keepCharPositions: true,
            mask: ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        };
    }
    ngOnInit() {
        this.username1 = this.AuthService.currUser.nomutilisateur;
        this.profileForm.controls['username'].setValue(this.username1);
        this.email1 = this.AuthService.currUser.email;
        this.profileForm.controls['email'].setValue(this.email1);
        this.Telephone1 = this.AuthService.currUser.Telephone;
        this.profileForm.controls['phone'].setValue(this.Telephone1);
        this.description1 = this.AuthService.currUser.description;
        this.profileForm.controls['description'].setValue(this.description1);
    }
    get username() { return this.profileForm.get('username'); }
    get email() { return this.profileForm.get('email'); }
    get phone() { return this.profileForm.get('phone'); }
    get logo() { return this.profileForm.get('logo'); }
    get description() { return this.profileForm.get('description'); }
    get tags() { return this.profileForm.get('tags'); }
    get oldPassword() { return this.passwordForm.get('oldPassword'); }
    get newPassword() { return this.passwordForm.get('newPassword'); }
    get confirm() { return this.passwordForm.get('confirm'); }
    checkPasswords(group) {
        let newPasswordValue = group.get('newPassword').value;
        let confirm = group.get('confirm');
        let confirmMatches = newPasswordValue === confirm.value;
        if (!confirmMatches) {
            confirm.setErrors({ notMatching: true });
        }
        return null;
    }
    onClickModifyProfile() {
        window.alert('Your profile was modified');
        let id = this.AuthService.currUser.iduser;
        this.UpdateUser(id, this.profileForm.controls.username.value, this.profileForm.controls.email.value, this.profileForm.controls.phone.value, this.profileForm.controls.description.value);
    }
    onClickChangePassword() {
        window.alert('Your password was changed');
        let id = this.AuthService.currUser.iduser;
        this.UpdatePassword(id, this.passwordForm.controls.newPassword.value);
    }
    UpdateUser(iduser, nomutilisateur, courriel, téléphone, description) {
        this.UserService.UpdateUser(iduser, nomutilisateur, courriel, téléphone, description).subscribe();
        // Copy the user
        let updatedUser = this.AuthService.currUser;
        // Modify the user
        updatedUser.nomutilisateur = nomutilisateur;
        updatedUser.email = courriel;
        updatedUser.Telephone = téléphone;
        updatedUser.description = description;
        // Update the user
        this.AuthService.updateCurrUser(updatedUser);
        this.AuthService.updateSessionStorage();
        console.log(this.AuthService.currUser.nomutilisateur);
        console.log("alo");
    }
    UpdatePassword(iduser, NouveauMotdePasse) {
        this.UserService.UpdatePassword(iduser, NouveauMotdePasse).subscribe();
    }
};
ModifProfileComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ModifProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modif-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modif-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modif-profile/modif-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modif-profile.component.css */ "./src/app/home/modif-profile/modif-profile.component.css")).default]
    })
], ModifProfileComponent);



/***/ }),

/***/ "./src/app/home/shopping-cart/shopping-cart.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/shopping-cart/shopping-cart.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input{\r\n    width: 50px;\r\n    border: aquamarine;\r\n    text-align: center;\r\n}\r\ntable {\r\n    width: 100%;\r\n}\r\n.mat-table-sticky {\r\n    border-top: 1px solid #e0e0e0;\r\n  }\r\ntr.mat-footer-row {\r\n    font-weight: bold;\r\n  }\r\n.PanierButton{\r\n      margin: 10px;\r\n  }\r\n.PanierButtonDiv{\r\n    margin: auto;\r\n  width: 50%;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.filter { -webkit-filter: blur(3px); filter: blur(3px);  } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLDZCQUE2QjtFQUMvQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBRUE7TUFDSSxZQUFZO0VBQ2hCO0FBRUE7SUFDRSxZQUFZO0VBQ2QsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQSxVQUFVLHlCQUFpQixFQUFqQixpQkFBaUIsR0FBRyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyOiBhcXVhbWFyaW5lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtdGFibGUtc3RpY2t5IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIH1cclxuICB0ci5tYXQtZm9vdGVyLXJvdyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5QYW5pZXJCdXR0b257XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcblxyXG4gIC5QYW5pZXJCdXR0b25EaXZ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZmlsdGVyIHsgZmlsdGVyOiBibHVyKDNweCk7ICB9ICJdfQ== */");

/***/ }),

/***/ "./src/app/home/shopping-cart/shopping-cart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/shopping-cart/shopping-cart.component.ts ***!
  \***************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_models_distributor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/distributor */ "./src/app/models/distributor.ts");









let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(auth, productService, loader, router, currentdistributor) {
        this.auth = auth;
        this.productService = productService;
        this.loader = loader;
        this.router = router;
        this.currentdistributor = currentdistributor;
        this.displayedColumns = ['image', 'nom', 'prix', 'quantité', 'sous-total'];
        this.filter = 'blur(2px)';
        this.localres = "";
        this.isBlur = false;
        this.popUpOpen = false;
        this.popUpEmail = false;
        this.EstVide = false;
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.auth.currDistributor.cart);
        this.dataSource.paginator = this.paginator;
        this.Total();
        this.EstVide = (this.dataSource.filteredData.length == 0);
    }
    increment(idProduit) {
        let currQtt = this.dataSource.filteredData.find(item => item.idproduits === idProduit).quantity += 1;
        this.productService.UpdateQuantityPanier(this.auth.currUser.iduser, idProduit, currQtt);
        this.Total();
    }
    decrement(idProduit) {
        let currQtt = this.dataSource.filteredData.find(item => item.idproduits === idProduit).quantity -= 1;
        if (currQtt == 0) {
            this.delete(idProduit);
        }
        else {
            this.productService.UpdateQuantityPanier(this.auth.currUser.iduser, idProduit, currQtt).subscribe();
        }
        this.Total();
    }
    delete(IdProduit) {
        this.productService.DeleteProductFromCart(this.auth.currUser.iduser, IdProduit).subscribe();
        // Delete the user locally
        this.dataSource.data = this.dataSource.data.filter(u => u.idproduits != IdProduit);
        this.currentdistributor = this.auth.currDistributor;
        const index = this.currentdistributor.cart.findIndex(item => item.idproduits === IdProduit);
        if (index > -1) {
            this.currentdistributor.cart.splice(index, 1);
        }
        this.auth.updateCurrUser(this.currentdistributor);
        if (this.auth.currUser.TypeUser === this.auth.D) {
            this.productService.RefreshCartItemCount(this.auth.currDistributor.cart.length);
        }
    }
    Total() {
        this.total = 0;
        for (let i = 0; i < this.dataSource.filteredData.length; ++i) {
            this.total += (this.dataSource.filteredData[i].prix * this.dataSource.filteredData[i].quantity);
        }
    }
    ValidateCommande() {
        this.BlurBackground();
        this.popUpOpen = true;
    }
    ClosePopUp() {
        this.isBlur = false;
        this.popUpOpen = false;
    }
    ReturnMenu() {
        this.isBlur = false;
        this.popUpEmail = false;
        this.router.navigate(["/home/browseProduct"]);
    }
    BlurBackground() {
        this.isBlur = true;
    }
    SendCommande() {
        if (this.EstVide) {
            return;
        }
        this.loader.show("Envoi de votre commande...");
        this.isBlur = false;
        this.popUpOpen = false;
        this.Fournini = "";
        let ProduitArray = new Array();
        let quantiteArray = new Array();
        for (let i = 0; i < this.dataSource.filteredData.length; ++i) {
            quantiteArray[i] = this.dataSource.filteredData[i].quantity.toString();
            ProduitArray[i] = this.dataSource.filteredData[i].idproduits.toString();
            this.Fournini += this.dataSource.filteredData[i].idproduits.toString() + ";";
        }
        this.productService.GetFournisseurPanier(this.Fournini).subscribe((idFournisseur) => {
            for (let iduser of idFournisseur) {
                //Crée une commande par fournisseur
                this.createCommande(iduser[0]['idFournisseur'], ProduitArray, quantiteArray);
            }
        });
    }
    //Crée une commande par fournisseur
    createCommande(idFournisseur, ProduitArray, quantiteArray) {
        this.productService.CreationCommmande(idFournisseur, this.auth.currUser.iduser).subscribe((idCommande) => {
            for (let idproduit of ProduitArray) {
                //Crée les items commandes
                this.createCommandeItem(idCommande[0]['MAX(idCommande)'], idproduit, quantiteArray[0]);
            }
            //Envoyer les commandes
            this.productService.EnvoieCommande(idFournisseur, this.auth.currUser.iduser)
                .subscribe(res => {
                this.loader.hide();
                this.popUpEmail = true;
                this.BlurBackground();
            });
        });
    }
    //Crée les items commandes
    createCommandeItem(idCommande, idproduit, quantite) {
        this.productService.CreationCommandeItems(idCommande, idproduit, quantite).subscribe();
    }
};
ShoppingCartComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_models_distributor__WEBPACK_IMPORTED_MODULE_8__["Distributor"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], ShoppingCartComponent.prototype, "paginator", void 0);
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/shopping-cart/shopping-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/home/shopping-cart/shopping-cart.component.css")).default]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/home/supplier-infos/supplier-infos.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/supplier-infos/supplier-infos.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    position: initial;\r\n    padding-left: 0px;\r\n}\r\n\r\n#collapseBtn {\r\n    left: -20px;\r\n    top: -165px;\r\n}\r\n\r\n#collapseBtn::before {\r\n    opacity: 0.09;\r\n}\r\n\r\n#collapseBtn .material-icons {\r\n    margin-left: 7px;\r\n    transform: rotate(0deg);\r\n    transition: transform .4s cubic-bezier(0.65, 0.05, 0.36, 1);\r\n}\r\n\r\n#collapseBtn .rotatedIcon {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.tags-display {\r\n    color: rgba(0,0,0,.54);\r\n    font-size: 12px;\r\n    width: 160px;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.filter-form-field {\r\n    width: 228px;\r\n    margin: 10px;\r\n}\r\n\r\n.results-found-text {\r\n    font-size: 12px;\r\n}\r\n\r\nmat-list-item:hover {\r\n    background-color: rgba(0,0,0,0.05);\r\n}\r\n\r\nmat-list {\r\n    overflow: overlay;\r\n    height: calc(100% - 118px);\r\n    padding-top: 0px;\r\n}\r\n\r\n.username-block {\r\n    display: inline-block;\r\n    width: calc(100% - 48px);\r\n}\r\n\r\n.username-block h1 {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.shown-logo {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 22px;\r\n    max-width: 338px;\r\n    vertical-align: bottom;\r\n    border: solid 1px lightgray;\r\n    border-radius: 15px;\r\n}\r\n\r\n.contact-block, .info-block {\r\n    display: inline-block;\r\n    box-shadow: inset 1px -1px 6px -1px rgba(179,179,179,1);\r\n    padding: 10px;\r\n    border-radius: 6px;\r\n}\r\n\r\n.info-block {\r\n    width: calc(100% - 370px);\r\n    height: 260px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.contact-block {\r\n    position: relative;\r\n    left: 48px;\r\n    width: calc(100% - 68px);\r\n\r\n    margin-top: 10px;\r\n}\r\n\r\n/*maps*/\r\n\r\nagm-map{\r\n    height: 300px;\r\n    width:100%;\r\n    padding: 10px;\r\n}\r\n\r\n.map_container{\r\n    position: relative;\r\n    width: calc(100% - 68px);\r\n}\r\n\r\n.boutton_messagerie{\r\n    position: relative;\r\n   padding: 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zdXBwbGllci1pbmZvcy9zdXBwbGllci1pbmZvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwyREFBMkQ7QUFDL0Q7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHVEQUF1RDtJQUN2RCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3Qjs7SUFFeEIsZ0JBQWdCO0FBQ3BCOztBQUNBLE9BQU87O0FBQ1A7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0dBQ25CLFlBQVk7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3VwcGxpZXItaW5mb3Mvc3VwcGxpZXItaW5mb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuI2NvbGxhcHNlQnRuIHtcclxuICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgdG9wOiAtMTY1cHg7XHJcbn1cclxuXHJcbiNjb2xsYXBzZUJ0bjo6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDAuMDk7XHJcbn1cclxuXHJcbiNjb2xsYXBzZUJ0biAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSk7XHJcbn1cclxuXHJcbiNjb2xsYXBzZUJ0biAucm90YXRlZEljb24ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLnRhZ3MtZGlzcGxheSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNTQpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5maWx0ZXItZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMjI4cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWZvdW5kLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XHJcbn1cclxuXHJcbm1hdC1saXN0IHtcclxuICAgIG92ZXJmbG93OiBvdmVybGF5O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMThweCk7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4udXNlcm5hbWUtYmxvY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpO1xyXG59XHJcblxyXG4udXNlcm5hbWUtYmxvY2sgaDEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zaG93bi1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjJweDtcclxuICAgIG1heC13aWR0aDogMzM4cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmNvbnRhY3QtYmxvY2ssIC5pbmZvLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAtMXB4IDZweCAtMXB4IHJnYmEoMTc5LDE3OSwxNzksMSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uaW5mby1ibG9jayB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzcwcHgpO1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtYmxvY2sge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNDhweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2OHB4KTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi8qbWFwcyovXHJcbmFnbS1tYXB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLm1hcF9jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjhweCk7XHJcbn1cclxuXHJcbi5ib3V0dG9uX21lc3NhZ2VyaWV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIHBhZGRpbmc6IDFweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/supplier-infos/supplier-infos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/supplier-infos/supplier-infos.component.ts ***!
  \*****************************************************************/
/*! exports provided: SupplierInfosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierInfosComponent", function() { return SupplierInfosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators/ */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_maps_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/maps.service */ "./src/app/services/maps.service.ts");









let SupplierInfosComponent = class SupplierInfosComponent {
    constructor(AuthService, ref, geocodeService, router, route, userService, loader) {
        this.AuthService = AuthService;
        this.ref = ref;
        this.geocodeService = geocodeService;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.loader = loader;
        // google maps zoom level
        this.zoom = 8;
        this.popupvisible = false;
    }
    ngOnInit() {
        this.route.queryParams
            .pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_4__["filter"])(params => params.s))
            .subscribe(params => {
            this.supplierId = params.s;
        });
        this.requestAllUser();
    }
    changeQuery(supplier) {
        this.router.navigate(['.'], { relativeTo: this.route, queryParams: { s: supplier.iduser } });
        this.profileToShow = supplier;
        this.address = this.profileToShow.adresse;
        this.rating = this.profileToShow.nbEtoiles;
        this.newnewrating = 0;
        this.showLocation();
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    requestAllUser() {
        this.loader.show("Chargement des fournisseurs...");
        this.loadedSuppliers = this.userService.getAllSuppliers();
        this.loadedSuppliers.subscribe(data => {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            if (this.supplierId)
                this.profileToShow = this.dataSource.data.find(s => s.iduser == this.supplierId);
            this.loader.hide();
        });
    }
    onClickSupplier(supplier) {
        this.changeQuery(supplier);
    }
    onClickCollapseBtn(event) {
        let btn = document.getElementById('collapseBtn');
        // Rotate the icon
        for (var i = 0; i < btn.children.length; ++i) {
            btn.children[i].classList.toggle('rotatedIcon');
        }
        // Toggle the favorite attribute
        btn.attributes['collapsed'].value = (btn.attributes['collapsed'].value === 'false' ? 'true' : 'false');
    }
    showLocation() {
        this.addressToCoordinates();
    }
    addressToCoordinates() {
        this.geocodeService.geocodeAddress(this.address)
            .subscribe((location) => {
            this.location = location;
            this.ref.detectChanges();
        });
        console.log(this.address);
    }
    onClickNoterCompagnie() {
        this.popupvisible = true;
        let iduser = this.AuthService.currUser.iduser;
        let idfournisseur = this.profileToShow.iduser;
        this.userService.UpdateRating(iduser, idfournisseur, this.newrating).subscribe();
        this.closePopUp();
    }
    openPopUp() {
        this.popupvisible = true;
    }
    closePopUp() {
        this.popupvisible = false;
    }
    redirectToChat() {
        //todo
    }
    onRate($event) {
        this.newrating = $event.newValue;
        console.log(this.newrating);
    }
};
SupplierInfosComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_services_maps_service__WEBPACK_IMPORTED_MODULE_7__["GeocodeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
];
SupplierInfosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-supplier-infos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./supplier-infos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/supplier-infos/supplier-infos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./supplier-infos.component.css */ "./src/app/home/supplier-infos/supplier-infos.component.css")).default]
    })
], SupplierInfosComponent);



/***/ }),

/***/ "./src/app/models/distributor.ts":
/*!***************************************!*\
  !*** ./src/app/models/distributor.ts ***!
  \***************************************/
/*! exports provided: Distributor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distributor", function() { return Distributor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let Distributor = class Distributor extends _user__WEBPACK_IMPORTED_MODULE_1__["BD_User"] {
};
Distributor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], Distributor);



/***/ }),

/***/ "./src/app/models/productPanier.entity.ts":
/*!************************************************!*\
  !*** ./src/app/models/productPanier.entity.ts ***!
  \************************************************/
/*! exports provided: productPanier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productPanier", function() { return productPanier; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class productPanier {
}


/***/ }),

/***/ "./src/app/services/about.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/about.service.ts ***!
  \*******************************************/
/*! exports provided: AboutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutService", function() { return AboutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");




let AboutService = class AboutService {
    constructor(http) {
        this.http = http;
    }
    SendMessageToAdmin(name, email, message) {
        const sendemail = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('Nom', name)
            .set('message', message).set('email', email);
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/EnvoieMessage`, sendemail.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
};
AboutService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AboutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AboutService);



/***/ }),

/***/ "./src/app/services/commande.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/commande.service.ts ***!
  \**********************************************/
/*! exports provided: CommandeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeService", function() { return CommandeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");




let CommandeService = class CommandeService {
    constructor(http) {
        this.http = http;
    }
    GetCommande(idDistributeur) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idDistributeur', idDistributeur.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/GetCommandeDistributeur`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    GetCommandeFournisseur(idFournisseur) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idFournisseur', idFournisseur.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/GetCommandeFournisseur`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    CompleteCommande(idcommande) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idCommande', idcommande.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/CompleteCommande`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
};
CommandeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommandeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommandeService);



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.textSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.text = this.textSource.asObservable();
    }
    show(text) {
        this.textSource.next(text);
    }
    hide() {
        this.textSource.next("");
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ "./src/app/services/maps.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/maps.service.ts ***!
  \******************************************/
/*! exports provided: GeocodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocodeService", function() { return GeocodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let GeocodeService = class GeocodeService {
    constructor(mapLoader) {
        this.mapLoader = mapLoader;
    }
    initGeocoder() {
        console.log('Init geocoder!');
        this.geocoder = new google.maps.Geocoder();
    }
    waitForMapsToLoad() {
        if (!this.geocoder) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.mapLoader.load())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.initGeocoder()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => true));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
    }
    geocodeAddress(location) {
        console.log('Start geocoding!');
        return this.waitForMapsToLoad().pipe(
        // filter(loaded => loaded),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.geocoder.geocode({ 'address': location }, (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                        console.log('Geocoding complete!');
                        observer.next({
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng()
                        });
                    }
                    else {
                        console.log('Error - ', results, ' & Status - ', status);
                        observer.next({ lat: 0, lng: 0 });
                    }
                    observer.complete();
                });
            });
        }));
    }
};
GeocodeService.ctorParameters = () => [
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"] }
];
GeocodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], GeocodeService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.nbCartItemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.nbCartItems = this.nbCartItemsSource.asObservable();
    }
    getAll() {
        return this.http.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/GetAllProducts`, _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    getProduitByFournisseur(id) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/GetProductsByFournisseur`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    GetpanierFromId(iduser) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('iduser', iduser.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/GetpanierFromId`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    RefreshCartItemCount(nbItems) {
        this.nbCartItemsSource.next(nbItems);
    }
    getbyname(name) {
        return this.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(loadedProducts => loadedProducts.filter(load => load.nom === name)));
    }
    search( /*search params*/) {
        // call api/SearchProducts
        return null;
    }
    AddProductToCart(iduser, idproduit, qty) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('iduser', iduser.toString())
            .set('idproduit', idproduit.toString())
            .set('quantity', qty.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/AddProductToPanier`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    DeleteProductFromCart(iduser, idproduit) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('iduser', iduser.toString())
            .set('idproduit', idproduit.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/DeleteProductFromPanier`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    UpdateQuantityPanier(iduser, idproduit, qty) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('iduser', iduser.toString())
            .set('idproduit', idproduit.toString())
            .set('quantity', qty.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/UpdateQuantityPanier`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    GetFournisseurPanier(idproduit) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idproduits', idproduit.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/GetFournisseurParCommande`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    CreationCommmande(idFournisseur, idDistributeur) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idFournisseur', idFournisseur.toString())
            .set('idDistributeur', idDistributeur.toString())
            .set('complete', "0")
            .set('dateCreation', Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en'));
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/InsertCommande`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    CreationCommandeItems(idCommande, idproduit, quantite) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCommande', idCommande.toString())
            .set('idProduit', idproduit.toString())
            .set('quantite', quantite.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/InsertCommandeItems`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    EnvoieCommande(idFournisseur, idDistributeur) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idFournisseur', idFournisseur.toString())
            .set('idDistributeur', idDistributeur.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/EnvoieCommande`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    AddProduct(nom, prix, idFournisseur, enStock, imgGuid, description, tags) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('nom', nom.toString())
            .set('prix', prix.toString())
            .set('idFournisseur', idFournisseur.toString())
            .set('enStock', enStock.toString())
            .set('imgGUID', imgGuid.toString())
            .set('description', description.toString())
            .set('Tags', tags.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/AddProduct`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    UpdateProduct(idProduit, nom, prix, tags, enStock, description) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idproduits', idProduit.toString())
            .set('nom', nom.toString())
            .set('prix', prix.toString())
            .set('Tags', tags.toString())
            .set('enStock', enStock.toString())
            .set('description', description.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/UpdateProduct`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
    DeleteProduct(idProduit) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('idproduits', idProduit.toString());
        return this.http.post(`${_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl}/api/DeleteProduct`, body.toString(), _config__WEBPACK_IMPORTED_MODULE_3__["config"].headerObject);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map