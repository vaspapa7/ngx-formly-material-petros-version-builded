import { __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

let FormlyFieldNativeSelect = class FormlyFieldNativeSelect extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                options: [],
            },
        };
    }
};
__decorate([
    ViewChild(MatInput, { static: true }),
    __metadata("design:type", MatInput)
], FormlyFieldNativeSelect.prototype, "formFieldControl", void 0);
FormlyFieldNativeSelect = __decorate([
    Component({
        selector: 'formly-field-mat-native-select',
        template: `
    <select
      matNativeControl
      [id]="id"
      [readonly]="to.readonly"
      [required]="to.required"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
      <option *ngIf="to.placeholder" [ngValue]="undefined">{{ to.placeholder }}</option>
      <ng-container *ngIf="to.options | formlySelectOptions: field | async as opts">
        <ng-container *ngIf="to._flatOptions; else grouplist">
          <ng-container *ngFor="let opt of opts">
            <option [ngValue]="opt.value" [disabled]="opt.disabled">{{ opt.label }}</option>
          </ng-container>
        </ng-container>

        <ng-template #grouplist>
          <ng-container *ngFor="let opt of opts">
            <option *ngIf="!opt.group; else optgroup" [ngValue]="opt.value" [disabled]="opt.disabled">{{
              opt.label
            }}</option>
            <ng-template #optgroup>
              <optgroup [label]="opt.label">
                <option *ngFor="let child of opt.group" [ngValue]="child.value" [disabled]="child.disabled">
                  {{ child.label }}
                </option>
              </optgroup>
            </ng-template>
          </ng-container>
        </ng-template>
      </ng-container>
    </select>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldNativeSelect);

let FormlyMatNativeSelectModule = class FormlyMatNativeSelectModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldNativeSelect, FormlyMatNativeSelectModule };
//# sourceMappingURL=ngx-formly-material-native-select.js.map
