import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatSlideToggle } from '@angular/material/slide-toggle';
let FormlyToggleTypeComponent = class FormlyToggleTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                hideLabel: true,
            },
        };
    }
    onContainerClick(event) {
        this.slideToggle.focus();
        super.onContainerClick(event);
    }
};
__decorate([
    ViewChild(MatSlideToggle, { static: true }),
    __metadata("design:type", MatSlideToggle)
], FormlyToggleTypeComponent.prototype, "slideToggle", void 0);
FormlyToggleTypeComponent = __decorate([
    Component({
        selector: 'formly-field-mat-toggle',
        template: `
    <mat-slide-toggle
      [id]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [color]="to.color"
      [tabindex]="to.tabindex"
      [required]="to.required"
    >
      {{ to.label }}
    </mat-slide-toggle>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyToggleTypeComponent);
export { FormlyToggleTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLnR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC90b2dnbGUvIiwic291cmNlcyI6WyJ0b2dnbGUudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWtCaEUsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBMEIsU0FBUSxTQUFTO0lBQXhEOztRQUVFLG1CQUFjLEdBQUc7WUFDZixlQUFlLEVBQUU7Z0JBQ2Ysa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1NBQ0YsQ0FBQztJQU1KLENBQUM7SUFKQyxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTtBQWI4QztJQUE1QyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUFlLGNBQWM7OERBQUM7QUFEL0QseUJBQXlCO0lBaEJyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtRQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyx5QkFBeUIsQ0FjckM7U0FkWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbWF0LXRvZ2dsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgW2NvbG9yXT1cInRvLmNvbG9yXCJcbiAgICAgIFt0YWJpbmRleF09XCJ0by50YWJpbmRleFwiXG4gICAgICBbcmVxdWlyZWRdPVwidG8ucmVxdWlyZWRcIlxuICAgID5cbiAgICAgIHt7IHRvLmxhYmVsIH19XG4gICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5VG9nZ2xlVHlwZUNvbXBvbmVudCBleHRlbmRzIEZpZWxkVHlwZSB7XG4gIEBWaWV3Q2hpbGQoTWF0U2xpZGVUb2dnbGUsIHsgc3RhdGljOiB0cnVlIH0pIHNsaWRlVG9nZ2xlITogTWF0U2xpZGVUb2dnbGU7XG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgaGlkZUZpZWxkVW5kZXJsaW5lOiB0cnVlLFxuICAgICAgZmxvYXRMYWJlbDogJ2Fsd2F5cycsXG4gICAgICBoaWRlTGFiZWw6IHRydWUsXG4gICAgfSxcbiAgfTtcblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zbGlkZVRvZ2dsZS5mb2N1cygpO1xuICAgIHN1cGVyLm9uQ29udGFpbmVyQ2xpY2soZXZlbnQpO1xuICB9XG59XG4iXX0=