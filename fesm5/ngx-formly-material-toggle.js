import { __extends, __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';

var FormlyToggleTypeComponent = /** @class */ (function (_super) {
    __extends(FormlyToggleTypeComponent, _super);
    function FormlyToggleTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                hideLabel: true,
            },
        };
        return _this;
    }
    FormlyToggleTypeComponent.prototype.onContainerClick = function (event) {
        this.slideToggle.focus();
        _super.prototype.onContainerClick.call(this, event);
    };
    __decorate([
        ViewChild(MatSlideToggle, { static: true }),
        __metadata("design:type", MatSlideToggle)
    ], FormlyToggleTypeComponent.prototype, "slideToggle", void 0);
    FormlyToggleTypeComponent = __decorate([
        Component({
            selector: 'formly-field-mat-toggle',
            template: "\n    <mat-slide-toggle\n      [id]=\"id\"\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [color]=\"to.color\"\n      [tabindex]=\"to.tabindex\"\n      [required]=\"to.required\"\n    >\n      {{ to.label }}\n    </mat-slide-toggle>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyToggleTypeComponent);
    return FormlyToggleTypeComponent;
}(FieldType));

var FormlyMatToggleModule = /** @class */ (function () {
    function FormlyMatToggleModule() {
    }
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
    return FormlyMatToggleModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyMatToggleModule, FormlyToggleTypeComponent as ɵa };
//# sourceMappingURL=ngx-formly-material-toggle.js.map
