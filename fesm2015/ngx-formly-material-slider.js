import { __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';

let FormlySliderTypeComponent = class FormlySliderTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                thumbLabel: false,
            },
        };
    }
    onContainerClick(event) {
        this.slider.focus();
        super.onContainerClick(event);
    }
};
__decorate([
    ViewChild(MatSlider, { static: true }),
    __metadata("design:type", MatSlider)
], FormlySliderTypeComponent.prototype, "slider", void 0);
FormlySliderTypeComponent = __decorate([
    Component({
        selector: 'formly-field-mat-slider',
        template: `
    <mat-slider
      [id]="id"
      [style.width]="'100%'"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex"
      [color]="to.color"
      [thumbLabel]="to.thumbLabel"
      [step]="to.step"
      [max]="to.max"
      [min]="to.min"
    >
    </mat-slider>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlySliderTypeComponent);

let FormlyMatSliderModule = class FormlyMatSliderModule {
};
FormlyMatSliderModule = __decorate([
    NgModule({
        declarations: [FormlySliderTypeComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatSliderModule,
            FormlyMatFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'slider',
                        component: FormlySliderTypeComponent,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ],
    })
], FormlyMatSliderModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyMatSliderModule, FormlySliderTypeComponent as ɵa };
//# sourceMappingURL=ngx-formly-material-slider.js.map
