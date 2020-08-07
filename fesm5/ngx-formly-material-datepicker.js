import { __extends, __decorate, __metadata } from 'tslib';
import { ViewChild, TemplateRef, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerModule } from '@angular/material/datepicker';

var FormlyDatepickerTypeComponent = /** @class */ (function (_super) {
    __extends(FormlyDatepickerTypeComponent, _super);
    function FormlyDatepickerTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                datepickerOptions: {
                    startView: 'month',
                    datepickerTogglePosition: 'suffix',
                    dateInput: function () { },
                    dateChange: function () { },
                    monthSelected: function () { },
                    yearSelected: function () { },
                },
            },
        };
        return _this;
    }
    FormlyDatepickerTypeComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.to[this.to.datepickerOptions.datepickerTogglePosition] = this.datepickerToggle;
        // temporary fix for https://github.com/angular/material2/issues/6728
        this.datepickerInput._formField = this.formField;
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
            template: "\n    <input\n      matInput\n      [id]=\"id\"\n      [errorStateMatcher]=\"errorStateMatcher\"\n      [formControl]=\"formControl\"\n      [matDatepicker]=\"picker\"\n      [matDatepickerFilter]=\"to.datepickerOptions.filter\"\n      [max]=\"to.datepickerOptions.max\"\n      [min]=\"to.datepickerOptions.min\"\n      [formlyAttributes]=\"field\"\n      [placeholder]=\"to.placeholder\"\n      [tabindex]=\"to.tabindex\"\n      [readonly]=\"to.readonly\"\n      [required]=\"to.required\"\n      (dateInput)=\"to.datepickerOptions.dateInput(field, $event)\"\n      (dateChange)=\"to.datepickerOptions.dateChange(field, $event)\"\n    />\n    <ng-template #datepickerToggle>\n      <mat-datepicker-toggle [for]=\"picker\"></mat-datepicker-toggle>\n    </ng-template>\n    <mat-datepicker\n      #picker\n      [color]=\"to.color\"\n      [dateClass]=\"to.datepickerOptions.dateClass\"\n      [disabled]=\"to.datepickerOptions.disabled\"\n      [opened]=\"to.datepickerOptions.opened\"\n      [panelClass]=\"to.datepickerOptions.panelClass\"\n      [startAt]=\"to.datepickerOptions.startAt\"\n      [startView]=\"to.datepickerOptions.startView\"\n      [touchUi]=\"to.datepickerOptions.touchUi\"\n      (monthSelected)=\"to.datepickerOptions.monthSelected(field, $event, picker)\"\n      (yearSelected)=\"to.datepickerOptions.yearSelected(field, $event, picker)\"\n    >\n    </mat-datepicker>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyDatepickerTypeComponent);
    return FormlyDatepickerTypeComponent;
}(FieldType));

var FormlyMatDatepickerModule = /** @class */ (function () {
    function FormlyMatDatepickerModule() {
    }
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
    return FormlyMatDatepickerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyMatDatepickerModule, FormlyDatepickerTypeComponent as ɵa };
//# sourceMappingURL=ngx-formly-material-datepicker.js.map
