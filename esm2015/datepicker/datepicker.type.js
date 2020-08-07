import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput } from '@angular/material/datepicker';
let FormlyDatepickerTypeComponent = class FormlyDatepickerTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                datepickerOptions: {
                    startView: 'month',
                    datepickerTogglePosition: 'suffix',
                    dateInput: () => { },
                    dateChange: () => { },
                    monthSelected: () => { },
                    yearSelected: () => { },
                },
            },
        };
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.to[this.to.datepickerOptions.datepickerTogglePosition] = this.datepickerToggle;
        // temporary fix for https://github.com/angular/material2/issues/6728
        this.datepickerInput._formField = this.formField;
    }
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
        template: `
    <input
      matInput
      [id]="id"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [matDatepicker]="picker"
      [matDatepickerFilter]="to.datepickerOptions.filter"
      [max]="to.datepickerOptions.max"
      [min]="to.datepickerOptions.min"
      [formlyAttributes]="field"
      [placeholder]="to.placeholder"
      [tabindex]="to.tabindex"
      [readonly]="to.readonly"
      [required]="to.required"
      (dateInput)="to.datepickerOptions.dateInput(field, $event)"
      (dateChange)="to.datepickerOptions.dateChange(field, $event)"
    />
    <ng-template #datepickerToggle>
      <mat-datepicker-toggle [for]="picker"></mat-datepicker-toggle>
    </ng-template>
    <mat-datepicker
      #picker
      [color]="to.color"
      [dateClass]="to.datepickerOptions.dateClass"
      [disabled]="to.datepickerOptions.disabled"
      [opened]="to.datepickerOptions.opened"
      [panelClass]="to.datepickerOptions.panelClass"
      [startAt]="to.datepickerOptions.startAt"
      [startView]="to.datepickerOptions.startView"
      [touchUi]="to.datepickerOptions.touchUi"
      (monthSelected)="to.datepickerOptions.monthSelected(field, $event, picker)"
      (yearSelected)="to.datepickerOptions.yearSelected(field, $event, picker)"
    >
    </mat-datepicker>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyDatepickerTypeComponent);
export { FormlyDatepickerTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci50eXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBMENsRSxJQUFhLDZCQUE2QixHQUExQyxNQUFhLDZCQUE4QixTQUFRLFNBQVM7SUFBNUQ7O1FBS0UsbUJBQWMsR0FBRztZQUNmLGVBQWUsRUFBRTtnQkFDZixpQkFBaUIsRUFBRTtvQkFDakIsU0FBUyxFQUFFLE9BQU87b0JBQ2xCLHdCQUF3QixFQUFFLFFBQVE7b0JBQ2xDLFNBQVMsRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDO29CQUNuQixVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQztvQkFDcEIsYUFBYSxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDO2lCQUN2QjthQUNGO1NBQ0YsQ0FBQztJQVNKLENBQUM7SUFQQyxlQUFlO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUVwRixxRUFBcUU7UUFDL0QsSUFBSSxDQUFDLGVBQWdCLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUQsQ0FBQztDQUNGLENBQUE7QUF4QndDO0lBQXRDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQW9CLFFBQVE7dUVBQUM7QUFDbEI7SUFBaEQsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUFtQixrQkFBa0I7c0VBQU07QUFDMUM7SUFBaEQsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUFvQixXQUFXO3VFQUFNO0FBSDFFLDZCQUE2QjtJQXhDekMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNUO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLDZCQUE2QixDQXlCekM7U0F6QlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbWF0LWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dFxuICAgICAgbWF0SW5wdXRcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwiZXJyb3JTdGF0ZU1hdGNoZXJcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICAgIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiXG4gICAgICBbbWF0RGF0ZXBpY2tlckZpbHRlcl09XCJ0by5kYXRlcGlja2VyT3B0aW9ucy5maWx0ZXJcIlxuICAgICAgW21heF09XCJ0by5kYXRlcGlja2VyT3B0aW9ucy5tYXhcIlxuICAgICAgW21pbl09XCJ0by5kYXRlcGlja2VyT3B0aW9ucy5taW5cIlxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInRvLnBsYWNlaG9sZGVyXCJcbiAgICAgIFt0YWJpbmRleF09XCJ0by50YWJpbmRleFwiXG4gICAgICBbcmVhZG9ubHldPVwidG8ucmVhZG9ubHlcIlxuICAgICAgW3JlcXVpcmVkXT1cInRvLnJlcXVpcmVkXCJcbiAgICAgIChkYXRlSW5wdXQpPVwidG8uZGF0ZXBpY2tlck9wdGlvbnMuZGF0ZUlucHV0KGZpZWxkLCAkZXZlbnQpXCJcbiAgICAgIChkYXRlQ2hhbmdlKT1cInRvLmRhdGVwaWNrZXJPcHRpb25zLmRhdGVDaGFuZ2UoZmllbGQsICRldmVudClcIlxuICAgIC8+XG4gICAgPG5nLXRlbXBsYXRlICNkYXRlcGlja2VyVG9nZ2xlPlxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG1hdC1kYXRlcGlja2VyXG4gICAgICAjcGlja2VyXG4gICAgICBbY29sb3JdPVwidG8uY29sb3JcIlxuICAgICAgW2RhdGVDbGFzc109XCJ0by5kYXRlcGlja2VyT3B0aW9ucy5kYXRlQ2xhc3NcIlxuICAgICAgW2Rpc2FibGVkXT1cInRvLmRhdGVwaWNrZXJPcHRpb25zLmRpc2FibGVkXCJcbiAgICAgIFtvcGVuZWRdPVwidG8uZGF0ZXBpY2tlck9wdGlvbnMub3BlbmVkXCJcbiAgICAgIFtwYW5lbENsYXNzXT1cInRvLmRhdGVwaWNrZXJPcHRpb25zLnBhbmVsQ2xhc3NcIlxuICAgICAgW3N0YXJ0QXRdPVwidG8uZGF0ZXBpY2tlck9wdGlvbnMuc3RhcnRBdFwiXG4gICAgICBbc3RhcnRWaWV3XT1cInRvLmRhdGVwaWNrZXJPcHRpb25zLnN0YXJ0Vmlld1wiXG4gICAgICBbdG91Y2hVaV09XCJ0by5kYXRlcGlja2VyT3B0aW9ucy50b3VjaFVpXCJcbiAgICAgIChtb250aFNlbGVjdGVkKT1cInRvLmRhdGVwaWNrZXJPcHRpb25zLm1vbnRoU2VsZWN0ZWQoZmllbGQsICRldmVudCwgcGlja2VyKVwiXG4gICAgICAoeWVhclNlbGVjdGVkKT1cInRvLmRhdGVwaWNrZXJPcHRpb25zLnllYXJTZWxlY3RlZChmaWVsZCwgJGV2ZW50LCBwaWNrZXIpXCJcbiAgICA+XG4gICAgPC9tYXQtZGF0ZXBpY2tlcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seURhdGVwaWNrZXJUeXBlQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoTWF0SW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIGZvcm1GaWVsZENvbnRyb2whOiBNYXRJbnB1dDtcbiAgQFZpZXdDaGlsZChNYXREYXRlcGlja2VySW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIGRhdGVwaWNrZXJJbnB1dCE6IE1hdERhdGVwaWNrZXJJbnB1dDxhbnk+O1xuICBAVmlld0NoaWxkKCdkYXRlcGlja2VyVG9nZ2xlJywgeyBzdGF0aWM6IHRydWUgfSkgZGF0ZXBpY2tlclRvZ2dsZSE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICBkYXRlcGlja2VyT3B0aW9uczoge1xuICAgICAgICBzdGFydFZpZXc6ICdtb250aCcsXG4gICAgICAgIGRhdGVwaWNrZXJUb2dnbGVQb3NpdGlvbjogJ3N1ZmZpeCcsXG4gICAgICAgIGRhdGVJbnB1dDogKCkgPT4ge30sXG4gICAgICAgIGRhdGVDaGFuZ2U6ICgpID0+IHt9LFxuICAgICAgICBtb250aFNlbGVjdGVkOiAoKSA9PiB7fSxcbiAgICAgICAgeWVhclNlbGVjdGVkOiAoKSA9PiB7fSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gICAgdGhpcy50b1t0aGlzLnRvLmRhdGVwaWNrZXJPcHRpb25zLmRhdGVwaWNrZXJUb2dnbGVQb3NpdGlvbl0gPSB0aGlzLmRhdGVwaWNrZXJUb2dnbGU7XG5cbiAgICAvLyB0ZW1wb3JhcnkgZml4IGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvaXNzdWVzLzY3MjhcbiAgICAoPGFueT50aGlzLmRhdGVwaWNrZXJJbnB1dCkuX2Zvcm1GaWVsZCA9IHRoaXMuZm9ybUZpZWxkO1xuICB9XG59XG4iXX0=