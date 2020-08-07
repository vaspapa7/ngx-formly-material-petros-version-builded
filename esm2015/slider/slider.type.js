import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatSlider } from '@angular/material/slider';
let FormlySliderTypeComponent = class FormlySliderTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                thumbLabel: false,
            },
        };
    }
    onContainerClick(event) {
        this.slider.focus();
        super.onContainerClick(event);
    }
};
__decorate([
    ViewChild(MatSlider, { static: true }),
    __metadata("design:type", MatSlider)
], FormlySliderTypeComponent.prototype, "slider", void 0);
FormlySliderTypeComponent = __decorate([
    Component({
        selector: 'formly-field-mat-slider',
        template: `
    <mat-slider
      [id]="id"
      [style.width]="'100%'"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex"
      [color]="to.color"
      [thumbLabel]="to.thumbLabel"
      [step]="to.step"
      [max]="to.max"
      [min]="to.min"
    >
    </mat-slider>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlySliderTypeComponent);
export { FormlySliderTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLnR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9zbGlkZXIvIiwic291cmNlcyI6WyJzbGlkZXIudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQXFCckQsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBMEIsU0FBUSxTQUFTO0lBQXhEOztRQUVFLG1CQUFjLEdBQUc7WUFDZixlQUFlLEVBQUU7Z0JBQ2Ysa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFVBQVUsRUFBRSxLQUFLO2FBQ2xCO1NBQ0YsQ0FBQztJQU1KLENBQUM7SUFKQyxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTtBQWJ5QztJQUF2QyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUFVLFNBQVM7eURBQUM7QUFEaEQseUJBQXlCO0lBbkJyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDtRQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyx5QkFBeUIsQ0FjckM7U0FkWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0U2xpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLW1hdC1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtc2xpZGVyXG4gICAgICBbaWRdPVwiaWRcIlxuICAgICAgW3N0eWxlLndpZHRoXT1cIicxMDAlJ1wiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgW3RhYmluZGV4XT1cInRvLnRhYmluZGV4XCJcbiAgICAgIFtjb2xvcl09XCJ0by5jb2xvclwiXG4gICAgICBbdGh1bWJMYWJlbF09XCJ0by50aHVtYkxhYmVsXCJcbiAgICAgIFtzdGVwXT1cInRvLnN0ZXBcIlxuICAgICAgW21heF09XCJ0by5tYXhcIlxuICAgICAgW21pbl09XCJ0by5taW5cIlxuICAgID5cbiAgICA8L21hdC1zbGlkZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlTbGlkZXJUeXBlQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIHtcbiAgQFZpZXdDaGlsZChNYXRTbGlkZXIsIHsgc3RhdGljOiB0cnVlIH0pIHNsaWRlciE6IE1hdFNsaWRlcjtcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICBoaWRlRmllbGRVbmRlcmxpbmU6IHRydWUsXG4gICAgICBmbG9hdExhYmVsOiAnYWx3YXlzJyxcbiAgICAgIHRodW1iTGFiZWw6IGZhbHNlLFxuICAgIH0sXG4gIH07XG5cbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc2xpZGVyLmZvY3VzKCk7XG4gICAgc3VwZXIub25Db250YWluZXJDbGljayhldmVudCk7XG4gIH1cbn1cbiJdfQ==