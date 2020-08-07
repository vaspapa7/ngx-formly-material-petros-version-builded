import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild, OnInit, OnDestroy, Renderer2, AfterViewInit, AfterContentChecked, TemplateRef, ElementRef, ViewContainerRef, } from '@angular/core';
import { ɵdefineHiddenProp as defineHiddenProp, ɵobserve as observe, FieldWrapper, } from '@ngx-formly/core';
import { MatFormField } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
let FormlyWrapperFormField = class FormlyWrapperFormField extends FieldWrapper {
    constructor(renderer, elementRef, focusMonitor) {
        super();
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.initialGapCalculated = false;
    }
    ngOnInit() {
        defineHiddenProp(this.field, '__formField__', this.formField);
        ['prefix', 'suffix'].forEach((type) => observe(this.field, ['templateOptions', type], ({ currentValue }) => currentValue &&
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
export { FormlyWrapperFormField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvZm9ybS1maWVsZC8iLCJzb3VyY2VzIjpbImZvcm0tZmllbGQud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGFBQWEsRUFDYixtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLFVBQVUsRUFDVixnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGlCQUFpQixJQUFJLGdCQUFnQixFQUNyQyxRQUFRLElBQUksT0FBTyxFQUVuQixZQUFZLEdBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBMkNqRCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUF1QixTQUFRLFlBQWtDO0lBUTVFLFlBQW9CLFFBQW1CLEVBQVUsVUFBc0IsRUFBVSxZQUEwQjtRQUN6RyxLQUFLLEVBQUUsQ0FBQztRQURVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGbkcseUJBQW9CLEdBQUcsS0FBSyxDQUFDO0lBSXJDLENBQUM7SUFFRCxRQUFRO1FBQ04sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ3BDLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxFQUNWLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQ3pCLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQ25CLFlBQVk7WUFDWixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQ0wsQ0FDRixDQUFDO1FBRUYsNERBQTREO1FBQzVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFnQixDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDM0UsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDakQsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELGVBQWU7UUFDYixxRUFBcUU7UUFDckUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7WUFDbEYsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDN0csZ0JBQWdCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDOUY7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRixDQUFBOztZQXBEK0IsU0FBUztZQUFzQixVQUFVO1lBQXdCLFlBQVk7O0FBTnBDO0lBQXRFLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQWtCLGdCQUFnQjs4REFBQztBQUM5RDtJQUExQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUFhLFlBQVk7eURBQUM7QUFIekQsc0JBQXNCO0lBbkNsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsK0JBQStCO1FBQ3pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJUO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FTOEIsU0FBUyxFQUFzQixVQUFVLEVBQXdCLFlBQVk7R0FSaEcsc0JBQXNCLENBNERsQztTQTVEWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3Q2hpbGQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXQsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIFRlbXBsYXRlUmVmLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIMm1ZGVmaW5lSGlkZGVuUHJvcCBhcyBkZWZpbmVIaWRkZW5Qcm9wLFxuICDJtW9ic2VydmUgYXMgb2JzZXJ2ZSxcbiAgRm9ybWx5RmllbGRDb25maWcsXG4gIEZpZWxkV3JhcHBlcixcbn0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcblxuaW50ZXJmYWNlIE1hdEZvcm1seUZpZWxkQ29uZmlnIGV4dGVuZHMgRm9ybWx5RmllbGRDb25maWcge1xuICBfbWF0cHJlZml4OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBfbWF0c3VmZml4OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBfX2Zvcm1GaWVsZF9fOiBGb3JtbHlXcmFwcGVyRm9ybUZpZWxkO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktd3JhcHBlci1tYXQtZm9ybS1maWVsZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSBmaXggaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3B1bGwvNzA4MyBieSBzZXR0aW5nIHdpZHRoIHRvIDEwMCUgLS0+XG4gICAgPG1hdC1mb3JtLWZpZWxkXG4gICAgICBbaGlkZVJlcXVpcmVkTWFya2VyXT1cInRydWVcIlxuICAgICAgW2Zsb2F0TGFiZWxdPVwidG8uZmxvYXRMYWJlbFwiXG4gICAgICBbYXBwZWFyYW5jZV09XCJ0by5hcHBlYXJhbmNlXCJcbiAgICAgIFtjb2xvcl09XCJ0by5jb2xvclwiXG4gICAgICBbc3R5bGUud2lkdGhdPVwiJzEwMCUnXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICNmaWVsZENvbXBvbmVudD48L25nLWNvbnRhaW5lcj5cbiAgICAgIDxtYXQtbGFiZWwgKm5nSWY9XCJ0by5sYWJlbCAmJiB0by5oaWRlTGFiZWwgIT09IHRydWVcIj5cbiAgICAgICAge3sgdG8ubGFiZWwgfX1cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZCAmJiB0by5oaWRlUmVxdWlyZWRNYXJrZXIgIT09IHRydWVcIiBjbGFzcz1cIm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlclwiPio8L3NwYW4+XG4gICAgICA8L21hdC1sYWJlbD5cblxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRQcmVmaXg+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmaWVsZC5fbWF0cHJlZml4XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRTdWZmaXg+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmaWVsZC5fbWF0c3VmZml4XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPCEtLSBmaXggaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2lzc3Vlcy83NzM3IGJ5IHNldHRpbmcgaWQgdG8gbnVsbCAgLS0+XG4gICAgICA8bWF0LWVycm9yIFtpZF09XCJudWxsXCI+XG4gICAgICAgIDxmb3JtbHktdmFsaWRhdGlvbi1tZXNzYWdlIFtmaWVsZF09XCJmaWVsZFwiPjwvZm9ybWx5LXZhbGlkYXRpb24tbWVzc2FnZT5cbiAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgPCEtLSBmaXggaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2lzc3Vlcy83NzM3IGJ5IHNldHRpbmcgaWQgdG8gbnVsbCAgLS0+XG4gICAgICA8bWF0LWhpbnQgKm5nSWY9XCJ0by5kZXNjcmlwdGlvblwiIFtpZF09XCJudWxsXCI+e3sgdG8uZGVzY3JpcHRpb24gfX08L21hdC1oaW50PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlXcmFwcGVyRm9ybUZpZWxkIGV4dGVuZHMgRmllbGRXcmFwcGVyPE1hdEZvcm1seUZpZWxkQ29uZmlnPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQFZpZXdDaGlsZCgnZmllbGRDb21wb25lbnQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBmaWVsZENvbXBvbmVudCE6IFZpZXdDb250YWluZXJSZWY7XG4gIEBWaWV3Q2hpbGQoTWF0Rm9ybUZpZWxkLCB7IHN0YXRpYzogdHJ1ZSB9KSBmb3JtRmllbGQhOiBNYXRGb3JtRmllbGQ7XG4gIGZpZWxkITogTWF0Rm9ybWx5RmllbGRDb25maWc7XG5cbiAgcHJpdmF0ZSBpbml0aWFsR2FwQ2FsY3VsYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGRlZmluZUhpZGRlblByb3AodGhpcy5maWVsZCwgJ19fZm9ybUZpZWxkX18nLCB0aGlzLmZvcm1GaWVsZCk7XG4gICAgWydwcmVmaXgnLCAnc3VmZml4J10uZm9yRWFjaCgodHlwZSkgPT5cbiAgICAgIG9ic2VydmU8VGVtcGxhdGVSZWY8YW55Pj4oXG4gICAgICAgIHRoaXMuZmllbGQsXG4gICAgICAgIFsndGVtcGxhdGVPcHRpb25zJywgdHlwZV0sXG4gICAgICAgICh7IGN1cnJlbnRWYWx1ZSB9KSA9PlxuICAgICAgICAgIGN1cnJlbnRWYWx1ZSAmJlxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgKDxhbnk+dGhpcy5maWVsZClbYF9tYXQke3R5cGV9YF0gPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGV0ZWN0Q2hhbmdlcyEodGhpcy5maWVsZCk7XG4gICAgICAgICAgfSksXG4gICAgICApLFxuICAgICk7XG5cbiAgICAvLyBmaXggZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9pc3N1ZXMvMTE0MzdcbiAgICBpZiAodGhpcy5maWVsZC5oaWRlICYmIHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zIS5hcHBlYXJhbmNlID09PSAnb3V0bGluZScpIHtcbiAgICAgIHRoaXMuaW5pdGlhbEdhcENhbGN1bGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoKG9yaWdpbikgPT4ge1xuICAgICAgaWYgKCFvcmlnaW4gJiYgdGhpcy5maWVsZC5mb2N1cykge1xuICAgICAgICB0aGlzLmZpZWxkLmZvY3VzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxHYXBDYWxjdWxhdGVkIHx8IHRoaXMuZmllbGQuaGlkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybUZpZWxkLnVwZGF0ZU91dGxpbmVHYXAoKTtcbiAgICB0aGlzLmluaXRpYWxHYXBDYWxjdWxhdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyB0ZW1wb3JhcnkgZml4IGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvaXNzdWVzLzc4OTFcbiAgICBpZiAodGhpcy5mb3JtRmllbGQuYXBwZWFyYW5jZSAhPT0gJ291dGxpbmUnICYmIHRoaXMudG8uaGlkZUZpZWxkVW5kZXJsaW5lID09PSB0cnVlKSB7XG4gICAgICBjb25zdCB1bmRlcmxpbmVFbGVtZW50ID0gdGhpcy5mb3JtRmllbGQuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lJyk7XG4gICAgICB1bmRlcmxpbmVFbGVtZW50ICYmIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodW5kZXJsaW5lRWxlbWVudC5wYXJlbnROb2RlLCB1bmRlcmxpbmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBkZWxldGUgdGhpcy5maWVsZC5fX2Zvcm1GaWVsZF9fO1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XG4gIH1cbn1cbiJdfQ==