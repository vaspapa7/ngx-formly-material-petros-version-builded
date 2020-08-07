import { __extends, __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

var FormlyFieldNativeSelect = /** @class */ (function (_super) {
    __extends(FormlyFieldNativeSelect, _super);
    function FormlyFieldNativeSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                options: [],
            },
        };
        return _this;
    }
    __decorate([
        ViewChild(MatInput, { static: true }),
        __metadata("design:type", MatInput)
    ], FormlyFieldNativeSelect.prototype, "formFieldControl", void 0);
    FormlyFieldNativeSelect = __decorate([
        Component({
            selector: 'formly-field-mat-native-select',
            template: "\n    <select\n      matNativeControl\n      [id]=\"id\"\n      [readonly]=\"to.readonly\"\n      [required]=\"to.required\"\n      [errorStateMatcher]=\"errorStateMatcher\"\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n    >\n      <option *ngIf=\"to.placeholder\" [ngValue]=\"undefined\">{{ to.placeholder }}</option>\n      <ng-container *ngIf=\"to.options | formlySelectOptions: field | async as opts\">\n        <ng-container *ngIf=\"to._flatOptions; else grouplist\">\n          <ng-container *ngFor=\"let opt of opts\">\n            <option [ngValue]=\"opt.value\" [disabled]=\"opt.disabled\">{{ opt.label }}</option>\n          </ng-container>\n        </ng-container>\n\n        <ng-template #grouplist>\n          <ng-container *ngFor=\"let opt of opts\">\n            <option *ngIf=\"!opt.group; else optgroup\" [ngValue]=\"opt.value\" [disabled]=\"opt.disabled\">{{\n              opt.label\n            }}</option>\n            <ng-template #optgroup>\n              <optgroup [label]=\"opt.label\">\n                <option *ngFor=\"let child of opt.group\" [ngValue]=\"child.value\" [disabled]=\"child.disabled\">\n                  {{ child.label }}\n                </option>\n              </optgroup>\n            </ng-template>\n          </ng-container>\n        </ng-template>\n      </ng-container>\n    </select>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldNativeSelect);
    return FormlyFieldNativeSelect;
}(FieldType));

var FormlyMatNativeSelectModule = /** @class */ (function () {
    function FormlyMatNativeSelectModule() {
    }
    FormlyMatNativeSelectModule = __decorate([
        NgModule({
            declarations: [FormlyFieldNativeSelect],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatInputModule,
                FormlyMatFormFieldModule,
                FormlySelectModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'native-select',
                            component: FormlyFieldNativeSelect,
                            wrappers: ['form-field'],
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatNativeSelectModule);
    return FormlyMatNativeSelectModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldNativeSelect, FormlyMatNativeSelectModule };
//# sourceMappingURL=ngx-formly-material-native-select.js.map
