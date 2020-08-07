import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatRadioGroup } from '@angular/material/radio';
import { ɵobserve as observe } from '@ngx-formly/core';
let FormlyFieldRadio = class FormlyFieldRadio extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                options: [],
                tabindex: -1,
            },
        };
    }
    ngAfterViewInit() {
        this.focusObserver = observe(this.field, ['focus'], ({ currentValue }) => {
            if (this.to.tabindex === -1 && currentValue && this.radioGroup._radios.length > 0) {
                const radio = this.radioGroup.selected ? this.radioGroup.selected : this.radioGroup._radios.first;
                radio.focus();
            }
        });
    }
    ngOnDestroy() {
        this.focusObserver && this.focusObserver.unsubscribe();
    }
};
__decorate([
    ViewChild(MatRadioGroup, { static: true }),
    __metadata("design:type", MatRadioGroup)
], FormlyFieldRadio.prototype, "radioGroup", void 0);
FormlyFieldRadio = __decorate([
    Component({
        selector: 'formly-field-mat-radio',
        template: `
    <mat-radio-group
      [formControl]="formControl"
      [formlyAttributes]="field"
      [required]="to.required"
      [tabindex]="to.tabindex"
    >
      <mat-radio-button
        *ngFor="let option of to.options | formlySelectOptions: field | async; let i = index"
        [id]="id + '_' + i"
        [color]="to.color"
        [labelPosition]="to.labelPosition"
        [value]="option.value"
      >
        {{ option.label }}
      </mat-radio-button>
    </mat-radio-group>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormlyFieldRadio);
export { FormlyFieldRadio };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8udHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL3JhZGlvLyIsInNvdXJjZXMiOlsicmFkaW8udHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsSUFBSSxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQXdCdkQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBaUIsU0FBUSxTQUFTO0lBQS9DOztRQUVFLG1CQUFjLEdBQUc7WUFDZixlQUFlLEVBQUU7Z0JBQ2Ysa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDYjtTQUNGLENBQUM7SUFnQkosQ0FBQztJQWJDLGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7WUFDdkUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDakYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBRWxHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNmO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0NBQ0YsQ0FBQTtBQXhCNkM7SUFBM0MsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBYyxhQUFhO29EQUFDO0FBRDVELGdCQUFnQjtJQXRCNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLGdCQUFnQixDQXlCNUI7U0F6QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0UmFkaW9Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7IMm1b2JzZXJ2ZSBhcyBvYnNlcnZlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1tYXQtcmFkaW8nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtcmFkaW8tZ3JvdXBcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbcmVxdWlyZWRdPVwidG8ucmVxdWlyZWRcIlxuICAgICAgW3RhYmluZGV4XT1cInRvLnRhYmluZGV4XCJcbiAgICA+XG4gICAgICA8bWF0LXJhZGlvLWJ1dHRvblxuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHRvLm9wdGlvbnMgfCBmb3JtbHlTZWxlY3RPcHRpb25zOiBmaWVsZCB8IGFzeW5jOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgW2lkXT1cImlkICsgJ18nICsgaVwiXG4gICAgICAgIFtjb2xvcl09XCJ0by5jb2xvclwiXG4gICAgICAgIFtsYWJlbFBvc2l0aW9uXT1cInRvLmxhYmVsUG9zaXRpb25cIlxuICAgICAgICBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgID5cbiAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFJhZGlvIGV4dGVuZHMgRmllbGRUeXBlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChNYXRSYWRpb0dyb3VwLCB7IHN0YXRpYzogdHJ1ZSB9KSByYWRpb0dyb3VwITogTWF0UmFkaW9Hcm91cDtcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICBoaWRlRmllbGRVbmRlcmxpbmU6IHRydWUsXG4gICAgICBmbG9hdExhYmVsOiAnYWx3YXlzJyxcbiAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgdGFiaW5kZXg6IC0xLFxuICAgIH0sXG4gIH07XG5cbiAgcHJpdmF0ZSBmb2N1c09ic2VydmVyITogUmV0dXJuVHlwZTx0eXBlb2Ygb2JzZXJ2ZT47XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvY3VzT2JzZXJ2ZXIgPSBvYnNlcnZlKHRoaXMuZmllbGQsIFsnZm9jdXMnXSwgKHsgY3VycmVudFZhbHVlIH0pID0+IHtcbiAgICAgIGlmICh0aGlzLnRvLnRhYmluZGV4ID09PSAtMSAmJiBjdXJyZW50VmFsdWUgJiYgdGhpcy5yYWRpb0dyb3VwLl9yYWRpb3MubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCByYWRpbyA9IHRoaXMucmFkaW9Hcm91cC5zZWxlY3RlZCA/IHRoaXMucmFkaW9Hcm91cC5zZWxlY3RlZCA6IHRoaXMucmFkaW9Hcm91cC5fcmFkaW9zLmZpcnN0O1xuXG4gICAgICAgIHJhZGlvLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzT2JzZXJ2ZXIgJiYgdGhpcy5mb2N1c09ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==