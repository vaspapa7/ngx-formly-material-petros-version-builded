import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
let FormlyFieldCheckbox = class FormlyFieldCheckbox extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                indeterminate: true,
                floatLabel: 'always',
                hideLabel: true,
                align: 'start',
                color: 'accent',
            },
        };
    }
    onContainerClick(event) {
        this.checkbox.focus();
        super.onContainerClick(event);
    }
};
__decorate([
    ViewChild(MatCheckbox, { static: true }),
    __metadata("design:type", MatCheckbox)
], FormlyFieldCheckbox.prototype, "checkbox", void 0);
FormlyFieldCheckbox = __decorate([
    Component({
        selector: 'formly-field-mat-checkbox',
        template: `
    <mat-checkbox
      [formControl]="formControl"
      [id]="id"
      [required]="to.required"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex"
      [indeterminate]="to.indeterminate && formControl.value == null"
      [color]="to.color"
      [labelPosition]="to.align || to.labelPosition"
    >
      {{ to.label }}
      <span *ngIf="to.required && to.hideRequiredMarker !== true" class="mat-form-field-required-marker">*</span>
    </mat-checkbox>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldCheckbox);
export { FormlyFieldCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL2NoZWNrYm94LyIsInNvdXJjZXMiOlsiY2hlY2tib3gudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQXFCekQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBb0IsU0FBUSxTQUFTO0lBQWxEOztRQUVFLG1CQUFjLEdBQUc7WUFDZixlQUFlLEVBQUU7Z0JBQ2Ysa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixTQUFTLEVBQUUsSUFBSTtnQkFDZixLQUFLLEVBQUUsT0FBTztnQkFDZCxLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGLENBQUM7SUFNSixDQUFDO0lBSkMsZ0JBQWdCLENBQUMsS0FBaUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGLENBQUE7QUFoQjJDO0lBQXpDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQVksV0FBVztxREFBQztBQUR0RCxtQkFBbUI7SUFuQi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLG1CQUFtQixDQWlCL0I7U0FqQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdENoZWNrYm94IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbWF0LWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWNoZWNrYm94XG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW2lkXT1cImlkXCJcbiAgICAgIFtyZXF1aXJlZF09XCJ0by5yZXF1aXJlZFwiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbdGFiaW5kZXhdPVwidG8udGFiaW5kZXhcIlxuICAgICAgW2luZGV0ZXJtaW5hdGVdPVwidG8uaW5kZXRlcm1pbmF0ZSAmJiBmb3JtQ29udHJvbC52YWx1ZSA9PSBudWxsXCJcbiAgICAgIFtjb2xvcl09XCJ0by5jb2xvclwiXG4gICAgICBbbGFiZWxQb3NpdGlvbl09XCJ0by5hbGlnbiB8fCB0by5sYWJlbFBvc2l0aW9uXCJcbiAgICA+XG4gICAgICB7eyB0by5sYWJlbCB9fVxuICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZCAmJiB0by5oaWRlUmVxdWlyZWRNYXJrZXIgIT09IHRydWVcIiBjbGFzcz1cIm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlclwiPio8L3NwYW4+XG4gICAgPC9tYXQtY2hlY2tib3g+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZENoZWNrYm94IGV4dGVuZHMgRmllbGRUeXBlIHtcbiAgQFZpZXdDaGlsZChNYXRDaGVja2JveCwgeyBzdGF0aWM6IHRydWUgfSkgY2hlY2tib3ghOiBNYXRDaGVja2JveDtcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICBoaWRlRmllbGRVbmRlcmxpbmU6IHRydWUsXG4gICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgZmxvYXRMYWJlbDogJ2Fsd2F5cycsXG4gICAgICBoaWRlTGFiZWw6IHRydWUsXG4gICAgICBhbGlnbjogJ3N0YXJ0JywgLy8gc3RhcnQgb3IgZW5kXG4gICAgICBjb2xvcjogJ2FjY2VudCcsIC8vIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvaXNzdWVzLzE4NDY1XG4gICAgfSxcbiAgfTtcblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2JveC5mb2N1cygpO1xuICAgIHN1cGVyLm9uQ29udGFpbmVyQ2xpY2soZXZlbnQpO1xuICB9XG59XG4iXX0=