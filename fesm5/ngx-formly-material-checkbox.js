import { __extends, __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';

var FormlyFieldCheckbox = /** @class */ (function (_super) {
    __extends(FormlyFieldCheckbox, _super);
    function FormlyFieldCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                indeterminate: true,
                floatLabel: 'always',
                hideLabel: true,
                align: 'start',
                color: 'accent',
            },
        };
        return _this;
    }
    FormlyFieldCheckbox.prototype.onContainerClick = function (event) {
        this.checkbox.focus();
        _super.prototype.onContainerClick.call(this, event);
    };
    __decorate([
        ViewChild(MatCheckbox, { static: true }),
        __metadata("design:type", MatCheckbox)
    ], FormlyFieldCheckbox.prototype, "checkbox", void 0);
    FormlyFieldCheckbox = __decorate([
        Component({
            selector: 'formly-field-mat-checkbox',
            template: "\n    <mat-checkbox\n      [formControl]=\"formControl\"\n      [id]=\"id\"\n      [required]=\"to.required\"\n      [formlyAttributes]=\"field\"\n      [tabindex]=\"to.tabindex\"\n      [indeterminate]=\"to.indeterminate && formControl.value == null\"\n      [color]=\"to.color\"\n      [labelPosition]=\"to.align || to.labelPosition\"\n    >\n      {{ to.label }}\n      <span *ngIf=\"to.required && to.hideRequiredMarker !== true\" class=\"mat-form-field-required-marker\">*</span>\n    </mat-checkbox>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldCheckbox);
    return FormlyFieldCheckbox;
}(FieldType));

var FormlyMatCheckboxModule = /** @class */ (function () {
    function FormlyMatCheckboxModule() {
    }
    FormlyMatCheckboxModule = __decorate([
        NgModule({
            declarations: [FormlyFieldCheckbox],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatCheckboxModule,
                FormlyMatFormFieldModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'checkbox',
                            component: FormlyFieldCheckbox,
                            wrappers: ['form-field'],
                        },
                        {
                            name: 'boolean',
                            extends: 'checkbox',
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatCheckboxModule);
    return FormlyMatCheckboxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldCheckbox, FormlyMatCheckboxModule };
//# sourceMappingURL=ngx-formly-material-checkbox.js.map
