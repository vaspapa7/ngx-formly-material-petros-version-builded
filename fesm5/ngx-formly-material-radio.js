import { __extends, __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ɵobserve, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';

var FormlyFieldRadio = /** @class */ (function (_super) {
    __extends(FormlyFieldRadio, _super);
    function FormlyFieldRadio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                options: [],
                tabindex: -1,
            },
        };
        return _this;
    }
    FormlyFieldRadio.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.focusObserver = ɵobserve(this.field, ['focus'], function (_a) {
            var currentValue = _a.currentValue;
            if (_this.to.tabindex === -1 && currentValue && _this.radioGroup._radios.length > 0) {
                var radio = _this.radioGroup.selected ? _this.radioGroup.selected : _this.radioGroup._radios.first;
                radio.focus();
            }
        });
    };
    FormlyFieldRadio.prototype.ngOnDestroy = function () {
        this.focusObserver && this.focusObserver.unsubscribe();
    };
    __decorate([
        ViewChild(MatRadioGroup, { static: true }),
        __metadata("design:type", MatRadioGroup)
    ], FormlyFieldRadio.prototype, "radioGroup", void 0);
    FormlyFieldRadio = __decorate([
        Component({
            selector: 'formly-field-mat-radio',
            template: "\n    <mat-radio-group\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [required]=\"to.required\"\n      [tabindex]=\"to.tabindex\"\n    >\n      <mat-radio-button\n        *ngFor=\"let option of to.options | formlySelectOptions: field | async; let i = index\"\n        [id]=\"id + '_' + i\"\n        [color]=\"to.color\"\n        [labelPosition]=\"to.labelPosition\"\n        [value]=\"option.value\"\n      >\n        {{ option.label }}\n      </mat-radio-button>\n    </mat-radio-group>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldRadio);
    return FormlyFieldRadio;
}(FieldType));

var FormlyMatRadioModule = /** @class */ (function () {
    function FormlyMatRadioModule() {
    }
    FormlyMatRadioModule = __decorate([
        NgModule({
            declarations: [FormlyFieldRadio],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatRadioModule,
                FormlyMatFormFieldModule,
                FormlySelectModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'radio',
                            component: FormlyFieldRadio,
                            wrappers: ['form-field'],
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatRadioModule);
    return FormlyMatRadioModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldRadio, FormlyMatRadioModule };
//# sourceMappingURL=ngx-formly-material-radio.js.map
