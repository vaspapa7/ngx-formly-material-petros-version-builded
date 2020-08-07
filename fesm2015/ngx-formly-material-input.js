import { __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

let FormlyFieldInput = class FormlyFieldInput extends FieldType {
    get type() {
        return this.to.type || 'text';
    }
};
__decorate([
    ViewChild(MatInput),
    __metadata("design:type", MatInput)
], FormlyFieldInput.prototype, "formFieldControl", void 0);
FormlyFieldInput = __decorate([
    Component({
        selector: 'formly-field-mat-input',
        template: `
    <input
      *ngIf="type !== 'number'; else numberTmp"
      matInput
      [id]="id"
      [type]="type || 'text'"
      [readonly]="to.readonly"
      [required]="to.required"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex"
      [placeholder]="to.placeholder"
    />
    <ng-template #numberTmp>
      <input
        matInput
        [id]="id"
        type="number"
        [readonly]="to.readonly"
        [required]="to.required"
        [errorStateMatcher]="errorStateMatcher"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [tabindex]="to.tabindex"
        [placeholder]="to.placeholder"
      />
    </ng-template>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldInput);

let FormlyMatInputModule = class FormlyMatInputModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldInput, FormlyMatInputModule };
//# sourceMappingURL=ngx-formly-material-input.js.map
