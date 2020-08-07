import { __decorate, __extends, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatSlideToggle } from '@angular/material/slide-toggle';
var FormlyToggleTypeComponent = /** @class */ (function (_super) {
    __extends(FormlyToggleTypeComponent, _super);
    function FormlyToggleTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                hideLabel: true,
            },
        };
        return _this;
    }
    FormlyToggleTypeComponent.prototype.onContainerClick = function (event) {
        this.slideToggle.focus();
        _super.prototype.onContainerClick.call(this, event);
    };
    __decorate([
        ViewChild(MatSlideToggle, { static: true }),
        __metadata("design:type", MatSlideToggle)
    ], FormlyToggleTypeComponent.prototype, "slideToggle", void 0);
    FormlyToggleTypeComponent = __decorate([
        Component({
            selector: 'formly-field-mat-toggle',
            template: "\n    <mat-slide-toggle\n      [id]=\"id\"\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [color]=\"to.color\"\n      [tabindex]=\"to.tabindex\"\n      [required]=\"to.required\"\n    >\n      {{ to.label }}\n    </mat-slide-toggle>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyToggleTypeComponent);
    return FormlyToggleTypeComponent;
}(FieldType));
export { FormlyToggleTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLnR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC90b2dnbGUvIiwic291cmNlcyI6WyJ0b2dnbGUudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWtCaEU7SUFBK0MsNkNBQVM7SUFBeEQ7UUFBQSxxRUFjQztRQVpDLG9CQUFjLEdBQUc7WUFDZixlQUFlLEVBQUU7Z0JBQ2Ysa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1NBQ0YsQ0FBQzs7SUFNSixDQUFDO0lBSkMsb0RBQWdCLEdBQWhCLFVBQWlCLEtBQWlCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsaUJBQU0sZ0JBQWdCLFlBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQVo0QztRQUE1QyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFlLGNBQWM7a0VBQUM7SUFEL0QseUJBQXlCO1FBaEJyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSwrUUFXVDtZQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyx5QkFBeUIsQ0FjckM7SUFBRCxnQ0FBQztDQUFBLEFBZEQsQ0FBK0MsU0FBUyxHQWN2RDtTQWRZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRTbGlkZVRvZ2dsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1tYXQtdG9nZ2xlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LXNsaWRlLXRvZ2dsZVxuICAgICAgW2lkXT1cImlkXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbY29sb3JdPVwidG8uY29sb3JcIlxuICAgICAgW3RhYmluZGV4XT1cInRvLnRhYmluZGV4XCJcbiAgICAgIFtyZXF1aXJlZF09XCJ0by5yZXF1aXJlZFwiXG4gICAgPlxuICAgICAge3sgdG8ubGFiZWwgfX1cbiAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlUb2dnbGVUeXBlQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIHtcbiAgQFZpZXdDaGlsZChNYXRTbGlkZVRvZ2dsZSwgeyBzdGF0aWM6IHRydWUgfSkgc2xpZGVUb2dnbGUhOiBNYXRTbGlkZVRvZ2dsZTtcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICBoaWRlRmllbGRVbmRlcmxpbmU6IHRydWUsXG4gICAgICBmbG9hdExhYmVsOiAnYWx3YXlzJyxcbiAgICAgIGhpZGVMYWJlbDogdHJ1ZSxcbiAgICB9LFxuICB9O1xuXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNsaWRlVG9nZ2xlLmZvY3VzKCk7XG4gICAgc3VwZXIub25Db250YWluZXJDbGljayhldmVudCk7XG4gIH1cbn1cbiJdfQ==