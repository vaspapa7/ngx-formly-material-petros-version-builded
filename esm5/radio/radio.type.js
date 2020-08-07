import { __decorate, __extends, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatRadioGroup } from '@angular/material/radio';
import { ɵobserve as observe } from '@ngx-formly/core';
var FormlyFieldRadio = /** @class */ (function (_super) {
    __extends(FormlyFieldRadio, _super);
    function FormlyFieldRadio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                options: [],
                tabindex: -1,
            },
        };
        return _this;
    }
    FormlyFieldRadio.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.focusObserver = observe(this.field, ['focus'], function (_a) {
            var currentValue = _a.currentValue;
            if (_this.to.tabindex === -1 && currentValue && _this.radioGroup._radios.length > 0) {
                var radio = _this.radioGroup.selected ? _this.radioGroup.selected : _this.radioGroup._radios.first;
                radio.focus();
            }
        });
    };
    FormlyFieldRadio.prototype.ngOnDestroy = function () {
        this.focusObserver && this.focusObserver.unsubscribe();
    };
    __decorate([
        ViewChild(MatRadioGroup, { static: true }),
        __metadata("design:type", MatRadioGroup)
    ], FormlyFieldRadio.prototype, "radioGroup", void 0);
    FormlyFieldRadio = __decorate([
        Component({
            selector: 'formly-field-mat-radio',
            template: "\n    <mat-radio-group\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [required]=\"to.required\"\n      [tabindex]=\"to.tabindex\"\n    >\n      <mat-radio-button\n        *ngFor=\"let option of to.options | formlySelectOptions: field | async; let i = index\"\n        [id]=\"id + '_' + i\"\n        [color]=\"to.color\"\n        [labelPosition]=\"to.labelPosition\"\n        [value]=\"option.value\"\n      >\n        {{ option.label }}\n      </mat-radio-button>\n    </mat-radio-group>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldRadio);
    return FormlyFieldRadio;
}(FieldType));
export { FormlyFieldRadio };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8udHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL3JhZGlvLyIsInNvdXJjZXMiOlsicmFkaW8udHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsSUFBSSxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQXdCdkQ7SUFBc0Msb0NBQVM7SUFBL0M7UUFBQSxxRUF5QkM7UUF2QkMsb0JBQWMsR0FBRztZQUNmLGVBQWUsRUFBRTtnQkFDZixrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUNiO1NBQ0YsQ0FBQzs7SUFnQkosQ0FBQztJQWJDLDBDQUFlLEdBQWY7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFDLEVBQWdCO2dCQUFkLDhCQUFZO1lBQ2pFLElBQUksS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUksWUFBWSxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pGLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUVsRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekQsQ0FBQztJQXZCMkM7UUFBM0MsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBYyxhQUFhO3dEQUFDO0lBRDVELGdCQUFnQjtRQXRCNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsK2dCQWlCVDtZQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxnQkFBZ0IsQ0F5QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXpCRCxDQUFzQyxTQUFTLEdBeUI5QztTQXpCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRSYWRpb0dyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHsgybVvYnNlcnZlIGFzIG9ic2VydmUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLW1hdC1yYWRpbycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1yYWRpby1ncm91cFxuICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcbiAgICAgIFtyZXF1aXJlZF09XCJ0by5yZXF1aXJlZFwiXG4gICAgICBbdGFiaW5kZXhdPVwidG8udGFiaW5kZXhcIlxuICAgID5cbiAgICAgIDxtYXQtcmFkaW8tYnV0dG9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgdG8ub3B0aW9ucyB8IGZvcm1seVNlbGVjdE9wdGlvbnM6IGZpZWxkIHwgYXN5bmM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICBbaWRdPVwiaWQgKyAnXycgKyBpXCJcbiAgICAgICAgW2NvbG9yXT1cInRvLmNvbG9yXCJcbiAgICAgICAgW2xhYmVsUG9zaXRpb25dPVwidG8ubGFiZWxQb3NpdGlvblwiXG4gICAgICAgIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgPlxuICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX1cbiAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkUmFkaW8gZXh0ZW5kcyBGaWVsZFR5cGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKE1hdFJhZGlvR3JvdXAsIHsgc3RhdGljOiB0cnVlIH0pIHJhZGlvR3JvdXAhOiBNYXRSYWRpb0dyb3VwO1xuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgIGhpZGVGaWVsZFVuZGVybGluZTogdHJ1ZSxcbiAgICAgIGZsb2F0TGFiZWw6ICdhbHdheXMnLFxuICAgICAgb3B0aW9uczogW10sXG4gICAgICB0YWJpbmRleDogLTEsXG4gICAgfSxcbiAgfTtcblxuICBwcml2YXRlIGZvY3VzT2JzZXJ2ZXIhOiBSZXR1cm5UeXBlPHR5cGVvZiBvYnNlcnZlPjtcbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9jdXNPYnNlcnZlciA9IG9ic2VydmUodGhpcy5maWVsZCwgWydmb2N1cyddLCAoeyBjdXJyZW50VmFsdWUgfSkgPT4ge1xuICAgICAgaWYgKHRoaXMudG8udGFiaW5kZXggPT09IC0xICYmIGN1cnJlbnRWYWx1ZSAmJiB0aGlzLnJhZGlvR3JvdXAuX3JhZGlvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy5yYWRpb0dyb3VwLnNlbGVjdGVkID8gdGhpcy5yYWRpb0dyb3VwLnNlbGVjdGVkIDogdGhpcy5yYWRpb0dyb3VwLl9yYWRpb3MuZmlyc3Q7XG5cbiAgICAgICAgcmFkaW8uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNPYnNlcnZlciAmJiB0aGlzLmZvY3VzT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19