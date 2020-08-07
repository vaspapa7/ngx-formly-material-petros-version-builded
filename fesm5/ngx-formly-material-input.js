import { __extends, __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

var FormlyFieldInput = /** @class */ (function (_super) {
    __extends(FormlyFieldInput, _super);
    function FormlyFieldInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormlyFieldInput.prototype, "type", {
        get: function () {
            return this.to.type || 'text';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ViewChild(MatInput),
        __metadata("design:type", MatInput)
    ], FormlyFieldInput.prototype, "formFieldControl", void 0);
    FormlyFieldInput = __decorate([
        Component({
            selector: 'formly-field-mat-input',
            template: "\n    <input\n      *ngIf=\"type !== 'number'; else numberTmp\"\n      matInput\n      [id]=\"id\"\n      [type]=\"type || 'text'\"\n      [readonly]=\"to.readonly\"\n      [required]=\"to.required\"\n      [errorStateMatcher]=\"errorStateMatcher\"\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [tabindex]=\"to.tabindex\"\n      [placeholder]=\"to.placeholder\"\n    />\n    <ng-template #numberTmp>\n      <input\n        matInput\n        [id]=\"id\"\n        type=\"number\"\n        [readonly]=\"to.readonly\"\n        [required]=\"to.required\"\n        [errorStateMatcher]=\"errorStateMatcher\"\n        [formControl]=\"formControl\"\n        [formlyAttributes]=\"field\"\n        [tabindex]=\"to.tabindex\"\n        [placeholder]=\"to.placeholder\"\n      />\n    </ng-template>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldInput);
    return FormlyFieldInput;
}(FieldType));

var FormlyMatInputModule = /** @class */ (function () {
    function FormlyMatInputModule() {
    }
    FormlyMatInputModule = __decorate([
        NgModule({
            declarations: [FormlyFieldInput],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatInputModule,
                FormlyMatFormFieldModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'input',
                            component: FormlyFieldInput,
                            wrappers: ['form-field'],
                        },
                        { name: 'string', extends: 'input' },
                        {
                            name: 'number',
                            extends: 'input',
                            defaultOptions: {
                                templateOptions: {
                                    type: 'number',
                                },
                            },
                        },
                        {
                            name: 'integer',
                            extends: 'input',
                            defaultOptions: {
                                templateOptions: {
                                    type: 'number',
                                },
                            },
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatInputModule);
    return FormlyMatInputModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldInput, FormlyMatInputModule };
//# sourceMappingURL=ngx-formly-material-input.js.map
