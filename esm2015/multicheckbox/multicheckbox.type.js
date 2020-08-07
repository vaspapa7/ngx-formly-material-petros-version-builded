import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChildren, QueryList } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
let FormlyFieldMultiCheckbox = class FormlyFieldMultiCheckbox extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                options: [],
                color: 'accent',
            },
        };
    }
    onChange(value, checked) {
        if (this.to.type === 'array') {
            this.formControl.patchValue(checked
                ? [...(this.formControl.value || []), value]
                : [...(this.formControl.value || [])].filter((o) => o !== value));
        }
        else {
            this.formControl.patchValue(Object.assign(Object.assign({}, this.formControl.value), { [value]: checked }));
        }
        this.formControl.markAsTouched();
    }
    onContainerClick(event) {
        if (this.checkboxes.length) {
            this.checkboxes.first.focus();
        }
        super.onContainerClick(event);
    }
    isChecked(option) {
        const value = this.formControl.value;
        return value && (this.to.type === 'array' ? value.indexOf(option.value) !== -1 : value[option.value]);
    }
};
__decorate([
    ViewChildren(MatCheckbox),
    __metadata("design:type", QueryList)
], FormlyFieldMultiCheckbox.prototype, "checkboxes", void 0);
FormlyFieldMultiCheckbox = __decorate([
    Component({
        selector: 'formly-field-mat-multicheckbox',
        template: `
    <ng-container *ngFor="let option of to.options | formlySelectOptions: field | async; let i = index">
      <mat-checkbox
        [id]="id + '_' + i"
        [formlyAttributes]="field"
        [tabindex]="to.tabindex"
        [color]="to.color"
        [labelPosition]="to.labelPosition"
        [checked]="isChecked(option)"
        [disabled]="formControl.disabled"
        (change)="onChange(option.value, $event.checked)"
      >
        {{ option.label }}
      </mat-checkbox>
    </ng-container>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldMultiCheckbox);
export { FormlyFieldMultiCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGljaGVja2JveC50eXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvbXVsdGljaGVja2JveC8iLCJzb3VyY2VzIjpbIm11bHRpY2hlY2tib3gudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFzQnpELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXlCLFNBQVEsU0FBUztJQUF2RDs7UUFHRSxtQkFBYyxHQUFHO1lBQ2YsZUFBZSxFQUFFO2dCQUNmLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixPQUFPLEVBQUUsRUFBRTtnQkFDWCxLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGLENBQUM7SUEyQkosQ0FBQztJQXpCQyxRQUFRLENBQUMsS0FBVSxFQUFFLE9BQWdCO1FBQ25DLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUN6QixPQUFPO2dCQUNMLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7Z0JBQzVDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUNuRSxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxpQ0FBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sSUFBRyxDQUFDO1NBQzlFO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBaUI7UUFDaEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMvQjtRQUNELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQVc7UUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFFckMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztDQUNGLENBQUE7QUFwQzRCO0lBQTFCLFlBQVksQ0FBQyxXQUFXLENBQUM7OEJBQWMsU0FBUzs0REFBYztBQURwRCx3QkFBd0I7SUFwQnBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQ0FBZ0M7UUFDMUMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDtRQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyx3QkFBd0IsQ0FxQ3BDO1NBckNZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdENoZWNrYm94IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbWF0LW11bHRpY2hlY2tib3gnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiB0by5vcHRpb25zIHwgZm9ybWx5U2VsZWN0T3B0aW9uczogZmllbGQgfCBhc3luYzsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgPG1hdC1jaGVja2JveFxuICAgICAgICBbaWRdPVwiaWQgKyAnXycgKyBpXCJcbiAgICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgICBbdGFiaW5kZXhdPVwidG8udGFiaW5kZXhcIlxuICAgICAgICBbY29sb3JdPVwidG8uY29sb3JcIlxuICAgICAgICBbbGFiZWxQb3NpdGlvbl09XCJ0by5sYWJlbFBvc2l0aW9uXCJcbiAgICAgICAgW2NoZWNrZWRdPVwiaXNDaGVja2VkKG9wdGlvbilcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2wuZGlzYWJsZWRcIlxuICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKG9wdGlvbi52YWx1ZSwgJGV2ZW50LmNoZWNrZWQpXCJcbiAgICAgID5cbiAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgICA8L21hdC1jaGVja2JveD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkTXVsdGlDaGVja2JveCBleHRlbmRzIEZpZWxkVHlwZSB7XG4gIEBWaWV3Q2hpbGRyZW4oTWF0Q2hlY2tib3gpIGNoZWNrYm94ZXMhOiBRdWVyeUxpc3Q8TWF0Q2hlY2tib3g+O1xuXG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgaGlkZUZpZWxkVW5kZXJsaW5lOiB0cnVlLFxuICAgICAgZmxvYXRMYWJlbDogJ2Fsd2F5cycsXG4gICAgICBvcHRpb25zOiBbXSxcbiAgICAgIGNvbG9yOiAnYWNjZW50JywgLy8gd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9pc3N1ZXMvMTg0NjVcbiAgICB9LFxuICB9O1xuXG4gIG9uQ2hhbmdlKHZhbHVlOiBhbnksIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy50by50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sLnBhdGNoVmFsdWUoXG4gICAgICAgIGNoZWNrZWRcbiAgICAgICAgICA/IFsuLi4odGhpcy5mb3JtQ29udHJvbC52YWx1ZSB8fCBbXSksIHZhbHVlXVxuICAgICAgICAgIDogWy4uLih0aGlzLmZvcm1Db250cm9sLnZhbHVlIHx8IFtdKV0uZmlsdGVyKChvKSA9PiBvICE9PSB2YWx1ZSksXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sLnBhdGNoVmFsdWUoeyAuLi50aGlzLmZvcm1Db250cm9sLnZhbHVlLCBbdmFsdWVdOiBjaGVja2VkIH0pO1xuICAgIH1cbiAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgfVxuXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGVja2JveGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jaGVja2JveGVzLmZpcnN0LmZvY3VzKCk7XG4gICAgfVxuICAgIHN1cGVyLm9uQ29udGFpbmVyQ2xpY2soZXZlbnQpO1xuICB9XG5cbiAgaXNDaGVja2VkKG9wdGlvbjogYW55KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xuXG4gICAgcmV0dXJuIHZhbHVlICYmICh0aGlzLnRvLnR5cGUgPT09ICdhcnJheScgPyB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT09IC0xIDogdmFsdWVbb3B0aW9uLnZhbHVlXSk7XG4gIH1cbn1cbiJdfQ==