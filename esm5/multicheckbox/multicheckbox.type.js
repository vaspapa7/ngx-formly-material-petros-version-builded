import { __assign, __decorate, __extends, __metadata, __read, __spread } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChildren, QueryList } from '@angular/core';
import { FieldType } from '@ngx-formly/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
var FormlyFieldMultiCheckbox = /** @class */ (function (_super) {
    __extends(FormlyFieldMultiCheckbox, _super);
    function FormlyFieldMultiCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                options: [],
                color: 'accent',
            },
        };
        return _this;
    }
    FormlyFieldMultiCheckbox.prototype.onChange = function (value, checked) {
        var _a;
        if (this.to.type === 'array') {
            this.formControl.patchValue(checked
                ? __spread((this.formControl.value || []), [value]) : __spread((this.formControl.value || [])).filter(function (o) { return o !== value; }));
        }
        else {
            this.formControl.patchValue(__assign(__assign({}, this.formControl.value), (_a = {}, _a[value] = checked, _a)));
        }
        this.formControl.markAsTouched();
    };
    FormlyFieldMultiCheckbox.prototype.onContainerClick = function (event) {
        if (this.checkboxes.length) {
            this.checkboxes.first.focus();
        }
        _super.prototype.onContainerClick.call(this, event);
    };
    FormlyFieldMultiCheckbox.prototype.isChecked = function (option) {
        var value = this.formControl.value;
        return value && (this.to.type === 'array' ? value.indexOf(option.value) !== -1 : value[option.value]);
    };
    __decorate([
        ViewChildren(MatCheckbox),
        __metadata("design:type", QueryList)
    ], FormlyFieldMultiCheckbox.prototype, "checkboxes", void 0);
    FormlyFieldMultiCheckbox = __decorate([
        Component({
            selector: 'formly-field-mat-multicheckbox',
            template: "\n    <ng-container *ngFor=\"let option of to.options | formlySelectOptions: field | async; let i = index\">\n      <mat-checkbox\n        [id]=\"id + '_' + i\"\n        [formlyAttributes]=\"field\"\n        [tabindex]=\"to.tabindex\"\n        [color]=\"to.color\"\n        [labelPosition]=\"to.labelPosition\"\n        [checked]=\"isChecked(option)\"\n        [disabled]=\"formControl.disabled\"\n        (change)=\"onChange(option.value, $event.checked)\"\n      >\n        {{ option.label }}\n      </mat-checkbox>\n    </ng-container>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldMultiCheckbox);
    return FormlyFieldMultiCheckbox;
}(FieldType));
export { FormlyFieldMultiCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGljaGVja2JveC50eXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvbXVsdGljaGVja2JveC8iLCJzb3VyY2VzIjpbIm11bHRpY2hlY2tib3gudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFzQnpEO0lBQThDLDRDQUFTO0lBQXZEO1FBQUEscUVBcUNDO1FBbENDLG9CQUFjLEdBQUc7WUFDZixlQUFlLEVBQUU7Z0JBQ2Ysa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1NBQ0YsQ0FBQzs7SUEyQkosQ0FBQztJQXpCQywyQ0FBUSxHQUFSLFVBQVMsS0FBVSxFQUFFLE9BQWdCOztRQUNuQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FDekIsT0FBTztnQkFDTCxDQUFDLFVBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsR0FBRSxLQUFLLEdBQzNDLENBQUMsQ0FBQyxTQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLEtBQUssRUFBWCxDQUFXLENBQUMsQ0FDbkUsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsdUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLGdCQUFHLEtBQUssSUFBRyxPQUFPLE9BQUcsQ0FBQztTQUM5RTtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELG1EQUFnQixHQUFoQixVQUFpQixLQUFpQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQy9CO1FBQ0QsaUJBQU0sZ0JBQWdCLFlBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDRDQUFTLEdBQVQsVUFBVSxNQUFXO1FBQ25CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBRXJDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFuQzBCO1FBQTFCLFlBQVksQ0FBQyxXQUFXLENBQUM7a0NBQWMsU0FBUztnRUFBYztJQURwRCx3QkFBd0I7UUFwQnBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQ0FBZ0M7WUFDMUMsUUFBUSxFQUFFLGdpQkFlVDtZQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyx3QkFBd0IsQ0FxQ3BDO0lBQUQsK0JBQUM7Q0FBQSxBQXJDRCxDQUE4QyxTQUFTLEdBcUN0RDtTQXJDWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRDaGVja2JveCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLW1hdC1tdWx0aWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgdG8ub3B0aW9ucyB8IGZvcm1seVNlbGVjdE9wdGlvbnM6IGZpZWxkIHwgYXN5bmM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgIDxtYXQtY2hlY2tib3hcbiAgICAgICAgW2lkXT1cImlkICsgJ18nICsgaVwiXG4gICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcbiAgICAgICAgW3RhYmluZGV4XT1cInRvLnRhYmluZGV4XCJcbiAgICAgICAgW2NvbG9yXT1cInRvLmNvbG9yXCJcbiAgICAgICAgW2xhYmVsUG9zaXRpb25dPVwidG8ubGFiZWxQb3NpdGlvblwiXG4gICAgICAgIFtjaGVja2VkXT1cImlzQ2hlY2tlZChvcHRpb24pXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImZvcm1Db250cm9sLmRpc2FibGVkXCJcbiAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZShvcHRpb24udmFsdWUsICRldmVudC5jaGVja2VkKVwiXG4gICAgICA+XG4gICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fVxuICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZE11bHRpQ2hlY2tib3ggZXh0ZW5kcyBGaWVsZFR5cGUge1xuICBAVmlld0NoaWxkcmVuKE1hdENoZWNrYm94KSBjaGVja2JveGVzITogUXVlcnlMaXN0PE1hdENoZWNrYm94PjtcblxuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgIGhpZGVGaWVsZFVuZGVybGluZTogdHJ1ZSxcbiAgICAgIGZsb2F0TGFiZWw6ICdhbHdheXMnLFxuICAgICAgb3B0aW9uczogW10sXG4gICAgICBjb2xvcjogJ2FjY2VudCcsIC8vIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvaXNzdWVzLzE4NDY1XG4gICAgfSxcbiAgfTtcblxuICBvbkNoYW5nZSh2YWx1ZTogYW55LCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudG8udHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbC5wYXRjaFZhbHVlKFxuICAgICAgICBjaGVja2VkXG4gICAgICAgICAgPyBbLi4uKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgfHwgW10pLCB2YWx1ZV1cbiAgICAgICAgICA6IFsuLi4odGhpcy5mb3JtQ29udHJvbC52YWx1ZSB8fCBbXSldLmZpbHRlcigobykgPT4gbyAhPT0gdmFsdWUpLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbC5wYXRjaFZhbHVlKHsgLi4udGhpcy5mb3JtQ29udHJvbC52YWx1ZSwgW3ZhbHVlXTogY2hlY2tlZCB9KTtcbiAgICB9XG4gICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hlY2tib3hlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY2hlY2tib3hlcy5maXJzdC5mb2N1cygpO1xuICAgIH1cbiAgICBzdXBlci5vbkNvbnRhaW5lckNsaWNrKGV2ZW50KTtcbiAgfVxuXG4gIGlzQ2hlY2tlZChvcHRpb246IGFueSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcblxuICAgIHJldHVybiB2YWx1ZSAmJiAodGhpcy50by50eXBlID09PSAnYXJyYXknID8gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMSA6IHZhbHVlW29wdGlvbi52YWx1ZV0pO1xuICB9XG59XG4iXX0=