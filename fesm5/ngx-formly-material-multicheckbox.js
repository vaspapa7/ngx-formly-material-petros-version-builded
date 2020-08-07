import { __extends, __spread, __assign, __decorate, __metadata } from 'tslib';
import { ViewChildren, QueryList, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';

var FormlyFieldMultiCheckbox = /** @class */ (function (_super) {
    __extends(FormlyFieldMultiCheckbox, _super);
    function FormlyFieldMultiCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                options: [],
                color: 'accent',
            },
        };
        return _this;
    }
    FormlyFieldMultiCheckbox.prototype.onChange = function (value, checked) {
        var _a;
        if (this.to.type === 'array') {
            this.formControl.patchValue(checked
                ? __spread((this.formControl.value || []), [value]) : __spread((this.formControl.value || [])).filter(function (o) { return o !== value; }));
        }
        else {
            this.formControl.patchValue(__assign(__assign({}, this.formControl.value), (_a = {}, _a[value] = checked, _a)));
        }
        this.formControl.markAsTouched();
    };
    FormlyFieldMultiCheckbox.prototype.onContainerClick = function (event) {
        if (this.checkboxes.length) {
            this.checkboxes.first.focus();
        }
        _super.prototype.onContainerClick.call(this, event);
    };
    FormlyFieldMultiCheckbox.prototype.isChecked = function (option) {
        var value = this.formControl.value;
        return value && (this.to.type === 'array' ? value.indexOf(option.value) !== -1 : value[option.value]);
    };
    __decorate([
        ViewChildren(MatCheckbox),
        __metadata("design:type", QueryList)
    ], FormlyFieldMultiCheckbox.prototype, "checkboxes", void 0);
    FormlyFieldMultiCheckbox = __decorate([
        Component({
            selector: 'formly-field-mat-multicheckbox',
            template: "\n    <ng-container *ngFor=\"let option of to.options | formlySelectOptions: field | async; let i = index\">\n      <mat-checkbox\n        [id]=\"id + '_' + i\"\n        [formlyAttributes]=\"field\"\n        [tabindex]=\"to.tabindex\"\n        [color]=\"to.color\"\n        [labelPosition]=\"to.labelPosition\"\n        [checked]=\"isChecked(option)\"\n        [disabled]=\"formControl.disabled\"\n        (change)=\"onChange(option.value, $event.checked)\"\n      >\n        {{ option.label }}\n      </mat-checkbox>\n    </ng-container>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldMultiCheckbox);
    return FormlyFieldMultiCheckbox;
}(FieldType));

var FormlyMatMultiCheckboxModule = /** @class */ (function () {
    function FormlyMatMultiCheckboxModule() {
    }
    FormlyMatMultiCheckboxModule = __decorate([
        NgModule({
            declarations: [FormlyFieldMultiCheckbox],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatCheckboxModule,
                FormlyMatFormFieldModule,
                FormlySelectModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'multicheckbox',
                            component: FormlyFieldMultiCheckbox,
                            wrappers: ['form-field'],
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatMultiCheckboxModule);
    return FormlyMatMultiCheckboxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldMultiCheckbox, FormlyMatMultiCheckboxModule };
//# sourceMappingURL=ngx-formly-material-multicheckbox.js.map
