import { __decorate, __extends, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { FieldType } from '@ngx-formly/material/form-field';
var FormlyFieldInput = /** @class */ (function (_super) {
    __extends(FormlyFieldInput, _super);
    function FormlyFieldInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormlyFieldInput.prototype, "type", {
        get: function () {
            return this.to.type || 'text';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ViewChild(MatInput),
        __metadata("design:type", MatInput)
    ], FormlyFieldInput.prototype, "formFieldControl", void 0);
    FormlyFieldInput = __decorate([
        Component({
            selector: 'formly-field-mat-input',
            template: "\n    <input\n      *ngIf=\"type !== 'number'; else numberTmp\"\n      matInput\n      [id]=\"id\"\n      [type]=\"type || 'text'\"\n      [readonly]=\"to.readonly\"\n      [required]=\"to.required\"\n      [errorStateMatcher]=\"errorStateMatcher\"\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [tabindex]=\"to.tabindex\"\n      [placeholder]=\"to.placeholder\"\n    />\n    <ng-template #numberTmp>\n      <input\n        matInput\n        [id]=\"id\"\n        type=\"number\"\n        [readonly]=\"to.readonly\"\n        [required]=\"to.required\"\n        [errorStateMatcher]=\"errorStateMatcher\"\n        [formControl]=\"formControl\"\n        [formlyAttributes]=\"field\"\n        [tabindex]=\"to.tabindex\"\n        [placeholder]=\"to.placeholder\"\n      />\n    </ng-template>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldInput);
    return FormlyFieldInput;
}(FieldType));
export { FormlyFieldInput };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL2lucHV0LyIsInNvdXJjZXMiOlsiaW5wdXQudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQW1DNUQ7SUFBc0Msb0NBQVM7SUFBL0M7O0lBTUEsQ0FBQztJQUhDLHNCQUFJLGtDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUpvQjtRQUFwQixTQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFvQixRQUFROzhEQUFDO0lBRHRDLGdCQUFnQjtRQWpDNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUseXpCQTRCVDtZQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxnQkFBZ0IsQ0FNNUI7SUFBRCx1QkFBQztDQUFBLEFBTkQsQ0FBc0MsU0FBUyxHQU05QztTQU5ZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbWF0LWlucHV0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXRcbiAgICAgICpuZ0lmPVwidHlwZSAhPT0gJ251bWJlcic7IGVsc2UgbnVtYmVyVG1wXCJcbiAgICAgIG1hdElucHV0XG4gICAgICBbaWRdPVwiaWRcIlxuICAgICAgW3R5cGVdPVwidHlwZSB8fCAndGV4dCdcIlxuICAgICAgW3JlYWRvbmx5XT1cInRvLnJlYWRvbmx5XCJcbiAgICAgIFtyZXF1aXJlZF09XCJ0by5yZXF1aXJlZFwiXG4gICAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwiZXJyb3JTdGF0ZU1hdGNoZXJcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcbiAgICAgIFt0YWJpbmRleF09XCJ0by50YWJpbmRleFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwidG8ucGxhY2Vob2xkZXJcIlxuICAgIC8+XG4gICAgPG5nLXRlbXBsYXRlICNudW1iZXJUbXA+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgW2lkXT1cImlkXCJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIFtyZWFkb25seV09XCJ0by5yZWFkb25seVwiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0by5yZXF1aXJlZFwiXG4gICAgICAgIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJlcnJvclN0YXRlTWF0Y2hlclwiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcbiAgICAgICAgW3RhYmluZGV4XT1cInRvLnRhYmluZGV4XCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInRvLnBsYWNlaG9sZGVyXCJcbiAgICAgIC8+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkSW5wdXQgZXh0ZW5kcyBGaWVsZFR5cGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKE1hdElucHV0KSBmb3JtRmllbGRDb250cm9sITogTWF0SW5wdXQ7XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudG8udHlwZSB8fCAndGV4dCc7XG4gIH1cbn1cbiJdfQ==