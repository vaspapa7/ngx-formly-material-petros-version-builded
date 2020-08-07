import { __decorate, __metadata } from 'tslib';
import { Renderer2, ElementRef, ViewChild, ViewContainerRef, Component, ChangeDetectionStrategy, NgModule, Type, TemplateRef, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldWrapper, ɵdefineHiddenProp, ɵobserve, FormlyModule, FieldType as FieldType$1 } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';

let FormlyWrapperFormField = class FormlyWrapperFormField extends FieldWrapper {
    constructor(renderer, elementRef, focusMonitor) {
        super();
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.initialGapCalculated = false;
    }
    ngOnInit() {
        ɵdefineHiddenProp(this.field, '__formField__', this.formField);
        ['prefix', 'suffix'].forEach((type) => ɵobserve(this.field, ['templateOptions', type], ({ currentValue }) => currentValue &&
            Promise.resolve().then(() => {
                this.field[`_mat${type}`] = currentValue;
                this.options.detectChanges(this.field);
            })));
        // fix for https://github.com/angular/material2/issues/11437
        if (this.field.hide && this.field.templateOptions.appearance === 'outline') {
            this.initialGapCalculated = true;
        }
        this.focusMonitor.monitor(this.elementRef, true).subscribe((origin) => {
            if (!origin && this.field.focus) {
                this.field.focus = false;
            }
        });
    }
    ngAfterContentChecked() {
        if (!this.initialGapCalculated || this.field.hide) {
            return;
        }
        this.formField.updateOutlineGap();
        this.initialGapCalculated = true;
    }
    ngAfterViewInit() {
        // temporary fix for https://github.com/angular/material2/issues/7891
        if (this.formField.appearance !== 'outline' && this.to.hideFieldUnderline === true) {
            const underlineElement = this.formField._elementRef.nativeElement.querySelector('.mat-form-field-underline');
            underlineElement && this.renderer.removeChild(underlineElement.parentNode, underlineElement);
        }
    }
    ngOnDestroy() {
        delete this.field.__formField__;
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
};
FormlyWrapperFormField.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: FocusMonitor }
];
__decorate([
    ViewChild('fieldComponent', { read: ViewContainerRef, static: true }),
    __metadata("design:type", ViewContainerRef)
], FormlyWrapperFormField.prototype, "fieldComponent", void 0);
__decorate([
    ViewChild(MatFormField, { static: true }),
    __metadata("design:type", MatFormField)
], FormlyWrapperFormField.prototype, "formField", void 0);
FormlyWrapperFormField = __decorate([
    Component({
        selector: 'formly-wrapper-mat-form-field',
        template: `
    <!-- fix https://github.com/angular/material2/pull/7083 by setting width to 100% -->
    <mat-form-field
      [hideRequiredMarker]="true"
      [floatLabel]="to.floatLabel"
      [appearance]="to.appearance"
      [color]="to.color"
      [style.width]="'100%'"
    >
      <ng-container #fieldComponent></ng-container>
      <mat-label *ngIf="to.label && to.hideLabel !== true">
        {{ to.label }}
        <span *ngIf="to.required && to.hideRequiredMarker !== true" class="mat-form-field-required-marker">*</span>
      </mat-label>

      <ng-container matPrefix>
        <ng-container *ngTemplateOutlet="field._matprefix"></ng-container>
      </ng-container>

      <ng-container matSuffix>
        <ng-container *ngTemplateOutlet="field._matsuffix"></ng-container>
      </ng-container>

      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->
      <mat-error [id]="null">
        <formly-validation-message [field]="field"></formly-validation-message>
      </mat-error>
      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->
      <mat-hint *ngIf="to.description" [id]="null">{{ to.description }}</mat-hint>
    </mat-form-field>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef, FocusMonitor])
], FormlyWrapperFormField);

let FormlyMatFormFieldModule = class FormlyMatFormFieldModule {
};
FormlyMatFormFieldModule = __decorate([
    NgModule({
        declarations: [FormlyWrapperFormField],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'form-field',
                        component: FormlyWrapperFormField,
                    },
                ],
            }),
        ],
    })
], FormlyMatFormFieldModule);

let FieldType = class FieldType extends FieldType$1 {
    constructor() {
        super(...arguments);
        this.errorStateMatcher = { isErrorState: () => this.field && this.showError };
        this.stateChanges = new Subject();
        this._errorState = false;
    }
    get formFieldControl() {
        return this._control || this;
    }
    set formFieldControl(control) {
        this._control = control;
        if (this.formField && control !== this.formField._control) {
            this.formField._control = control;
        }
    }
    ngOnInit() {
        if (this.formField) {
            this.formField._control = this.formFieldControl;
        }
    }
    ngAfterViewInit() {
        if (this.matPrefix) {
            this.to.prefix = this.matPrefix;
        }
        if (this.matSuffix) {
            this.to.prefix = this.matSuffix;
        }
    }
    ngOnDestroy() {
        if (this.formField) {
            delete this.formField._control;
        }
        this.stateChanges.complete();
    }
    setDescribedByIds(ids) { }
    onContainerClick(event) {
        this.field.focus = true;
        this.stateChanges.next();
    }
    get errorState() {
        const showError = this.options.showError(this);
        if (showError !== this._errorState) {
            this._errorState = showError;
            this.stateChanges.next();
        }
        return showError;
    }
    get controlType() {
        if (this.to.type) {
            return this.to.type;
        }
        if (this.field.type instanceof Type) {
            return this.field.type.constructor.name;
        }
        return this.field.type;
    }
    get focused() {
        return !!this.field.focus && !this.disabled;
    }
    get disabled() {
        return !!this.to.disabled;
    }
    get required() {
        return !!this.to.required;
    }
    get placeholder() {
        return this.to.placeholder || '';
    }
    get shouldPlaceholderFloat() {
        return this.shouldLabelFloat;
    }
    get value() {
        return this.formControl.value;
    }
    set value(value) {
        this.formControl.patchValue(value);
    }
    get ngControl() {
        return this.formControl;
    }
    get empty() {
        return this.value == null || this.value === '';
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get formField() {
        return this.field ? this.field['__formField__'] : null;
    }
};
__decorate([
    ViewChild('matPrefix'),
    __metadata("design:type", TemplateRef)
], FieldType.prototype, "matPrefix", void 0);
__decorate([
    ViewChild('matSuffix'),
    __metadata("design:type", TemplateRef)
], FieldType.prototype, "matSuffix", void 0);
FieldType = __decorate([
    Directive()
], FieldType);

/**
 * Generated bundle index. Do not edit.
 */

export { FieldType, FormlyMatFormFieldModule, FormlyWrapperFormField as ɵa };
//# sourceMappingURL=ngx-formly-material-form-field.js.map
