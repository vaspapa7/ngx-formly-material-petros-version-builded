import { __extends, __spread, __decorate, __metadata } from 'tslib';
import { ViewChild, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatPseudoCheckboxModule } from '@angular/material/core';

var FormlyFieldSelect = /** @class */ (function (_super) {
    __extends(FormlyFieldSelect, _super);
    function FormlyFieldSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                options: [],
                compareWith: function (o1, o2) {
                    return o1 === o2;
                },
            },
        };
        return _this;
    }
    FormlyFieldSelect.prototype.getSelectAllState = function (options) {
        if (this.empty || this.value.length === 0) {
            return '';
        }
        return this.value.length !== this.getSelectAllValue(options).length ? 'indeterminate' : 'checked';
    };
    FormlyFieldSelect.prototype.toggleSelectAll = function (options) {
        var selectAllValue = this.getSelectAllValue(options);
        this.formControl.setValue(!this.value || this.value.length !== selectAllValue.length ? selectAllValue : []);
    };
    FormlyFieldSelect.prototype.change = function ($event) {
        if (this.to.change) {
            this.to.change(this.field, $event);
        }
    };
    FormlyFieldSelect.prototype._getAriaLabelledby = function () {
        if (this.to.attributes && this.to.attributes['aria-labelledby']) {
            return this.to.attributes['aria-labelledby'];
        }
        if (this.formField && this.formField._labelId) {
            return this.formField._labelId;
        }
        return null;
    };
    FormlyFieldSelect.prototype.getSelectAllValue = function (options) {
        if (!this.selectAllValue || options !== this.selectAllValue.options) {
            var flatOptions_1 = [];
            options.forEach(function (o) { return (o.group ? flatOptions_1.push.apply(flatOptions_1, __spread(o.group)) : flatOptions_1.push(o)); });
            this.selectAllValue = {
                options: options,
                value: flatOptions_1.map(function (o) { return o.value; }),
            };
        }
        return this.selectAllValue.value;
    };
    __decorate([
        ViewChild(MatSelect, { static: true }),
        __metadata("design:type", MatSelect)
    ], FormlyFieldSelect.prototype, "formFieldControl", void 0);
    FormlyFieldSelect = __decorate([
        Component({
            selector: 'formly-field-mat-select',
            template: "\n    <ng-template #selectAll let-selectOptions=\"selectOptions\">\n      <mat-option (click)=\"toggleSelectAll(selectOptions)\">\n        <mat-pseudo-checkbox class=\"mat-option-pseudo-checkbox\" [state]=\"getSelectAllState(selectOptions)\">\n        </mat-pseudo-checkbox>\n        {{ to.selectAllOption }}\n      </mat-option>\n    </ng-template>\n\n    <mat-select\n      [id]=\"id\"\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [placeholder]=\"to.placeholder\"\n      [tabindex]=\"to.tabindex\"\n      [required]=\"to.required\"\n      [compareWith]=\"to.compareWith\"\n      [multiple]=\"to.multiple\"\n      (selectionChange)=\"change($event)\"\n      [errorStateMatcher]=\"errorStateMatcher\"\n      [aria-labelledby]=\"_getAriaLabelledby()\"\n      [disableOptionCentering]=\"to.disableOptionCentering\"\n    >\n      <ng-container *ngIf=\"to.options | formlySelectOptions: field | async as selectOptions\">\n        <ng-container\n          *ngIf=\"to.multiple && to.selectAllOption\"\n          [ngTemplateOutlet]=\"selectAll\"\n          [ngTemplateOutletContext]=\"{ selectOptions: selectOptions }\"\n        >\n        </ng-container>\n        <ng-container *ngFor=\"let item of selectOptions\">\n          <mat-optgroup *ngIf=\"item.group\" [label]=\"item.label\">\n            <mat-option *ngFor=\"let child of item.group\" [value]=\"child.value\" [disabled]=\"child.disabled\">\n              {{ child.label }}\n            </mat-option>\n          </mat-optgroup>\n          <mat-option *ngIf=\"!item.group\" [value]=\"item.value\" [disabled]=\"item.disabled\">{{ item.label }}</mat-option>\n        </ng-container>\n      </ng-container>\n    </mat-select>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldSelect);
    return FormlyFieldSelect;
}(FieldType));

var FormlyMatSelectModule = /** @class */ (function () {
    function FormlyMatSelectModule() {
    }
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
    return FormlyMatSelectModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldSelect, FormlyMatSelectModule };
//# sourceMappingURL=ngx-formly-material-select.js.map
