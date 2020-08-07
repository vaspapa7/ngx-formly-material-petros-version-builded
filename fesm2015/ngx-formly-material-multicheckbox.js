import { __decorate, __metadata } from 'tslib';
import { ViewChildren, QueryList, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';

let FormlyFieldMultiCheckbox = class FormlyFieldMultiCheckbox extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                options: [],
                color: 'accent',
            },
        };
    }
    onChange(value, checked) {
        if (this.to.type === 'array') {
            this.formControl.patchValue(checked
                ? [...(this.formControl.value || []), value]
                : [...(this.formControl.value || [])].filter((o) => o !== value));
        }
        else {
            this.formControl.patchValue(Object.assign(Object.assign({}, this.formControl.value), { [value]: checked }));
        }
        this.formControl.markAsTouched();
    }
    onContainerClick(event) {
        if (this.checkboxes.length) {
            this.checkboxes.first.focus();
        }
        super.onContainerClick(event);
    }
    isChecked(option) {
        const value = this.formControl.value;
        return value && (this.to.type === 'array' ? value.indexOf(option.value) !== -1 : value[option.value]);
    }
};
__decorate([
    ViewChildren(MatCheckbox),
    __metadata("design:type", QueryList)
], FormlyFieldMultiCheckbox.prototype, "checkboxes", void 0);
FormlyFieldMultiCheckbox = __decorate([
    Component({
        selector: 'formly-field-mat-multicheckbox',
        template: `
    <ng-container *ngFor="let option of to.options | formlySelectOptions: field | async; let i = index">
      <mat-checkbox
        [id]="id + '_' + i"
        [formlyAttributes]="field"
        [tabindex]="to.tabindex"
        [color]="to.color"
        [labelPosition]="to.labelPosition"
        [checked]="isChecked(option)"
        [disabled]="formControl.disabled"
        (change)="onChange(option.value, $event.checked)"
      >
        {{ option.label }}
      </mat-checkbox>
    </ng-container>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldMultiCheckbox);

let FormlyMatMultiCheckboxModule = class FormlyMatMultiCheckboxModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldMultiCheckbox, FormlyMatMultiCheckboxModule };
//# sourceMappingURL=ngx-formly-material-multicheckbox.js.map
