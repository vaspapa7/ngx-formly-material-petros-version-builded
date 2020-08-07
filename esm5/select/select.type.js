import { __decorate, __extends, __metadata, __read, __spread } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { FieldType } from '@ngx-formly/material/form-field';
var FormlyFieldSelect = /** @class */ (function (_super) {
    __extends(FormlyFieldSelect, _super);
    function FormlyFieldSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            templateOptions: {
                options: [],
                compareWith: function (o1, o2) {
                    return o1 === o2;
                },
            },
        };
        return _this;
    }
    FormlyFieldSelect.prototype.getSelectAllState = function (options) {
        if (this.empty || this.value.length === 0) {
            return '';
        }
        return this.value.length !== this.getSelectAllValue(options).length ? 'indeterminate' : 'checked';
    };
    FormlyFieldSelect.prototype.toggleSelectAll = function (options) {
        var selectAllValue = this.getSelectAllValue(options);
        this.formControl.setValue(!this.value || this.value.length !== selectAllValue.length ? selectAllValue : []);
    };
    FormlyFieldSelect.prototype.change = function ($event) {
        if (this.to.change) {
            this.to.change(this.field, $event);
        }
    };
    FormlyFieldSelect.prototype._getAriaLabelledby = function () {
        if (this.to.attributes && this.to.attributes['aria-labelledby']) {
            return this.to.attributes['aria-labelledby'];
        }
        if (this.formField && this.formField._labelId) {
            return this.formField._labelId;
        }
        return null;
    };
    FormlyFieldSelect.prototype.getSelectAllValue = function (options) {
        if (!this.selectAllValue || options !== this.selectAllValue.options) {
            var flatOptions_1 = [];
            options.forEach(function (o) { return (o.group ? flatOptions_1.push.apply(flatOptions_1, __spread(o.group)) : flatOptions_1.push(o)); });
            this.selectAllValue = {
                options: options,
                value: flatOptions_1.map(function (o) { return o.value; }),
            };
        }
        return this.selectAllValue.value;
    };
    __decorate([
        ViewChild(MatSelect, { static: true }),
        __metadata("design:type", MatSelect)
    ], FormlyFieldSelect.prototype, "formFieldControl", void 0);
    FormlyFieldSelect = __decorate([
        Component({
            selector: 'formly-field-mat-select',
            template: "\n    <ng-template #selectAll let-selectOptions=\"selectOptions\">\n      <mat-option (click)=\"toggleSelectAll(selectOptions)\">\n        <mat-pseudo-checkbox class=\"mat-option-pseudo-checkbox\" [state]=\"getSelectAllState(selectOptions)\">\n        </mat-pseudo-checkbox>\n        {{ to.selectAllOption }}\n      </mat-option>\n    </ng-template>\n\n    <mat-select\n      [id]=\"id\"\n      [formControl]=\"formControl\"\n      [formlyAttributes]=\"field\"\n      [placeholder]=\"to.placeholder\"\n      [tabindex]=\"to.tabindex\"\n      [required]=\"to.required\"\n      [compareWith]=\"to.compareWith\"\n      [multiple]=\"to.multiple\"\n      (selectionChange)=\"change($event)\"\n      [errorStateMatcher]=\"errorStateMatcher\"\n      [aria-labelledby]=\"_getAriaLabelledby()\"\n      [disableOptionCentering]=\"to.disableOptionCentering\"\n    >\n      <ng-container *ngIf=\"to.options | formlySelectOptions: field | async as selectOptions\">\n        <ng-container\n          *ngIf=\"to.multiple && to.selectAllOption\"\n          [ngTemplateOutlet]=\"selectAll\"\n          [ngTemplateOutletContext]=\"{ selectOptions: selectOptions }\"\n        >\n        </ng-container>\n        <ng-container *ngFor=\"let item of selectOptions\">\n          <mat-optgroup *ngIf=\"item.group\" [label]=\"item.label\">\n            <mat-option *ngFor=\"let child of item.group\" [value]=\"child.value\" [disabled]=\"child.disabled\">\n              {{ child.label }}\n            </mat-option>\n          </mat-optgroup>\n          <mat-option *ngIf=\"!item.group\" [value]=\"item.value\" [disabled]=\"item.disabled\">{{ item.label }}</mat-option>\n        </ng-container>\n      </ng-container>\n    </mat-select>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormlyFieldSelect);
    return FormlyFieldSelect;
}(FieldType));
export { FormlyFieldSelect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LnR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9zZWxlY3QvIiwic291cmNlcyI6WyJzZWxlY3QudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBbUIsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUErQzVEO0lBQXVDLHFDQUFTO0lBQWhEO1FBQUEscUVBMERDO1FBdkRDLG9CQUFjLEdBQUc7WUFDZixlQUFlLEVBQUU7Z0JBQ2YsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsV0FBVyxFQUFYLFVBQVksRUFBTyxFQUFFLEVBQU87b0JBQzFCLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQzthQUNGO1NBQ0YsQ0FBQzs7SUFnREosQ0FBQztJQTVDQyw2Q0FBaUIsR0FBakIsVUFBa0IsT0FBYztRQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3BHLENBQUM7SUFFRCwyQ0FBZSxHQUFmLFVBQWdCLE9BQWM7UUFDNUIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sTUFBdUI7UUFDNUIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELDhDQUFrQixHQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUMvRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUNoQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLDZDQUFpQixHQUF6QixVQUEwQixPQUFjO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUNuRSxJQUFNLGFBQVcsR0FBVSxFQUFFLENBQUM7WUFDOUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBVyxDQUFDLElBQUksT0FBaEIsYUFBVyxXQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFDLGFBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBOUQsQ0FBOEQsQ0FBQyxDQUFDO1lBRXZGLElBQUksQ0FBQyxjQUFjLEdBQUc7Z0JBQ3BCLE9BQU8sU0FBQTtnQkFDUCxLQUFLLEVBQUUsYUFBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDO2FBQ3ZDLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQXhEdUM7UUFBdkMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBb0IsU0FBUzsrREFBQztJQUQxRCxpQkFBaUI7UUE3QzdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLG9yREF3Q1Q7WUFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csaUJBQWlCLENBMEQ3QjtJQUFELHdCQUFDO0NBQUEsQUExREQsQ0FBdUMsU0FBUyxHQTBEL0M7U0ExRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTZWxlY3QsIE1hdFNlbGVjdENoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLW1hdC1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjc2VsZWN0QWxsIGxldC1zZWxlY3RPcHRpb25zPVwic2VsZWN0T3B0aW9uc1wiPlxuICAgICAgPG1hdC1vcHRpb24gKGNsaWNrKT1cInRvZ2dsZVNlbGVjdEFsbChzZWxlY3RPcHRpb25zKVwiPlxuICAgICAgICA8bWF0LXBzZXVkby1jaGVja2JveCBjbGFzcz1cIm1hdC1vcHRpb24tcHNldWRvLWNoZWNrYm94XCIgW3N0YXRlXT1cImdldFNlbGVjdEFsbFN0YXRlKHNlbGVjdE9wdGlvbnMpXCI+XG4gICAgICAgIDwvbWF0LXBzZXVkby1jaGVja2JveD5cbiAgICAgICAge3sgdG8uc2VsZWN0QWxsT3B0aW9uIH19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxtYXQtc2VsZWN0XG4gICAgICBbaWRdPVwiaWRcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJ0by5wbGFjZWhvbGRlclwiXG4gICAgICBbdGFiaW5kZXhdPVwidG8udGFiaW5kZXhcIlxuICAgICAgW3JlcXVpcmVkXT1cInRvLnJlcXVpcmVkXCJcbiAgICAgIFtjb21wYXJlV2l0aF09XCJ0by5jb21wYXJlV2l0aFwiXG4gICAgICBbbXVsdGlwbGVdPVwidG8ubXVsdGlwbGVcIlxuICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwiZXJyb3JTdGF0ZU1hdGNoZXJcIlxuICAgICAgW2FyaWEtbGFiZWxsZWRieV09XCJfZ2V0QXJpYUxhYmVsbGVkYnkoKVwiXG4gICAgICBbZGlzYWJsZU9wdGlvbkNlbnRlcmluZ109XCJ0by5kaXNhYmxlT3B0aW9uQ2VudGVyaW5nXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidG8ub3B0aW9ucyB8IGZvcm1seVNlbGVjdE9wdGlvbnM6IGZpZWxkIHwgYXN5bmMgYXMgc2VsZWN0T3B0aW9uc1wiPlxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgKm5nSWY9XCJ0by5tdWx0aXBsZSAmJiB0by5zZWxlY3RBbGxPcHRpb25cIlxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNlbGVjdEFsbFwiXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgc2VsZWN0T3B0aW9uczogc2VsZWN0T3B0aW9ucyB9XCJcbiAgICAgICAgPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzZWxlY3RPcHRpb25zXCI+XG4gICAgICAgICAgPG1hdC1vcHRncm91cCAqbmdJZj1cIml0ZW0uZ3JvdXBcIiBbbGFiZWxdPVwiaXRlbS5sYWJlbFwiPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGNoaWxkIG9mIGl0ZW0uZ3JvdXBcIiBbdmFsdWVdPVwiY2hpbGQudmFsdWVcIiBbZGlzYWJsZWRdPVwiY2hpbGQuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAge3sgY2hpbGQubGFiZWwgfX1cbiAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICA8L21hdC1vcHRncm91cD5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdJZj1cIiFpdGVtLmdyb3VwXCIgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIiBbZGlzYWJsZWRdPVwiaXRlbS5kaXNhYmxlZFwiPnt7IGl0ZW0ubGFiZWwgfX08L21hdC1vcHRpb24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9tYXQtc2VsZWN0PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRTZWxlY3QgZXh0ZW5kcyBGaWVsZFR5cGUge1xuICBAVmlld0NoaWxkKE1hdFNlbGVjdCwgeyBzdGF0aWM6IHRydWUgfSkgZm9ybUZpZWxkQ29udHJvbCE6IE1hdFNlbGVjdDtcblxuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgY29tcGFyZVdpdGgobzE6IGFueSwgbzI6IGFueSkge1xuICAgICAgICByZXR1cm4gbzEgPT09IG8yO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHByaXZhdGUgc2VsZWN0QWxsVmFsdWUhOiB7IG9wdGlvbnM6IGFueTsgdmFsdWU6IGFueVtdIH07XG5cbiAgZ2V0U2VsZWN0QWxsU3RhdGUob3B0aW9uczogYW55W10pIHtcbiAgICBpZiAodGhpcy5lbXB0eSB8fCB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aCAhPT0gdGhpcy5nZXRTZWxlY3RBbGxWYWx1ZShvcHRpb25zKS5sZW5ndGggPyAnaW5kZXRlcm1pbmF0ZScgOiAnY2hlY2tlZCc7XG4gIH1cblxuICB0b2dnbGVTZWxlY3RBbGwob3B0aW9uczogYW55W10pIHtcbiAgICBjb25zdCBzZWxlY3RBbGxWYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0QWxsVmFsdWUob3B0aW9ucyk7XG4gICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSghdGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlLmxlbmd0aCAhPT0gc2VsZWN0QWxsVmFsdWUubGVuZ3RoID8gc2VsZWN0QWxsVmFsdWUgOiBbXSk7XG4gIH1cblxuICBjaGFuZ2UoJGV2ZW50OiBNYXRTZWxlY3RDaGFuZ2UpIHtcbiAgICBpZiAodGhpcy50by5jaGFuZ2UpIHtcbiAgICAgIHRoaXMudG8uY2hhbmdlKHRoaXMuZmllbGQsICRldmVudCk7XG4gICAgfVxuICB9XG5cbiAgX2dldEFyaWFMYWJlbGxlZGJ5KCkge1xuICAgIGlmICh0aGlzLnRvLmF0dHJpYnV0ZXMgJiYgdGhpcy50by5hdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSkge1xuICAgICAgcmV0dXJuIHRoaXMudG8uYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9ybUZpZWxkICYmIHRoaXMuZm9ybUZpZWxkLl9sYWJlbElkKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtRmllbGQuX2xhYmVsSWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldFNlbGVjdEFsbFZhbHVlKG9wdGlvbnM6IGFueVtdKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEFsbFZhbHVlIHx8IG9wdGlvbnMgIT09IHRoaXMuc2VsZWN0QWxsVmFsdWUub3B0aW9ucykge1xuICAgICAgY29uc3QgZmxhdE9wdGlvbnM6IGFueVtdID0gW107XG4gICAgICBvcHRpb25zLmZvckVhY2goKG8pID0+IChvLmdyb3VwID8gZmxhdE9wdGlvbnMucHVzaCguLi5vLmdyb3VwKSA6IGZsYXRPcHRpb25zLnB1c2gobykpKTtcblxuICAgICAgdGhpcy5zZWxlY3RBbGxWYWx1ZSA9IHtcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgdmFsdWU6IGZsYXRPcHRpb25zLm1hcCgobykgPT4gby52YWx1ZSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNlbGVjdEFsbFZhbHVlLnZhbHVlO1xuICB9XG59XG4iXX0=