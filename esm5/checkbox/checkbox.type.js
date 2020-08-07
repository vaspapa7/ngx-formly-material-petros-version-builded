import { __decorate, __extends, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
var FormlyFieldCheckbox = /** @class */ (function (_super) {
    __extends(FormlyFieldCheckbox, _super);
    function FormlyFieldCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                indeterminate: true,
                floatLabel: 'always',
                hideLabel: true,
                align: 'start',
                color: 'accent',
            },
        };
        return _this;
    }
    FormlyFieldCheckbox.prototype.onContainerClick = function (event) {
        this.checkbox.focus();
        _super.prototype.onContainerClick.call(this, event);
    };
    __decorate([
        ViewChild(MatCheckbox, { static: true }),
        __metadata("design:type", MatCheckbox)
    ], FormlyFieldCheckbox.prototype, "checkbox", void 0);
    FormlyFieldCheckbox = __decorate([
        Component({
            selector: 'formly-field-mat-checkbox',
            template: "\n    <mat-checkbox\n      [formControl]=\"formControl\"\n      [id]=\"id\"\n      [required]=\"to.required\"\n      [formlyAttributes]=\"field\"\n      [tabindex]=\"to.tabindex\"\n      [indeterminate]=\"to.indeterminate && formControl.value == null\"\n      [color]=\"to.color\"\n      [labelPosition]=\"to.align || to.labelPosition\"\n    >\n      {{ to.label }}\n      <span *ngIf=\"to.required && to.hideRequiredMarker !== true\" class=\"mat-form-field-required-marker\">*</span>\n    </mat-checkbox>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldCheckbox);
    return FormlyFieldCheckbox;
}(FieldType));
export { FormlyFieldCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL2NoZWNrYm94LyIsInNvdXJjZXMiOlsiY2hlY2tib3gudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQXFCekQ7SUFBeUMsdUNBQVM7SUFBbEQ7UUFBQSxxRUFpQkM7UUFmQyxvQkFBYyxHQUFHO1lBQ2YsZUFBZSxFQUFFO2dCQUNmLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLFFBQVE7YUFDaEI7U0FDRixDQUFDOztJQU1KLENBQUM7SUFKQyw4Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBaUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixpQkFBTSxnQkFBZ0IsWUFBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBZnlDO1FBQXpDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQVksV0FBVzt5REFBQztJQUR0RCxtQkFBbUI7UUFuQi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsUUFBUSxFQUFFLCtmQWNUO1lBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLG1CQUFtQixDQWlCL0I7SUFBRCwwQkFBQztDQUFBLEFBakJELENBQXlDLFNBQVMsR0FpQmpEO1NBakJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRDaGVja2JveCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLW1hdC1jaGVja2JveCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1jaGVja2JveFxuICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbcmVxdWlyZWRdPVwidG8ucmVxdWlyZWRcIlxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgW3RhYmluZGV4XT1cInRvLnRhYmluZGV4XCJcbiAgICAgIFtpbmRldGVybWluYXRlXT1cInRvLmluZGV0ZXJtaW5hdGUgJiYgZm9ybUNvbnRyb2wudmFsdWUgPT0gbnVsbFwiXG4gICAgICBbY29sb3JdPVwidG8uY29sb3JcIlxuICAgICAgW2xhYmVsUG9zaXRpb25dPVwidG8uYWxpZ24gfHwgdG8ubGFiZWxQb3NpdGlvblwiXG4gICAgPlxuICAgICAge3sgdG8ubGFiZWwgfX1cbiAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWQgJiYgdG8uaGlkZVJlcXVpcmVkTWFya2VyICE9PSB0cnVlXCIgY2xhc3M9XCJtYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXJcIj4qPC9zcGFuPlxuICAgIDwvbWF0LWNoZWNrYm94PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRDaGVja2JveCBleHRlbmRzIEZpZWxkVHlwZSB7XG4gIEBWaWV3Q2hpbGQoTWF0Q2hlY2tib3gsIHsgc3RhdGljOiB0cnVlIH0pIGNoZWNrYm94ITogTWF0Q2hlY2tib3g7XG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgaGlkZUZpZWxkVW5kZXJsaW5lOiB0cnVlLFxuICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcbiAgICAgIGZsb2F0TGFiZWw6ICdhbHdheXMnLFxuICAgICAgaGlkZUxhYmVsOiB0cnVlLFxuICAgICAgYWxpZ246ICdzdGFydCcsIC8vIHN0YXJ0IG9yIGVuZFxuICAgICAgY29sb3I6ICdhY2NlbnQnLCAvLyB3b3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2lzc3Vlcy8xODQ2NVxuICAgIH0sXG4gIH07XG5cbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tib3guZm9jdXMoKTtcbiAgICBzdXBlci5vbkNvbnRhaW5lckNsaWNrKGV2ZW50KTtcbiAgfVxufVxuIl19