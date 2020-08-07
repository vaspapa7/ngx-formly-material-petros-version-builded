import { __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';

let FormlyToggleTypeComponent = class FormlyToggleTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                hideLabel: true,
            },
        };
    }
    onContainerClick(event) {
        this.slideToggle.focus();
        super.onContainerClick(event);
    }
};
__decorate([
    ViewChild(MatSlideToggle, { static: true }),
    __metadata("design:type", MatSlideToggle)
], FormlyToggleTypeComponent.prototype, "slideToggle", void 0);
FormlyToggleTypeComponent = __decorate([
    Component({
        selector: 'formly-field-mat-toggle',
        template: `
    <mat-slide-toggle
      [id]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [color]="to.color"
      [tabindex]="to.tabindex"
      [required]="to.required"
    >
      {{ to.label }}
    </mat-slide-toggle>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyToggleTypeComponent);

let FormlyMatToggleModule = class FormlyMatToggleModule {
};
FormlyMatToggleModule = __decorate([
    NgModule({
        declarations: [FormlyToggleTypeComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatSlideToggleModule,
            FormlyMatFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'toggle',
                        component: FormlyToggleTypeComponent,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ],
    })
], FormlyMatToggleModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyMatToggleModule, FormlyToggleTypeComponent as ɵa };
//# sourceMappingURL=ngx-formly-material-toggle.js.map
