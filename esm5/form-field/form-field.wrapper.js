import { __decorate, __extends, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild, OnInit, OnDestroy, Renderer2, AfterViewInit, AfterContentChecked, TemplateRef, ElementRef, ViewContainerRef, } from '@angular/core';
import { ɵdefineHiddenProp as defineHiddenProp, ɵobserve as observe, FieldWrapper, } from '@ngx-formly/core';
import { MatFormField } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
var FormlyWrapperFormField = /** @class */ (function (_super) {
    __extends(FormlyWrapperFormField, _super);
    function FormlyWrapperFormField(renderer, elementRef, focusMonitor) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.focusMonitor = focusMonitor;
        _this.initialGapCalculated = false;
        return _this;
    }
    FormlyWrapperFormField.prototype.ngOnInit = function () {
        var _this = this;
        defineHiddenProp(this.field, '__formField__', this.formField);
        ['prefix', 'suffix'].forEach(function (type) {
            return observe(_this.field, ['templateOptions', type], function (_a) {
                var currentValue = _a.currentValue;
                return currentValue &&
                    Promise.resolve().then(function () {
                        _this.field["_mat" + type] = currentValue;
                        _this.options.detectChanges(_this.field);
                    });
            });
        });
        // fix for https://github.com/angular/material2/issues/11437
        if (this.field.hide && this.field.templateOptions.appearance === 'outline') {
            this.initialGapCalculated = true;
        }
        this.focusMonitor.monitor(this.elementRef, true).subscribe(function (origin) {
            if (!origin && _this.field.focus) {
                _this.field.focus = false;
            }
        });
    };
    FormlyWrapperFormField.prototype.ngAfterContentChecked = function () {
        if (!this.initialGapCalculated || this.field.hide) {
            return;
        }
        this.formField.updateOutlineGap();
        this.initialGapCalculated = true;
    };
    FormlyWrapperFormField.prototype.ngAfterViewInit = function () {
        // temporary fix for https://github.com/angular/material2/issues/7891
        if (this.formField.appearance !== 'outline' && this.to.hideFieldUnderline === true) {
            var underlineElement = this.formField._elementRef.nativeElement.querySelector('.mat-form-field-underline');
            underlineElement && this.renderer.removeChild(underlineElement.parentNode, underlineElement);
        }
    };
    FormlyWrapperFormField.prototype.ngOnDestroy = function () {
        delete this.field.__formField__;
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    FormlyWrapperFormField.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: FocusMonitor }
    ]; };
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
            template: "\n    <!-- fix https://github.com/angular/material2/pull/7083 by setting width to 100% -->\n    <mat-form-field\n      [hideRequiredMarker]=\"true\"\n      [floatLabel]=\"to.floatLabel\"\n      [appearance]=\"to.appearance\"\n      [color]=\"to.color\"\n      [style.width]=\"'100%'\"\n    >\n      <ng-container #fieldComponent></ng-container>\n      <mat-label *ngIf=\"to.label && to.hideLabel !== true\">\n        {{ to.label }}\n        <span *ngIf=\"to.required && to.hideRequiredMarker !== true\" class=\"mat-form-field-required-marker\">*</span>\n      </mat-label>\n\n      <ng-container matPrefix>\n        <ng-container *ngTemplateOutlet=\"field._matprefix\"></ng-container>\n      </ng-container>\n\n      <ng-container matSuffix>\n        <ng-container *ngTemplateOutlet=\"field._matsuffix\"></ng-container>\n      </ng-container>\n\n      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->\n      <mat-error [id]=\"null\">\n        <formly-validation-message [field]=\"field\"></formly-validation-message>\n      </mat-error>\n      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->\n      <mat-hint *ngIf=\"to.description\" [id]=\"null\">{{ to.description }}</mat-hint>\n    </mat-form-field>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef, FocusMonitor])
    ], FormlyWrapperFormField);
    return FormlyWrapperFormField;
}(FieldWrapper));
export { FormlyWrapperFormField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvZm9ybS1maWVsZC8iLCJzb3VyY2VzIjpbImZvcm0tZmllbGQud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGFBQWEsRUFDYixtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLFVBQVUsRUFDVixnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGlCQUFpQixJQUFJLGdCQUFnQixFQUNyQyxRQUFRLElBQUksT0FBTyxFQUVuQixZQUFZLEdBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBMkNqRDtJQUE0QywwQ0FBa0M7SUFRNUUsZ0NBQW9CLFFBQW1CLEVBQVUsVUFBc0IsRUFBVSxZQUEwQjtRQUEzRyxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsa0JBQVksR0FBWixZQUFZLENBQWM7UUFGbkcsMEJBQW9CLEdBQUcsS0FBSyxDQUFDOztJQUlyQyxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQXlCQztRQXhCQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNoQyxPQUFBLE9BQU8sQ0FDTCxLQUFJLENBQUMsS0FBSyxFQUNWLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQ3pCLFVBQUMsRUFBZ0I7b0JBQWQsOEJBQVk7Z0JBQ2IsT0FBQSxZQUFZO29CQUNaLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0JBQ2YsS0FBSSxDQUFDLEtBQU0sQ0FBQyxTQUFPLElBQU0sQ0FBQyxHQUFHLFlBQVksQ0FBQzt3QkFDaEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFjLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQyxDQUFDLENBQUM7WUFKRixDQUlFLENBQ0w7UUFURCxDQVNDLENBQ0YsQ0FBQztRQUVGLDREQUE0RDtRQUM1RCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZ0IsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzNFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDaEUsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDL0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0RBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0RBQWUsR0FBZjtRQUNFLHFFQUFxRTtRQUNyRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixLQUFLLElBQUksRUFBRTtZQUNsRixJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUM3RyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUM5RjtJQUNILENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Z0JBbkQ2QixTQUFTO2dCQUFzQixVQUFVO2dCQUF3QixZQUFZOztJQU5wQztRQUF0RSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFrQixnQkFBZ0I7a0VBQUM7SUFDOUQ7UUFBMUMsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBYSxZQUFZOzZEQUFDO0lBSHpELHNCQUFzQjtRQW5DbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLCtCQUErQjtZQUN6QyxRQUFRLEVBQUUsaXdDQThCVDtZQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7eUNBUzhCLFNBQVMsRUFBc0IsVUFBVSxFQUF3QixZQUFZO09BUmhHLHNCQUFzQixDQTREbEM7SUFBRCw2QkFBQztDQUFBLEFBNURELENBQTRDLFlBQVksR0E0RHZEO1NBNURZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdDaGlsZCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgVGVtcGxhdGVSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgybVkZWZpbmVIaWRkZW5Qcm9wIGFzIGRlZmluZUhpZGRlblByb3AsXG4gIMm1b2JzZXJ2ZSBhcyBvYnNlcnZlLFxuICBGb3JtbHlGaWVsZENvbmZpZyxcbiAgRmllbGRXcmFwcGVyLFxufSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuXG5pbnRlcmZhY2UgTWF0Rm9ybWx5RmllbGRDb25maWcgZXh0ZW5kcyBGb3JtbHlGaWVsZENvbmZpZyB7XG4gIF9tYXRwcmVmaXg6IFRlbXBsYXRlUmVmPGFueT47XG4gIF9tYXRzdWZmaXg6IFRlbXBsYXRlUmVmPGFueT47XG4gIF9fZm9ybUZpZWxkX186IEZvcm1seVdyYXBwZXJGb3JtRmllbGQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS13cmFwcGVyLW1hdC1mb3JtLWZpZWxkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIGZpeCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvcHVsbC83MDgzIGJ5IHNldHRpbmcgd2lkdGggdG8gMTAwJSAtLT5cbiAgICA8bWF0LWZvcm0tZmllbGRcbiAgICAgIFtoaWRlUmVxdWlyZWRNYXJrZXJdPVwidHJ1ZVwiXG4gICAgICBbZmxvYXRMYWJlbF09XCJ0by5mbG9hdExhYmVsXCJcbiAgICAgIFthcHBlYXJhbmNlXT1cInRvLmFwcGVhcmFuY2VcIlxuICAgICAgW2NvbG9yXT1cInRvLmNvbG9yXCJcbiAgICAgIFtzdHlsZS53aWR0aF09XCInMTAwJSdcIlxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXIgI2ZpZWxkQ29tcG9uZW50PjwvbmctY29udGFpbmVyPlxuICAgICAgPG1hdC1sYWJlbCAqbmdJZj1cInRvLmxhYmVsICYmIHRvLmhpZGVMYWJlbCAhPT0gdHJ1ZVwiPlxuICAgICAgICB7eyB0by5sYWJlbCB9fVxuICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkICYmIHRvLmhpZGVSZXF1aXJlZE1hcmtlciAhPT0gdHJ1ZVwiIGNsYXNzPVwibWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyXCI+Kjwvc3Bhbj5cbiAgICAgIDwvbWF0LWxhYmVsPlxuXG4gICAgICA8bmctY29udGFpbmVyIG1hdFByZWZpeD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZpZWxkLl9tYXRwcmVmaXhcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8bmctY29udGFpbmVyIG1hdFN1ZmZpeD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZpZWxkLl9tYXRzdWZmaXhcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8IS0tIGZpeCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvaXNzdWVzLzc3MzcgYnkgc2V0dGluZyBpZCB0byBudWxsICAtLT5cbiAgICAgIDxtYXQtZXJyb3IgW2lkXT1cIm51bGxcIj5cbiAgICAgICAgPGZvcm1seS12YWxpZGF0aW9uLW1lc3NhZ2UgW2ZpZWxkXT1cImZpZWxkXCI+PC9mb3JtbHktdmFsaWRhdGlvbi1tZXNzYWdlPlxuICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICA8IS0tIGZpeCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvaXNzdWVzLzc3MzcgYnkgc2V0dGluZyBpZCB0byBudWxsICAtLT5cbiAgICAgIDxtYXQtaGludCAqbmdJZj1cInRvLmRlc2NyaXB0aW9uXCIgW2lkXT1cIm51bGxcIj57eyB0by5kZXNjcmlwdGlvbiB9fTwvbWF0LWhpbnQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seVdyYXBwZXJGb3JtRmllbGQgZXh0ZW5kcyBGaWVsZFdyYXBwZXI8TWF0Rm9ybWx5RmllbGRDb25maWc+XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBAVmlld0NoaWxkKCdmaWVsZENvbXBvbmVudCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGZpZWxkQ29tcG9uZW50ITogVmlld0NvbnRhaW5lclJlZjtcbiAgQFZpZXdDaGlsZChNYXRGb3JtRmllbGQsIHsgc3RhdGljOiB0cnVlIH0pIGZvcm1GaWVsZCE6IE1hdEZvcm1GaWVsZDtcbiAgZmllbGQhOiBNYXRGb3JtbHlGaWVsZENvbmZpZztcblxuICBwcml2YXRlIGluaXRpYWxHYXBDYWxjdWxhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgZGVmaW5lSGlkZGVuUHJvcCh0aGlzLmZpZWxkLCAnX19mb3JtRmllbGRfXycsIHRoaXMuZm9ybUZpZWxkKTtcbiAgICBbJ3ByZWZpeCcsICdzdWZmaXgnXS5mb3JFYWNoKCh0eXBlKSA9PlxuICAgICAgb2JzZXJ2ZTxUZW1wbGF0ZVJlZjxhbnk+PihcbiAgICAgICAgdGhpcy5maWVsZCxcbiAgICAgICAgWyd0ZW1wbGF0ZU9wdGlvbnMnLCB0eXBlXSxcbiAgICAgICAgKHsgY3VycmVudFZhbHVlIH0pID0+XG4gICAgICAgICAgY3VycmVudFZhbHVlICYmXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAoPGFueT50aGlzLmZpZWxkKVtgX21hdCR7dHlwZX1gXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZXRlY3RDaGFuZ2VzISh0aGlzLmZpZWxkKTtcbiAgICAgICAgICB9KSxcbiAgICAgICksXG4gICAgKTtcblxuICAgIC8vIGZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2lzc3Vlcy8xMTQzN1xuICAgIGlmICh0aGlzLmZpZWxkLmhpZGUgJiYgdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMhLmFwcGVhcmFuY2UgPT09ICdvdXRsaW5lJykge1xuICAgICAgdGhpcy5pbml0aWFsR2FwQ2FsY3VsYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZSgob3JpZ2luKSA9PiB7XG4gICAgICBpZiAoIW9yaWdpbiAmJiB0aGlzLmZpZWxkLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuZmllbGQuZm9jdXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbEdhcENhbGN1bGF0ZWQgfHwgdGhpcy5maWVsZC5oaWRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtRmllbGQudXBkYXRlT3V0bGluZUdhcCgpO1xuICAgIHRoaXMuaW5pdGlhbEdhcENhbGN1bGF0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIHRlbXBvcmFyeSBmaXggZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9pc3N1ZXMvNzg5MVxuICAgIGlmICh0aGlzLmZvcm1GaWVsZC5hcHBlYXJhbmNlICE9PSAnb3V0bGluZScgJiYgdGhpcy50by5oaWRlRmllbGRVbmRlcmxpbmUgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IHVuZGVybGluZUVsZW1lbnQgPSB0aGlzLmZvcm1GaWVsZC5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUnKTtcbiAgICAgIHVuZGVybGluZUVsZW1lbnQgJiYgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh1bmRlcmxpbmVFbGVtZW50LnBhcmVudE5vZGUsIHVuZGVybGluZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGRlbGV0ZSB0aGlzLmZpZWxkLl9fZm9ybUZpZWxkX187XG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcbiAgfVxufVxuIl19