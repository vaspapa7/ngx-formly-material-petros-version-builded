var FormlyFieldTextArea_1;
import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { FieldType } from '@ngx-formly/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
let FormlyFieldTextArea = FormlyFieldTextArea_1 = class FormlyFieldTextArea extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                cols: 1,
                rows: 1,
            },
        };
    }
};
__decorate([
    ViewChild(MatInput, { static: true }),
    __metadata("design:type", MatInput)
], FormlyFieldTextArea.prototype, "formFieldControl", void 0);
FormlyFieldTextArea = FormlyFieldTextArea_1 = __decorate([
    Component({
        selector: 'formly-field-mat-textarea',
        template: `
    <textarea
      matInput
      [id]="id"
      [readonly]="to.readonly"
      [required]="to.required"
      [formControl]="formControl"
      [errorStateMatcher]="errorStateMatcher"
      [cols]="to.cols"
      [rows]="to.rows"
      [formlyAttributes]="field"
      [placeholder]="to.placeholder"
      [tabindex]="to.tabindex"
      [cdkTextareaAutosize]="to.autosize"
      [cdkAutosizeMinRows]="to.autosizeMinRows"
      [cdkAutosizeMaxRows]="to.autosizeMaxRows"
      [class.cdk-textarea-autosize]="to.autosize"
    >
    </textarea>
  `,
        providers: [
            // fix for https://github.com/ngx-formly/ngx-formly/issues/1688
            // rely on formControl value instead of elementRef which return empty value in Firefox.
            { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: FormlyFieldTextArea_1 },
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldTextArea);
export { FormlyFieldTextArea };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL3RleHRhcmVhLyIsInNvdXJjZXMiOlsidGV4dGFyZWEudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUErQm5FLElBQWEsbUJBQW1CLDJCQUFoQyxNQUFhLG1CQUFvQixTQUFRLFNBQVM7SUFBbEQ7O1FBRUUsbUJBQWMsR0FBRztZQUNmLGVBQWUsRUFBRTtnQkFDZixJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsQ0FBQzthQUNSO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FBQSxDQUFBO0FBUHdDO0lBQXRDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQW9CLFFBQVE7NkRBQUM7QUFEeEQsbUJBQW1CO0lBN0IvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDtRQUNELFNBQVMsRUFBRTtZQUNULCtEQUErRDtZQUMvRCx1RkFBdUY7WUFDdkYsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsV0FBVyxFQUFFLHFCQUFtQixFQUFFO1NBQ3hFO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLG1CQUFtQixDQVEvQjtTQVJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTUFUX0lOUFVUX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbWF0LXRleHRhcmVhJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGV4dGFyZWFcbiAgICAgIG1hdElucHV0XG4gICAgICBbaWRdPVwiaWRcIlxuICAgICAgW3JlYWRvbmx5XT1cInRvLnJlYWRvbmx5XCJcbiAgICAgIFtyZXF1aXJlZF09XCJ0by5yZXF1aXJlZFwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW2Vycm9yU3RhdGVNYXRjaGVyXT1cImVycm9yU3RhdGVNYXRjaGVyXCJcbiAgICAgIFtjb2xzXT1cInRvLmNvbHNcIlxuICAgICAgW3Jvd3NdPVwidG8ucm93c1wiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwidG8ucGxhY2Vob2xkZXJcIlxuICAgICAgW3RhYmluZGV4XT1cInRvLnRhYmluZGV4XCJcbiAgICAgIFtjZGtUZXh0YXJlYUF1dG9zaXplXT1cInRvLmF1dG9zaXplXCJcbiAgICAgIFtjZGtBdXRvc2l6ZU1pblJvd3NdPVwidG8uYXV0b3NpemVNaW5Sb3dzXCJcbiAgICAgIFtjZGtBdXRvc2l6ZU1heFJvd3NdPVwidG8uYXV0b3NpemVNYXhSb3dzXCJcbiAgICAgIFtjbGFzcy5jZGstdGV4dGFyZWEtYXV0b3NpemVdPVwidG8uYXV0b3NpemVcIlxuICAgID5cbiAgICA8L3RleHRhcmVhPlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBmaXggZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3gtZm9ybWx5L25neC1mb3JtbHkvaXNzdWVzLzE2ODhcbiAgICAvLyByZWx5IG9uIGZvcm1Db250cm9sIHZhbHVlIGluc3RlYWQgb2YgZWxlbWVudFJlZiB3aGljaCByZXR1cm4gZW1wdHkgdmFsdWUgaW4gRmlyZWZveC5cbiAgICB7IHByb3ZpZGU6IE1BVF9JTlBVVF9WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IEZvcm1seUZpZWxkVGV4dEFyZWEgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkVGV4dEFyZWEgZXh0ZW5kcyBGaWVsZFR5cGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKE1hdElucHV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBmb3JtRmllbGRDb250cm9sITogTWF0SW5wdXQ7XG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgY29sczogMSxcbiAgICAgIHJvd3M6IDEsXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==