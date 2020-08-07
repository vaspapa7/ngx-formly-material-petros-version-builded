import { __extends, __decorate, __metadata } from 'tslib';
import { Renderer2, ElementRef, ViewChild, ViewContainerRef, Component, ChangeDetectionStrategy, NgModule, Type, TemplateRef, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ɵdefineHiddenProp, ɵobserve, FieldWrapper, FormlyModule, FieldType as FieldType$1 } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';

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
        ɵdefineHiddenProp(this.field, '__formField__', this.formField);
        ['prefix', 'suffix'].forEach(function (type) {
            return ɵobserve(_this.field, ['templateOptions', type], function (_a) {
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
        { type: Renderer2 },
        { type: ElementRef },
        { type: FocusMonitor }
    ]; };
    __decorate([
        ViewChild('fieldComponent', { read: ViewContainerRef, static: true }),
        __metadata("design:type", ViewContainerRef)
    ], FormlyWrapperFormField.prototype, "fieldComponent", void 0);
    __decorate([
        ViewChild(MatFormField, { static: true }),
        __metadata("design:type", MatFormField)
    ], FormlyWrapperFormField.prototype, "formField", void 0);
    FormlyWrapperFormField = __decorate([
        Component({
            selector: 'formly-wrapper-mat-form-field',
            template: "\n    <!-- fix https://github.com/angular/material2/pull/7083 by setting width to 100% -->\n    <mat-form-field\n      [hideRequiredMarker]=\"true\"\n      [floatLabel]=\"to.floatLabel\"\n      [appearance]=\"to.appearance\"\n      [color]=\"to.color\"\n      [style.width]=\"'100%'\"\n    >\n      <ng-container #fieldComponent></ng-container>\n      <mat-label *ngIf=\"to.label && to.hideLabel !== true\">\n        {{ to.label }}\n        <span *ngIf=\"to.required && to.hideRequiredMarker !== true\" class=\"mat-form-field-required-marker\">*</span>\n      </mat-label>\n\n      <ng-container matPrefix>\n        <ng-container *ngTemplateOutlet=\"field._matprefix\"></ng-container>\n      </ng-container>\n\n      <ng-container matSuffix>\n        <ng-container *ngTemplateOutlet=\"field._matsuffix\"></ng-container>\n      </ng-container>\n\n      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->\n      <mat-error [id]=\"null\">\n        <formly-validation-message [field]=\"field\"></formly-validation-message>\n      </mat-error>\n      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->\n      <mat-hint *ngIf=\"to.description\" [id]=\"null\">{{ to.description }}</mat-hint>\n    </mat-form-field>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef, FocusMonitor])
    ], FormlyWrapperFormField);
    return FormlyWrapperFormField;
}(FieldWrapper));

var FormlyMatFormFieldModule = /** @class */ (function () {
    function FormlyMatFormFieldModule() {
    }
    FormlyMatFormFieldModule = __decorate([
        NgModule({
            declarations: [FormlyWrapperFormField],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                FormlyModule.forChild({
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
        _this.stateChanges = new Subject();
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
            if (this.field.type instanceof Type) {
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
        ViewChild('matPrefix'),
        __metadata("design:type", TemplateRef)
    ], FieldType.prototype, "matPrefix", void 0);
    __decorate([
        ViewChild('matSuffix'),
        __metadata("design:type", TemplateRef)
    ], FieldType.prototype, "matSuffix", void 0);
    FieldType = __decorate([
        Directive()
    ], FieldType);
    return FieldType;
}(FieldType$1));

/**
 * Generated bundle index. Do not edit.
 */

export { FieldType, FormlyMatFormFieldModule, FormlyWrapperFormField as ɵa };
//# sourceMappingURL=ngx-formly-material-form-field.js.map
