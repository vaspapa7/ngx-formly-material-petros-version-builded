import { __decorate, __extends, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatSlider } from '@angular/material/slider';
var FormlySliderTypeComponent = /** @class */ (function (_super) {
    __extends(FormlySliderTypeComponent, _super);
    function FormlySliderTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                thumbLabel: false,
            },
        };
        return _this;
    }
    FormlySliderTypeComponent.prototype.onContainerClick = function (event) {
        this.slider.focus();
        _super.prototype.onContainerClick.call(this, event);
    };
    __decorate([
        ViewChild(MatSlider, { static: true }),
        __metadata("design:type", MatSlider)
    ], FormlySliderTypeComponent.prototype, "slider", void 0);
    FormlySliderTypeComponent = __decorate([
        Component({
            selector: 'formly-field-mat-slider',
            template: "\n    <mat-slider\n      [id]=\"id\"\n      [style.width]=\"'100%'\"\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [tabindex]=\"to.tabindex\"\n      [color]=\"to.color\"\n      [thumbLabel]=\"to.thumbLabel\"\n      [step]=\"to.step\"\n      [max]=\"to.max\"\n      [min]=\"to.min\"\n    >\n    </mat-slider>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlySliderTypeComponent);
    return FormlySliderTypeComponent;
}(FieldType));
export { FormlySliderTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLnR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9zbGlkZXIvIiwic291cmNlcyI6WyJzbGlkZXIudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQXFCckQ7SUFBK0MsNkNBQVM7SUFBeEQ7UUFBQSxxRUFjQztRQVpDLG9CQUFjLEdBQUc7WUFDZixlQUFlLEVBQUU7Z0JBQ2Ysa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFVBQVUsRUFBRSxLQUFLO2FBQ2xCO1NBQ0YsQ0FBQzs7SUFNSixDQUFDO0lBSkMsb0RBQWdCLEdBQWhCLFVBQWlCLEtBQWlCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsaUJBQU0sZ0JBQWdCLFlBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQVp1QztRQUF2QyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFVLFNBQVM7NkRBQUM7SUFEaEQseUJBQXlCO1FBbkJyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSwyVkFjVDtZQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyx5QkFBeUIsQ0FjckM7SUFBRCxnQ0FBQztDQUFBLEFBZEQsQ0FBK0MsU0FBUyxHQWN2RDtTQWRZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRTbGlkZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbWF0LXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1zbGlkZXJcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbc3R5bGUud2lkdGhdPVwiJzEwMCUnXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbdGFiaW5kZXhdPVwidG8udGFiaW5kZXhcIlxuICAgICAgW2NvbG9yXT1cInRvLmNvbG9yXCJcbiAgICAgIFt0aHVtYkxhYmVsXT1cInRvLnRodW1iTGFiZWxcIlxuICAgICAgW3N0ZXBdPVwidG8uc3RlcFwiXG4gICAgICBbbWF4XT1cInRvLm1heFwiXG4gICAgICBbbWluXT1cInRvLm1pblwiXG4gICAgPlxuICAgIDwvbWF0LXNsaWRlcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seVNsaWRlclR5cGVDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUge1xuICBAVmlld0NoaWxkKE1hdFNsaWRlciwgeyBzdGF0aWM6IHRydWUgfSkgc2xpZGVyITogTWF0U2xpZGVyO1xuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgIGhpZGVGaWVsZFVuZGVybGluZTogdHJ1ZSxcbiAgICAgIGZsb2F0TGFiZWw6ICdhbHdheXMnLFxuICAgICAgdGh1bWJMYWJlbDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zbGlkZXIuZm9jdXMoKTtcbiAgICBzdXBlci5vbkNvbnRhaW5lckNsaWNrKGV2ZW50KTtcbiAgfVxufVxuIl19