import { __decorate, __extends, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput } from '@angular/material/datepicker';
var FormlyDatepickerTypeComponent = /** @class */ (function (_super) {
    __extends(FormlyDatepickerTypeComponent, _super);
    function FormlyDatepickerTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                datepickerOptions: {
                    startView: 'month',
                    datepickerTogglePosition: 'suffix',
                    dateInput: function () { },
                    dateChange: function () { },
                    monthSelected: function () { },
                    yearSelected: function () { },
                },
            },
        };
        return _this;
    }
    FormlyDatepickerTypeComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.to[this.to.datepickerOptions.datepickerTogglePosition] = this.datepickerToggle;
        // temporary fix for https://github.com/angular/material2/issues/6728
        this.datepickerInput._formField = this.formField;
    };
    __decorate([
        ViewChild(MatInput, { static: true }),
        __metadata("design:type", MatInput)
    ], FormlyDatepickerTypeComponent.prototype, "formFieldControl", void 0);
    __decorate([
        ViewChild(MatDatepickerInput, { static: true }),
        __metadata("design:type", MatDatepickerInput)
    ], FormlyDatepickerTypeComponent.prototype, "datepickerInput", void 0);
    __decorate([
        ViewChild('datepickerToggle', { static: true }),
        __metadata("design:type", TemplateRef)
    ], FormlyDatepickerTypeComponent.prototype, "datepickerToggle", void 0);
    FormlyDatepickerTypeComponent = __decorate([
        Component({
            selector: 'formly-field-mat-datepicker',
            template: "\n    <input\n      matInput\n      [id]=\"id\"\n      [errorStateMatcher]=\"errorStateMatcher\"\n      [formControl]=\"formControl\"\n      [matDatepicker]=\"picker\"\n      [matDatepickerFilter]=\"to.datepickerOptions.filter\"\n      [max]=\"to.datepickerOptions.max\"\n      [min]=\"to.datepickerOptions.min\"\n      [formlyAttributes]=\"field\"\n      [placeholder]=\"to.placeholder\"\n      [tabindex]=\"to.tabindex\"\n      [readonly]=\"to.readonly\"\n      [required]=\"to.required\"\n      (dateInput)=\"to.datepickerOptions.dateInput(field, $event)\"\n      (dateChange)=\"to.datepickerOptions.dateChange(field, $event)\"\n    />\n    <ng-template #datepickerToggle>\n      <mat-datepicker-toggle [for]=\"picker\"></mat-datepicker-toggle>\n    </ng-template>\n    <mat-datepicker\n      #picker\n      [color]=\"to.color\"\n      [dateClass]=\"to.datepickerOptions.dateClass\"\n      [disabled]=\"to.datepickerOptions.disabled\"\n      [opened]=\"to.datepickerOptions.opened\"\n      [panelClass]=\"to.datepickerOptions.panelClass\"\n      [startAt]=\"to.datepickerOptions.startAt\"\n      [startView]=\"to.datepickerOptions.startView\"\n      [touchUi]=\"to.datepickerOptions.touchUi\"\n      (monthSelected)=\"to.datepickerOptions.monthSelected(field, $event, picker)\"\n      (yearSelected)=\"to.datepickerOptions.yearSelected(field, $event, picker)\"\n    >\n    </mat-datepicker>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyDatepickerTypeComponent);
    return FormlyDatepickerTypeComponent;
}(FieldType));
export { FormlyDatepickerTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci50eXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBMENsRTtJQUFtRCxpREFBUztJQUE1RDtRQUFBLHFFQXlCQztRQXBCQyxvQkFBYyxHQUFHO1lBQ2YsZUFBZSxFQUFFO2dCQUNmLGlCQUFpQixFQUFFO29CQUNqQixTQUFTLEVBQUUsT0FBTztvQkFDbEIsd0JBQXdCLEVBQUUsUUFBUTtvQkFDbEMsU0FBUyxFQUFFLGNBQU8sQ0FBQztvQkFDbkIsVUFBVSxFQUFFLGNBQU8sQ0FBQztvQkFDcEIsYUFBYSxFQUFFLGNBQU8sQ0FBQztvQkFDdkIsWUFBWSxFQUFFLGNBQU8sQ0FBQztpQkFDdkI7YUFDRjtTQUNGLENBQUM7O0lBU0osQ0FBQztJQVBDLHVEQUFlLEdBQWY7UUFDRSxpQkFBTSxlQUFlLFdBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFcEYscUVBQXFFO1FBQy9ELElBQUksQ0FBQyxlQUFnQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFELENBQUM7SUF2QnNDO1FBQXRDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQW9CLFFBQVE7MkVBQUM7SUFDbEI7UUFBaEQsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFtQixrQkFBa0I7MEVBQU07SUFDMUM7UUFBaEQsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFvQixXQUFXOzJFQUFNO0lBSDFFLDZCQUE2QjtRQXhDekMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxRQUFRLEVBQUUsdTNDQW1DVDtZQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyw2QkFBNkIsQ0F5QnpDO0lBQUQsb0NBQUM7Q0FBQSxBQXpCRCxDQUFtRCxTQUFTLEdBeUIzRDtTQXpCWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlcklucHV0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1tYXQtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0XG4gICAgICBtYXRJbnB1dFxuICAgICAgW2lkXT1cImlkXCJcbiAgICAgIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJlcnJvclN0YXRlTWF0Y2hlclwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCJcbiAgICAgIFttYXREYXRlcGlja2VyRmlsdGVyXT1cInRvLmRhdGVwaWNrZXJPcHRpb25zLmZpbHRlclwiXG4gICAgICBbbWF4XT1cInRvLmRhdGVwaWNrZXJPcHRpb25zLm1heFwiXG4gICAgICBbbWluXT1cInRvLmRhdGVwaWNrZXJPcHRpb25zLm1pblwiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwidG8ucGxhY2Vob2xkZXJcIlxuICAgICAgW3RhYmluZGV4XT1cInRvLnRhYmluZGV4XCJcbiAgICAgIFtyZWFkb25seV09XCJ0by5yZWFkb25seVwiXG4gICAgICBbcmVxdWlyZWRdPVwidG8ucmVxdWlyZWRcIlxuICAgICAgKGRhdGVJbnB1dCk9XCJ0by5kYXRlcGlja2VyT3B0aW9ucy5kYXRlSW5wdXQoZmllbGQsICRldmVudClcIlxuICAgICAgKGRhdGVDaGFuZ2UpPVwidG8uZGF0ZXBpY2tlck9wdGlvbnMuZGF0ZUNoYW5nZShmaWVsZCwgJGV2ZW50KVwiXG4gICAgLz5cbiAgICA8bmctdGVtcGxhdGUgI2RhdGVwaWNrZXJUb2dnbGU+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bWF0LWRhdGVwaWNrZXJcbiAgICAgICNwaWNrZXJcbiAgICAgIFtjb2xvcl09XCJ0by5jb2xvclwiXG4gICAgICBbZGF0ZUNsYXNzXT1cInRvLmRhdGVwaWNrZXJPcHRpb25zLmRhdGVDbGFzc1wiXG4gICAgICBbZGlzYWJsZWRdPVwidG8uZGF0ZXBpY2tlck9wdGlvbnMuZGlzYWJsZWRcIlxuICAgICAgW29wZW5lZF09XCJ0by5kYXRlcGlja2VyT3B0aW9ucy5vcGVuZWRcIlxuICAgICAgW3BhbmVsQ2xhc3NdPVwidG8uZGF0ZXBpY2tlck9wdGlvbnMucGFuZWxDbGFzc1wiXG4gICAgICBbc3RhcnRBdF09XCJ0by5kYXRlcGlja2VyT3B0aW9ucy5zdGFydEF0XCJcbiAgICAgIFtzdGFydFZpZXddPVwidG8uZGF0ZXBpY2tlck9wdGlvbnMuc3RhcnRWaWV3XCJcbiAgICAgIFt0b3VjaFVpXT1cInRvLmRhdGVwaWNrZXJPcHRpb25zLnRvdWNoVWlcIlxuICAgICAgKG1vbnRoU2VsZWN0ZWQpPVwidG8uZGF0ZXBpY2tlck9wdGlvbnMubW9udGhTZWxlY3RlZChmaWVsZCwgJGV2ZW50LCBwaWNrZXIpXCJcbiAgICAgICh5ZWFyU2VsZWN0ZWQpPVwidG8uZGF0ZXBpY2tlck9wdGlvbnMueWVhclNlbGVjdGVkKGZpZWxkLCAkZXZlbnQsIHBpY2tlcilcIlxuICAgID5cbiAgICA8L21hdC1kYXRlcGlja2VyPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RGF0ZXBpY2tlclR5cGVDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZChNYXRJbnB1dCwgeyBzdGF0aWM6IHRydWUgfSkgZm9ybUZpZWxkQ29udHJvbCE6IE1hdElucHV0O1xuICBAVmlld0NoaWxkKE1hdERhdGVwaWNrZXJJbnB1dCwgeyBzdGF0aWM6IHRydWUgfSkgZGF0ZXBpY2tlcklucHV0ITogTWF0RGF0ZXBpY2tlcklucHV0PGFueT47XG4gIEBWaWV3Q2hpbGQoJ2RhdGVwaWNrZXJUb2dnbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkYXRlcGlja2VyVG9nZ2xlITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgIGRhdGVwaWNrZXJPcHRpb25zOiB7XG4gICAgICAgIHN0YXJ0VmlldzogJ21vbnRoJyxcbiAgICAgICAgZGF0ZXBpY2tlclRvZ2dsZVBvc2l0aW9uOiAnc3VmZml4JyxcbiAgICAgICAgZGF0ZUlucHV0OiAoKSA9PiB7fSxcbiAgICAgICAgZGF0ZUNoYW5nZTogKCkgPT4ge30sXG4gICAgICAgIG1vbnRoU2VsZWN0ZWQ6ICgpID0+IHt9LFxuICAgICAgICB5ZWFyU2VsZWN0ZWQ6ICgpID0+IHt9LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICB0aGlzLnRvW3RoaXMudG8uZGF0ZXBpY2tlck9wdGlvbnMuZGF0ZXBpY2tlclRvZ2dsZVBvc2l0aW9uXSA9IHRoaXMuZGF0ZXBpY2tlclRvZ2dsZTtcblxuICAgIC8vIHRlbXBvcmFyeSBmaXggZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9pc3N1ZXMvNjcyOFxuICAgICg8YW55PnRoaXMuZGF0ZXBpY2tlcklucHV0KS5fZm9ybUZpZWxkID0gdGhpcy5mb3JtRmllbGQ7XG4gIH1cbn1cbiJdfQ==