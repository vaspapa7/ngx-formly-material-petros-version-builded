import { __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatPseudoCheckboxModule } from '@angular/material/core';

let FormlyFieldSelect = class FormlyFieldSelect extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                options: [],
                compareWith(o1, o2) {
                    return o1 === o2;
                },
            },
        };
    }
    getSelectAllState(options) {
        if (this.empty || this.value.length === 0) {
            return '';
        }
        return this.value.length !== this.getSelectAllValue(options).length ? 'indeterminate' : 'checked';
    }
    toggleSelectAll(options) {
        const selectAllValue = this.getSelectAllValue(options);
        this.formControl.setValue(!this.value || this.value.length !== selectAllValue.length ? selectAllValue : []);
    }
    change($event) {
        if (this.to.change) {
            this.to.change(this.field, $event);
        }
    }
    _getAriaLabelledby() {
        if (this.to.attributes && this.to.attributes['aria-labelledby']) {
            return this.to.attributes['aria-labelledby'];
        }
        if (this.formField && this.formField._labelId) {
            return this.formField._labelId;
        }
        return null;
    }
    getSelectAllValue(options) {
        if (!this.selectAllValue || options !== this.selectAllValue.options) {
            const flatOptions = [];
            options.forEach((o) => (o.group ? flatOptions.push(...o.group) : flatOptions.push(o)));
            this.selectAllValue = {
                options,
                value: flatOptions.map((o) => o.value),
            };
        }
        return this.selectAllValue.value;
    }
};
__decorate([
    ViewChild(MatSelect, { static: true }),
    __metadata("design:type", MatSelect)
], FormlyFieldSelect.prototype, "formFieldControl", void 0);
FormlyFieldSelect = __decorate([
    Component({
        selector: 'formly-field-mat-select',
        template: `
    <ng-template #selectAll let-selectOptions="selectOptions">
      <mat-option (click)="toggleSelectAll(selectOptions)">
        <mat-pseudo-checkbox class="mat-option-pseudo-checkbox" [state]="getSelectAllState(selectOptions)">
        </mat-pseudo-checkbox>
        {{ to.selectAllOption }}
      </mat-option>
    </ng-template>

    <mat-select
      [id]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [placeholder]="to.placeholder"
      [tabindex]="to.tabindex"
      [required]="to.required"
      [compareWith]="to.compareWith"
      [multiple]="to.multiple"
      (selectionChange)="change($event)"
      [errorStateMatcher]="errorStateMatcher"
      [aria-labelledby]="_getAriaLabelledby()"
      [disableOptionCentering]="to.disableOptionCentering"
    >
      <ng-container *ngIf="to.options | formlySelectOptions: field | async as selectOptions">
        <ng-container
          *ngIf="to.multiple && to.selectAllOption"
          [ngTemplateOutlet]="selectAll"
          [ngTemplateOutletContext]="{ selectOptions: selectOptions }"
        >
        </ng-container>
        <ng-container *ngFor="let item of selectOptions">
          <mat-optgroup *ngIf="item.group" [label]="item.label">
            <mat-option *ngFor="let child of item.group" [value]="child.value" [disabled]="child.disabled">
              {{ child.label }}
            </mat-option>
          </mat-optgroup>
          <mat-option *ngIf="!item.group" [value]="item.value" [disabled]="item.disabled">{{ item.label }}</mat-option>
        </ng-container>
      </ng-container>
    </mat-select>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldSelect);

let FormlyMatSelectModule = class FormlyMatSelectModule {
};
FormlyMatSelectModule = __decorate([
    NgModule({
        declarations: [FormlyFieldSelect],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatSelectModule,
            MatPseudoCheckboxModule,
            FormlyMatFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'select',
                        component: FormlyFieldSelect,
                        wrappers: ['form-field'],
                    },
                    { name: 'enum', extends: 'select' },
                ],
            }),
        ],
    })
], FormlyMatSelectModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldSelect, FormlyMatSelectModule };
//# sourceMappingURL=ngx-formly-material-select.js.map
