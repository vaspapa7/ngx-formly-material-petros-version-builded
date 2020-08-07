import { __extends, __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInput, MAT_INPUT_VALUE_ACCESSOR, MatInputModule } from '@angular/material/input';

var FormlyFieldTextArea = /** @class */ (function (_super) {
    __extends(FormlyFieldTextArea, _super);
    function FormlyFieldTextArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                cols: 1,
                rows: 1,
            },
        };
        return _this;
    }
    FormlyFieldTextArea_1 = FormlyFieldTextArea;
    var FormlyFieldTextArea_1;
    __decorate([
        ViewChild(MatInput, { static: true }),
        __metadata("design:type", MatInput)
    ], FormlyFieldTextArea.prototype, "formFieldControl", void 0);
    FormlyFieldTextArea = FormlyFieldTextArea_1 = __decorate([
        Component({
            selector: 'formly-field-mat-textarea',
            template: "\n    <textarea\n      matInput\n      [id]=\"id\"\n      [readonly]=\"to.readonly\"\n      [required]=\"to.required\"\n      [formControl]=\"formControl\"\n      [errorStateMatcher]=\"errorStateMatcher\"\n      [cols]=\"to.cols\"\n      [rows]=\"to.rows\"\n      [formlyAttributes]=\"field\"\n      [placeholder]=\"to.placeholder\"\n      [tabindex]=\"to.tabindex\"\n      [cdkTextareaAutosize]=\"to.autosize\"\n      [cdkAutosizeMinRows]=\"to.autosizeMinRows\"\n      [cdkAutosizeMaxRows]=\"to.autosizeMaxRows\"\n      [class.cdk-textarea-autosize]=\"to.autosize\"\n    >\n    </textarea>\n  ",
            providers: [
                // fix for https://github.com/ngx-formly/ngx-formly/issues/1688
                // rely on formControl value instead of elementRef which return empty value in Firefox.
                { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: FormlyFieldTextArea_1 },
            ],
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldTextArea);
    return FormlyFieldTextArea;
}(FieldType));

var FormlyMatTextAreaModule = /** @class */ (function () {
    function FormlyMatTextAreaModule() {
    }
    FormlyMatTextAreaModule = __decorate([
        NgModule({
            declarations: [FormlyFieldTextArea],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatInputModule,
                FormlyMatFormFieldModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'textarea',
                            component: FormlyFieldTextArea,
                            wrappers: ['form-field'],
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatTextAreaModule);
    return FormlyMatTextAreaModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldTextArea, FormlyMatTextAreaModule };
//# sourceMappingURL=ngx-formly-material-textarea.js.map
