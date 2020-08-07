import { __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ɵobserve, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';

let FormlyFieldRadio = class FormlyFieldRadio extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                options: [],
                tabindex: -1,
            },
        };
    }
    ngAfterViewInit() {
        this.focusObserver = ɵobserve(this.field, ['focus'], ({ currentValue }) => {
            if (this.to.tabindex === -1 && currentValue && this.radioGroup._radios.length > 0) {
                const radio = this.radioGroup.selected ? this.radioGroup.selected : this.radioGroup._radios.first;
                radio.focus();
            }
        });
    }
    ngOnDestroy() {
        this.focusObserver && this.focusObserver.unsubscribe();
    }
};
__decorate([
    ViewChild(MatRadioGroup, { static: true }),
    __metadata("design:type", MatRadioGroup)
], FormlyFieldRadio.prototype, "radioGroup", void 0);
FormlyFieldRadio = __decorate([
    Component({
        selector: 'formly-field-mat-radio',
        template: `
    <mat-radio-group
      [formControl]="formControl"
      [formlyAttributes]="field"
      [required]="to.required"
      [tabindex]="to.tabindex"
    >
      <mat-radio-button
        *ngFor="let option of to.options | formlySelectOptions: field | async; let i = index"
        [id]="id + '_' + i"
        [color]="to.color"
        [labelPosition]="to.labelPosition"
        [value]="option.value"
      >
        {{ option.label }}
      </mat-radio-button>
    </mat-radio-group>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldRadio);

let FormlyMatRadioModule = class FormlyMatRadioModule {
};
FormlyMatRadioModule = __decorate([
    NgModule({
        declarations: [FormlyFieldRadio],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatRadioModule,
            FormlyMatFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'radio',
                        component: FormlyFieldRadio,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ],
    })
], FormlyMatRadioModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldRadio, FormlyMatRadioModule };
//# sourceMappingURL=ngx-formly-material-radio.js.map
