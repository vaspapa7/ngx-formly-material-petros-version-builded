import { __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';

let FormlyFieldCheckbox = class FormlyFieldCheckbox extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                indeterminate: true,
                floatLabel: 'always',
                hideLabel: true,
                align: 'start',
                color: 'accent',
            },
        };
    }
    onContainerClick(event) {
        this.checkbox.focus();
        super.onContainerClick(event);
    }
};
__decorate([
    ViewChild(MatCheckbox, { static: true }),
    __metadata("design:type", MatCheckbox)
], FormlyFieldCheckbox.prototype, "checkbox", void 0);
FormlyFieldCheckbox = __decorate([
    Component({
        selector: 'formly-field-mat-checkbox',
        template: `
    <mat-checkbox
      [formControl]="formControl"
      [id]="id"
      [required]="to.required"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex"
      [indeterminate]="to.indeterminate && formControl.value == null"
      [color]="to.color"
      [labelPosition]="to.align || to.labelPosition"
    >
      {{ to.label }}
      <span *ngIf="to.required && to.hideRequiredMarker !== true" class="mat-form-field-required-marker">*</span>
    </mat-checkbox>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldCheckbox);

let FormlyMatCheckboxModule = class FormlyMatCheckboxModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldCheckbox, FormlyMatCheckboxModule };
//# sourceMappingURL=ngx-formly-material-checkbox.js.map
