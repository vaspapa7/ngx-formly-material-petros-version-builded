import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatInput } from '@angular/material/input';
let FormlyFieldNativeSelect = class FormlyFieldNativeSelect extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                options: [],
            },
        };
    }
};
__decorate([
    ViewChild(MatInput, { static: true }),
    __metadata("design:type", MatInput)
], FormlyFieldNativeSelect.prototype, "formFieldControl", void 0);
FormlyFieldNativeSelect = __decorate([
    Component({
        selector: 'formly-field-mat-native-select',
        template: `
    <select
      matNativeControl
      [id]="id"
      [readonly]="to.readonly"
      [required]="to.required"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
      <option *ngIf="to.placeholder" [ngValue]="undefined">{{ to.placeholder }}</option>
      <ng-container *ngIf="to.options | formlySelectOptions: field | async as opts">
        <ng-container *ngIf="to._flatOptions; else grouplist">
          <ng-container *ngFor="let opt of opts">
            <option [ngValue]="opt.value" [disabled]="opt.disabled">{{ opt.label }}</option>
          </ng-container>
        </ng-container>

        <ng-template #grouplist>
          <ng-container *ngFor="let opt of opts">
            <option *ngIf="!opt.group; else optgroup" [ngValue]="opt.value" [disabled]="opt.disabled">{{
              opt.label
            }}</option>
            <ng-template #optgroup>
              <optgroup [label]="opt.label">
                <option *ngFor="let child of opt.group" [ngValue]="child.value" [disabled]="child.disabled">
                  {{ child.label }}
                </option>
              </optgroup>
            </ng-template>
          </ng-container>
        </ng-template>
      </ng-container>
    </select>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldNativeSelect);
export { FormlyFieldNativeSelect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNlbGVjdC50eXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvbmF0aXZlLXNlbGVjdC8iLCJzb3VyY2VzIjpbIm5hdGl2ZS1zZWxlY3QudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXlDbkQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBd0IsU0FBUSxTQUFTO0lBQXREOztRQUVFLG1CQUFjLEdBQUc7WUFDZixlQUFlLEVBQUU7Z0JBQ2YsT0FBTyxFQUFFLEVBQUU7YUFDWjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQUEsQ0FBQTtBQU53QztJQUF0QyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUFvQixRQUFRO2lFQUFDO0FBRHhELHVCQUF1QjtJQXZDbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdDQUFnQztRQUMxQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ1Q7UUFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csdUJBQXVCLENBT25DO1NBUFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbWF0LW5hdGl2ZS1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWxlY3RcbiAgICAgIG1hdE5hdGl2ZUNvbnRyb2xcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbcmVhZG9ubHldPVwidG8ucmVhZG9ubHlcIlxuICAgICAgW3JlcXVpcmVkXT1cInRvLnJlcXVpcmVkXCJcbiAgICAgIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJlcnJvclN0YXRlTWF0Y2hlclwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgID5cbiAgICAgIDxvcHRpb24gKm5nSWY9XCJ0by5wbGFjZWhvbGRlclwiIFtuZ1ZhbHVlXT1cInVuZGVmaW5lZFwiPnt7IHRvLnBsYWNlaG9sZGVyIH19PC9vcHRpb24+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidG8ub3B0aW9ucyB8IGZvcm1seVNlbGVjdE9wdGlvbnM6IGZpZWxkIHwgYXN5bmMgYXMgb3B0c1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidG8uX2ZsYXRPcHRpb25zOyBlbHNlIGdyb3VwbGlzdFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdCBvZiBvcHRzXCI+XG4gICAgICAgICAgICA8b3B0aW9uIFtuZ1ZhbHVlXT1cIm9wdC52YWx1ZVwiIFtkaXNhYmxlZF09XCJvcHQuZGlzYWJsZWRcIj57eyBvcHQubGFiZWwgfX08L29wdGlvbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNncm91cGxpc3Q+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0IG9mIG9wdHNcIj5cbiAgICAgICAgICAgIDxvcHRpb24gKm5nSWY9XCIhb3B0Lmdyb3VwOyBlbHNlIG9wdGdyb3VwXCIgW25nVmFsdWVdPVwib3B0LnZhbHVlXCIgW2Rpc2FibGVkXT1cIm9wdC5kaXNhYmxlZFwiPnt7XG4gICAgICAgICAgICAgIG9wdC5sYWJlbFxuICAgICAgICAgICAgfX08L29wdGlvbj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjb3B0Z3JvdXA+XG4gICAgICAgICAgICAgIDxvcHRncm91cCBbbGFiZWxdPVwib3B0LmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY2hpbGQgb2Ygb3B0Lmdyb3VwXCIgW25nVmFsdWVdPVwiY2hpbGQudmFsdWVcIiBbZGlzYWJsZWRdPVwiY2hpbGQuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGNoaWxkLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvb3B0Z3JvdXA+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9zZWxlY3Q+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZE5hdGl2ZVNlbGVjdCBleHRlbmRzIEZpZWxkVHlwZSB7XG4gIEBWaWV3Q2hpbGQoTWF0SW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIGZvcm1GaWVsZENvbnRyb2whOiBNYXRJbnB1dDtcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICBvcHRpb25zOiBbXSxcbiAgICB9LFxuICB9O1xufVxuIl19