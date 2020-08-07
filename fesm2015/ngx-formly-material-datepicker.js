import { __decorate, __metadata } from 'tslib';
import { ViewChild, TemplateRef, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerModule } from '@angular/material/datepicker';

let FormlyDatepickerTypeComponent = class FormlyDatepickerTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                datepickerOptions: {
                    startView: 'month',
                    datepickerTogglePosition: 'suffix',
                    dateInput: () => { },
                    dateChange: () => { },
                    monthSelected: () => { },
                    yearSelected: () => { },
                },
            },
        };
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.to[this.to.datepickerOptions.datepickerTogglePosition] = this.datepickerToggle;
        // temporary fix for https://github.com/angular/material2/issues/6728
        this.datepickerInput._formField = this.formField;
    }
};
__decorate([
    ViewChild(MatInput, { static: true }),
    __metadata("design:type", MatInput)
], FormlyDatepickerTypeComponent.prototype, "formFieldControl", void 0);
__decorate([
    ViewChild(MatDatepickerInput, { static: true }),
    __metadata("design:type", MatDatepickerInput)
], FormlyDatepickerTypeComponent.prototype, "datepickerInput", void 0);
__decorate([
    ViewChild('datepickerToggle', { static: true }),
    __metadata("design:type", TemplateRef)
], FormlyDatepickerTypeComponent.prototype, "datepickerToggle", void 0);
FormlyDatepickerTypeComponent = __decorate([
    Component({
        selector: 'formly-field-mat-datepicker',
        template: `
    <input
      matInput
      [id]="id"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [matDatepicker]="picker"
      [matDatepickerFilter]="to.datepickerOptions.filter"
      [max]="to.datepickerOptions.max"
      [min]="to.datepickerOptions.min"
      [formlyAttributes]="field"
      [placeholder]="to.placeholder"
      [tabindex]="to.tabindex"
      [readonly]="to.readonly"
      [required]="to.required"
      (dateInput)="to.datepickerOptions.dateInput(field, $event)"
      (dateChange)="to.datepickerOptions.dateChange(field, $event)"
    />
    <ng-template #datepickerToggle>
      <mat-datepicker-toggle [for]="picker"></mat-datepicker-toggle>
    </ng-template>
    <mat-datepicker
      #picker
      [color]="to.color"
      [dateClass]="to.datepickerOptions.dateClass"
      [disabled]="to.datepickerOptions.disabled"
      [opened]="to.datepickerOptions.opened"
      [panelClass]="to.datepickerOptions.panelClass"
      [startAt]="to.datepickerOptions.startAt"
      [startView]="to.datepickerOptions.startView"
      [touchUi]="to.datepickerOptions.touchUi"
      (monthSelected)="to.datepickerOptions.monthSelected(field, $event, picker)"
      (yearSelected)="to.datepickerOptions.yearSelected(field, $event, picker)"
    >
    </mat-datepicker>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyDatepickerTypeComponent);

let FormlyMatDatepickerModule = class FormlyMatDatepickerModule {
};
FormlyMatDatepickerModule = __decorate([
    NgModule({
        declarations: [FormlyDatepickerTypeComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            MatDatepickerModule,
            FormlyMatFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'datepicker',
                        component: FormlyDatepickerTypeComponent,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ],
    })
], FormlyMatDatepickerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyMatDatepickerModule, FormlyDatepickerTypeComponent as ɵa };
//# sourceMappingURL=ngx-formly-material-datepicker.js.map
