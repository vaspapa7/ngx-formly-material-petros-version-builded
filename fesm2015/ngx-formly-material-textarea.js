import { __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInput, MAT_INPUT_VALUE_ACCESSOR, MatInputModule } from '@angular/material/input';

var FormlyFieldTextArea_1;
let FormlyFieldTextArea = FormlyFieldTextArea_1 = class FormlyFieldTextArea extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                cols: 1,
                rows: 1,
            },
        };
    }
};
__decorate([
    ViewChild(MatInput, { static: true }),
    __metadata("design:type", MatInput)
], FormlyFieldTextArea.prototype, "formFieldControl", void 0);
FormlyFieldTextArea = FormlyFieldTextArea_1 = __decorate([
    Component({
        selector: 'formly-field-mat-textarea',
        template: `
    <textarea
      matInput
      [id]="id"
      [readonly]="to.readonly"
      [required]="to.required"
      [formControl]="formControl"
      [errorStateMatcher]="errorStateMatcher"
      [cols]="to.cols"
      [rows]="to.rows"
      [formlyAttributes]="field"
      [placeholder]="to.placeholder"
      [tabindex]="to.tabindex"
      [cdkTextareaAutosize]="to.autosize"
      [cdkAutosizeMinRows]="to.autosizeMinRows"
      [cdkAutosizeMaxRows]="to.autosizeMaxRows"
      [class.cdk-textarea-autosize]="to.autosize"
    >
    </textarea>
  `,
        providers: [
            // fix for https://github.com/ngx-formly/ngx-formly/issues/1688
            // rely on formControl value instead of elementRef which return empty value in Firefox.
            { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: FormlyFieldTextArea_1 },
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldTextArea);

let FormlyMatTextAreaModule = class FormlyMatTextAreaModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldTextArea, FormlyMatTextAreaModule };
//# sourceMappingURL=ngx-formly-material-textarea.js.map
