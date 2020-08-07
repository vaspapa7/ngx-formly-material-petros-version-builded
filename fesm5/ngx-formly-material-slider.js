import { __extends, __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';

var FormlySliderTypeComponent = /** @class */ (function (_super) {
    __extends(FormlySliderTypeComponent, _super);
    function FormlySliderTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                thumbLabel: false,
            },
        };
        return _this;
    }
    FormlySliderTypeComponent.prototype.onContainerClick = function (event) {
        this.slider.focus();
        _super.prototype.onContainerClick.call(this, event);
    };
    __decorate([
        ViewChild(MatSlider, { static: true }),
        __metadata("design:type", MatSlider)
    ], FormlySliderTypeComponent.prototype, "slider", void 0);
    FormlySliderTypeComponent = __decorate([
        Component({
            selector: 'formly-field-mat-slider',
            template: "\n    <mat-slider\n      [id]=\"id\"\n      [style.width]=\"'100%'\"\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [tabindex]=\"to.tabindex\"\n      [color]=\"to.color\"\n      [thumbLabel]=\"to.thumbLabel\"\n      [step]=\"to.step\"\n      [max]=\"to.max\"\n      [min]=\"to.min\"\n    >\n    </mat-slider>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlySliderTypeComponent);
    return FormlySliderTypeComponent;
}(FieldType));

var FormlyMatSliderModule = /** @class */ (function () {
    function FormlyMatSliderModule() {
    }
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
    return FormlyMatSliderModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyMatSliderModule, FormlySliderTypeComponent as ɵa };
//# sourceMappingURL=ngx-formly-material-slider.js.map
