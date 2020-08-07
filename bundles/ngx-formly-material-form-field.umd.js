(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ngx-formly/core'), require('@angular/forms'), require('@angular/material/form-field'), require('@angular/cdk/a11y'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@ngx-formly/material/form-field', ['exports', '@angular/core', '@angular/common', '@ngx-formly/core', '@angular/forms', '@angular/material/form-field', '@angular/cdk/a11y', 'rxjs'], factory) :
    (global = global || self, factory((global['ngx-formly'] = global['ngx-formly'] || {}, global['ngx-formly'].material = global['ngx-formly'].material || {}, global['ngx-formly'].material['form-field'] = {}), global.ng.core, global.ng.common, global.core$1, global.ng.forms, global.ng.material.formField, global.ng.cdk.a11y, global.rxjs));
}(this, (function (exports, core, common, core$1, forms, formField, a11y, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
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
        };
        return __assign.apply(this, arguments);
    };

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
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

    var __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var FormlyWrapperFormField = /** @class */ (function (_super) {
        __extends(FormlyWrapperFormField, _super);
        function FormlyWrapperFormField(renderer, elementRef, focusMonitor) {
            var _this = _super.call(this) || this;
            _this.renderer = renderer;
            _this.elementRef = elementRef;
            _this.focusMonitor = focusMonitor;
            _this.initialGapCalculated = false;
            return _this;
        }
        FormlyWrapperFormField.prototype.ngOnInit = function () {
            var _this = this;
            core$1.ɵdefineHiddenProp(this.field, '__formField__', this.formField);
            ['prefix', 'suffix'].forEach(function (type) {
                return core$1.ɵobserve(_this.field, ['templateOptions', type], function (_a) {
                    var currentValue = _a.currentValue;
                    return currentValue &&
                        Promise.resolve().then(function () {
                            _this.field["_mat" + type] = currentValue;
                            _this.options.detectChanges(_this.field);
                        });
                });
            });
            // fix for https://github.com/angular/material2/issues/11437
            if (this.field.hide && this.field.templateOptions.appearance === 'outline') {
                this.initialGapCalculated = true;
            }
            this.focusMonitor.monitor(this.elementRef, true).subscribe(function (origin) {
                if (!origin && _this.field.focus) {
                    _this.field.focus = false;
                }
            });
        };
        FormlyWrapperFormField.prototype.ngAfterContentChecked = function () {
            if (!this.initialGapCalculated || this.field.hide) {
                return;
            }
            this.formField.updateOutlineGap();
            this.initialGapCalculated = true;
        };
        FormlyWrapperFormField.prototype.ngAfterViewInit = function () {
            // temporary fix for https://github.com/angular/material2/issues/7891
            if (this.formField.appearance !== 'outline' && this.to.hideFieldUnderline === true) {
                var underlineElement = this.formField._elementRef.nativeElement.querySelector('.mat-form-field-underline');
                underlineElement && this.renderer.removeChild(underlineElement.parentNode, underlineElement);
            }
        };
        FormlyWrapperFormField.prototype.ngOnDestroy = function () {
            delete this.field.__formField__;
            this.focusMonitor.stopMonitoring(this.elementRef);
        };
        FormlyWrapperFormField.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: a11y.FocusMonitor }
        ]; };
        __decorate([
            core.ViewChild('fieldComponent', { read: core.ViewContainerRef, static: true }),
            __metadata("design:type", core.ViewContainerRef)
        ], FormlyWrapperFormField.prototype, "fieldComponent", void 0);
        __decorate([
            core.ViewChild(formField.MatFormField, { static: true }),
            __metadata("design:type", formField.MatFormField)
        ], FormlyWrapperFormField.prototype, "formField", void 0);
        FormlyWrapperFormField = __decorate([
            core.Component({
                selector: 'formly-wrapper-mat-form-field',
                template: "\n    <!-- fix https://github.com/angular/material2/pull/7083 by setting width to 100% -->\n    <mat-form-field\n      [hideRequiredMarker]=\"true\"\n      [floatLabel]=\"to.floatLabel\"\n      [appearance]=\"to.appearance\"\n      [color]=\"to.color\"\n      [style.width]=\"'100%'\"\n    >\n      <ng-container #fieldComponent></ng-container>\n      <mat-label *ngIf=\"to.label && to.hideLabel !== true\">\n        {{ to.label }}\n        <span *ngIf=\"to.required && to.hideRequiredMarker !== true\" class=\"mat-form-field-required-marker\">*</span>\n      </mat-label>\n\n      <ng-container matPrefix>\n        <ng-container *ngTemplateOutlet=\"field._matprefix\"></ng-container>\n      </ng-container>\n\n      <ng-container matSuffix>\n        <ng-container *ngTemplateOutlet=\"field._matsuffix\"></ng-container>\n      </ng-container>\n\n      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->\n      <mat-error [id]=\"null\">\n        <formly-validation-message [field]=\"field\"></formly-validation-message>\n      </mat-error>\n      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->\n      <mat-hint *ngIf=\"to.description\" [id]=\"null\">{{ to.description }}</mat-hint>\n    </mat-form-field>\n  ",
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.Renderer2, core.ElementRef, a11y.FocusMonitor])
        ], FormlyWrapperFormField);
        return FormlyWrapperFormField;
    }(core$1.FieldWrapper));

    var FormlyMatFormFieldModule = /** @class */ (function () {
        function FormlyMatFormFieldModule() {
        }
        FormlyMatFormFieldModule = __decorate([
            core.NgModule({
                declarations: [FormlyWrapperFormField],
                imports: [
                    common.CommonModule,
                    forms.ReactiveFormsModule,
                    formField.MatFormFieldModule,
                    core$1.FormlyModule.forChild({
                        wrappers: [
                            {
                                name: 'form-field',
                                component: FormlyWrapperFormField,
                            },
                        ],
                    }),
                ],
            })
        ], FormlyMatFormFieldModule);
        return FormlyMatFormFieldModule;
    }());

    var FieldType = /** @class */ (function (_super) {
        __extends(FieldType, _super);
        function FieldType() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorStateMatcher = { isErrorState: function () { return _this.field && _this.showError; } };
            _this.stateChanges = new rxjs.Subject();
            _this._errorState = false;
            return _this;
        }
        Object.defineProperty(FieldType.prototype, "formFieldControl", {
            get: function () {
                return this._control || this;
            },
            set: function (control) {
                this._control = control;
                if (this.formField && control !== this.formField._control) {
                    this.formField._control = control;
                }
            },
            enumerable: true,
            configurable: true
        });
        FieldType.prototype.ngOnInit = function () {
            if (this.formField) {
                this.formField._control = this.formFieldControl;
            }
        };
        FieldType.prototype.ngAfterViewInit = function () {
            if (this.matPrefix) {
                this.to.prefix = this.matPrefix;
            }
            if (this.matSuffix) {
                this.to.prefix = this.matSuffix;
            }
        };
        FieldType.prototype.ngOnDestroy = function () {
            if (this.formField) {
                delete this.formField._control;
            }
            this.stateChanges.complete();
        };
        FieldType.prototype.setDescribedByIds = function (ids) { };
        FieldType.prototype.onContainerClick = function (event) {
            this.field.focus = true;
            this.stateChanges.next();
        };
        Object.defineProperty(FieldType.prototype, "errorState", {
            get: function () {
                var showError = this.options.showError(this);
                if (showError !== this._errorState) {
                    this._errorState = showError;
                    this.stateChanges.next();
                }
                return showError;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "controlType", {
            get: function () {
                if (this.to.type) {
                    return this.to.type;
                }
                if (this.field.type instanceof core.Type) {
                    return this.field.type.constructor.name;
                }
                return this.field.type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "focused", {
            get: function () {
                return !!this.field.focus && !this.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "disabled", {
            get: function () {
                return !!this.to.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "required", {
            get: function () {
                return !!this.to.required;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "placeholder", {
            get: function () {
                return this.to.placeholder || '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "shouldPlaceholderFloat", {
            get: function () {
                return this.shouldLabelFloat;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "value", {
            get: function () {
                return this.formControl.value;
            },
            set: function (value) {
                this.formControl.patchValue(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "ngControl", {
            get: function () {
                return this.formControl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "empty", {
            get: function () {
                return this.value == null || this.value === '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "shouldLabelFloat", {
            get: function () {
                return this.focused || !this.empty;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "formField", {
            get: function () {
                return this.field ? this.field['__formField__'] : null;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core.ViewChild('matPrefix'),
            __metadata("design:type", core.TemplateRef)
        ], FieldType.prototype, "matPrefix", void 0);
        __decorate([
            core.ViewChild('matSuffix'),
            __metadata("design:type", core.TemplateRef)
        ], FieldType.prototype, "matSuffix", void 0);
        FieldType = __decorate([
            core.Directive()
        ], FieldType);
        return FieldType;
    }(core$1.FieldType));

    exports.FieldType = FieldType;
    exports.FormlyMatFormFieldModule = FormlyMatFormFieldModule;
    exports.ɵa = FormlyWrapperFormField;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-formly-material-form-field.umd.js.map
