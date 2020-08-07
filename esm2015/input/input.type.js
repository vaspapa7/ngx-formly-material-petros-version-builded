import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { FieldType } from '@ngx-formly/material/form-field';
let FormlyFieldInput = class FormlyFieldInput extends FieldType {
    get type() {
        return this.to.type || 'text';
    }
};
__decorate([
    ViewChild(MatInput),
    __metadata("design:type", MatInput)
], FormlyFieldInput.prototype, "formFieldControl", void 0);
FormlyFieldInput = __decorate([
    Component({
        selector: 'formly-field-mat-input',
        template: `
    <input
      *ngIf="type !== 'number'; else numberTmp"
      matInput
      [id]="id"
      [type]="type || 'text'"
      [readonly]="to.readonly"
      [required]="to.required"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex"
      [placeholder]="to.placeholder"
    />
    <ng-template #numberTmp>
      <input
        matInput
        [id]="id"
        type="number"
        [readonly]="to.readonly"
        [required]="to.required"
        [errorStateMatcher]="errorStateMatcher"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [tabindex]="to.tabindex"
        [placeholder]="to.placeholder"
      />
    </ng-template>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldInput);
export { FormlyFieldInput };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL2lucHV0LyIsInNvdXJjZXMiOlsiaW5wdXQudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQW1DNUQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBaUIsU0FBUSxTQUFTO0lBRzdDLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO0lBQ2hDLENBQUM7Q0FDRixDQUFBO0FBTHNCO0lBQXBCLFNBQVMsQ0FBQyxRQUFRLENBQUM7OEJBQW9CLFFBQVE7MERBQUM7QUFEdEMsZ0JBQWdCO0lBakM1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCVDtRQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxnQkFBZ0IsQ0FNNUI7U0FOWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0SW5wdXQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLW1hdC1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0XG4gICAgICAqbmdJZj1cInR5cGUgIT09ICdudW1iZXInOyBlbHNlIG51bWJlclRtcFwiXG4gICAgICBtYXRJbnB1dFxuICAgICAgW2lkXT1cImlkXCJcbiAgICAgIFt0eXBlXT1cInR5cGUgfHwgJ3RleHQnXCJcbiAgICAgIFtyZWFkb25seV09XCJ0by5yZWFkb25seVwiXG4gICAgICBbcmVxdWlyZWRdPVwidG8ucmVxdWlyZWRcIlxuICAgICAgW2Vycm9yU3RhdGVNYXRjaGVyXT1cImVycm9yU3RhdGVNYXRjaGVyXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbdGFiaW5kZXhdPVwidG8udGFiaW5kZXhcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInRvLnBsYWNlaG9sZGVyXCJcbiAgICAvPlxuICAgIDxuZy10ZW1wbGF0ZSAjbnVtYmVyVG1wPlxuICAgICAgPGlucHV0XG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIFtpZF09XCJpZFwiXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBbcmVhZG9ubHldPVwidG8ucmVhZG9ubHlcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidG8ucmVxdWlyZWRcIlxuICAgICAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwiZXJyb3JTdGF0ZU1hdGNoZXJcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICAgIFt0YWJpbmRleF09XCJ0by50YWJpbmRleFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0by5wbGFjZWhvbGRlclwiXG4gICAgICAvPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZElucHV0IGV4dGVuZHMgRmllbGRUeXBlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChNYXRJbnB1dCkgZm9ybUZpZWxkQ29udHJvbCE6IE1hdElucHV0O1xuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLnRvLnR5cGUgfHwgJ3RleHQnO1xuICB9XG59XG4iXX0=