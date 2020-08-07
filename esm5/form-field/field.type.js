import { __decorate, __extends, __metadata } from "tslib";
import { TemplateRef, ViewChild, Type, Directive } from '@angular/core';
import { FieldType as CoreFieldType } from '@ngx-formly/core';
import { Subject } from 'rxjs';
var FieldType = /** @class */ (function (_super) {
    __extends(FieldType, _super);
    function FieldType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.errorStateMatcher = { isErrorState: function () { return _this.field && _this.showError; } };
        _this.stateChanges = new Subject();
        _this._errorState = false;
        return _this;
    }
    Object.defineProperty(FieldType.prototype, "formFieldControl", {
        get: function () {
            return this._control || this;
        },
        set: function (control) {
            this._control = control;
            if (this.formField && control !== this.formField._control) {
                this.formField._control = control;
            }
        },
        enumerable: true,
        configurable: true
    });
    FieldType.prototype.ngOnInit = function () {
        if (this.formField) {
            this.formField._control = this.formFieldControl;
        }
    };
    FieldType.prototype.ngAfterViewInit = function () {
        if (this.matPrefix) {
            this.to.prefix = this.matPrefix;
        }
        if (this.matSuffix) {
            this.to.prefix = this.matSuffix;
        }
    };
    FieldType.prototype.ngOnDestroy = function () {
        if (this.formField) {
            delete this.formField._control;
        }
        this.stateChanges.complete();
    };
    FieldType.prototype.setDescribedByIds = function (ids) { };
    FieldType.prototype.onContainerClick = function (event) {
        this.field.focus = true;
        this.stateChanges.next();
    };
    Object.defineProperty(FieldType.prototype, "errorState", {
        get: function () {
            var showError = this.options.showError(this);
            if (showError !== this._errorState) {
                this._errorState = showError;
                this.stateChanges.next();
            }
            return showError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "controlType", {
        get: function () {
            if (this.to.type) {
                return this.to.type;
            }
            if (this.field.type instanceof Type) {
                return this.field.type.constructor.name;
            }
            return this.field.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "focused", {
        get: function () {
            return !!this.field.focus && !this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "disabled", {
        get: function () {
            return !!this.to.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "required", {
        get: function () {
            return !!this.to.required;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "placeholder", {
        get: function () {
            return this.to.placeholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "shouldPlaceholderFloat", {
        get: function () {
            return this.shouldLabelFloat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "value", {
        get: function () {
            return this.formControl.value;
        },
        set: function (value) {
            this.formControl.patchValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "ngControl", {
        get: function () {
            return this.formControl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "empty", {
        get: function () {
            return this.value == null || this.value === '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "shouldLabelFloat", {
        get: function () {
            return this.focused || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "formField", {
        get: function () {
            return this.field ? this.field['__formField__'] : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ViewChild('matPrefix'),
        __metadata("design:type", TemplateRef)
    ], FieldType.prototype, "matPrefix", void 0);
    __decorate([
        ViewChild('matSuffix'),
        __metadata("design:type", TemplateRef)
    ], FieldType.prototype, "matSuffix", void 0);
    FieldType = __decorate([
        Directive()
    ], FieldType);
    return FieldType;
}(CoreFieldType));
export { FieldType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQvIiwic291cmNlcyI6WyJmaWVsZC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQW9DLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsU0FBUyxJQUFJLGFBQWEsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSy9CO0lBQXlGLDZCQUFnQjtJQUF6RztRQUFBLHFFQXNHQztRQXZGQyx1QkFBaUIsR0FBc0IsRUFBRSxZQUFZLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLElBQUksS0FBSSxDQUFDLFNBQVMsRUFBNUIsQ0FBNEIsRUFBRSxDQUFDO1FBQzVGLGtCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNuQyxpQkFBVyxHQUFHLEtBQUssQ0FBQzs7SUFxRnRCLENBQUM7SUFqR0Msc0JBQUksdUNBQWdCO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztRQUMvQixDQUFDO2FBQ0QsVUFBcUIsT0FBaUM7WUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtnQkFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQzs7O09BTkE7SUFhRCw0QkFBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUNq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QUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksdUNBQWdCO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGdDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFPLElBQUksQ0FBQyxLQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoRSxDQUFDOzs7T0FBQTtJQW5HdUI7UUFBdkIsU0FBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBYSxXQUFXO2dEQUFNO0lBQzdCO1FBQXZCLFNBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQWEsV0FBVztnREFBTTtJQUhqQyxTQUFTO1FBRDlCLFNBQVMsRUFBRTtPQUNVLFNBQVMsQ0FzRzlCO0lBQUQsZ0JBQUM7Q0FBQSxBQXRHRCxDQUF5RixhQUFhLEdBc0dyRztTQXRHcUIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBUeXBlLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSBhcyBDb3JlRmllbGRUeXBlLCBGb3JtbHlGaWVsZENvbmZpZyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkLCBNYXRGb3JtRmllbGRDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZFR5cGU8RiBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnID0gRm9ybWx5RmllbGRDb25maWc+IGV4dGVuZHMgQ29yZUZpZWxkVHlwZTxGPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBNYXRGb3JtRmllbGRDb250cm9sPGFueT4ge1xuICBAVmlld0NoaWxkKCdtYXRQcmVmaXgnKSBtYXRQcmVmaXghOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCdtYXRTdWZmaXgnKSBtYXRTdWZmaXghOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCBmb3JtRmllbGRDb250cm9sKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250cm9sIHx8IHRoaXM7XG4gIH1cbiAgc2V0IGZvcm1GaWVsZENvbnRyb2woY29udHJvbDogTWF0Rm9ybUZpZWxkQ29udHJvbDxhbnk+KSB7XG4gICAgdGhpcy5fY29udHJvbCA9IGNvbnRyb2w7XG4gICAgaWYgKHRoaXMuZm9ybUZpZWxkICYmIGNvbnRyb2wgIT09IHRoaXMuZm9ybUZpZWxkLl9jb250cm9sKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZC5fY29udHJvbCA9IGNvbnRyb2w7XG4gICAgfVxuICB9XG5cbiAgZXJyb3JTdGF0ZU1hdGNoZXI6IEVycm9yU3RhdGVNYXRjaGVyID0geyBpc0Vycm9yU3RhdGU6ICgpID0+IHRoaXMuZmllbGQgJiYgdGhpcy5zaG93RXJyb3IgfTtcbiAgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgX2Vycm9yU3RhdGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29udHJvbCE6IE1hdEZvcm1GaWVsZENvbnRyb2w8YW55PjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtRmllbGQpIHtcbiAgICAgIHRoaXMuZm9ybUZpZWxkLl9jb250cm9sID0gdGhpcy5mb3JtRmllbGRDb250cm9sO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5tYXRQcmVmaXgpIHtcbiAgICAgIHRoaXMudG8ucHJlZml4ID0gdGhpcy5tYXRQcmVmaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLm1hdFN1ZmZpeCkge1xuICAgICAgdGhpcy50by5wcmVmaXggPSB0aGlzLm1hdFN1ZmZpeDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5mb3JtRmllbGQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmZvcm1GaWVsZC5fY29udHJvbDtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pOiB2b2lkIHt9XG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZpZWxkLmZvY3VzID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBnZXQgZXJyb3JTdGF0ZSgpIHtcbiAgICBjb25zdCBzaG93RXJyb3IgPSB0aGlzLm9wdGlvbnMhLnNob3dFcnJvciEodGhpcyk7XG4gICAgaWYgKHNob3dFcnJvciAhPT0gdGhpcy5fZXJyb3JTdGF0ZSkge1xuICAgICAgdGhpcy5fZXJyb3JTdGF0ZSA9IHNob3dFcnJvcjtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hvd0Vycm9yO1xuICB9XG5cbiAgZ2V0IGNvbnRyb2xUeXBlKCkge1xuICAgIGlmICh0aGlzLnRvLnR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvLnR5cGU7XG4gICAgfVxuXG4gICAgaWYgKDxhbnk+dGhpcy5maWVsZC50eXBlIGluc3RhbmNlb2YgVHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmllbGQudHlwZSEuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5maWVsZC50eXBlITtcbiAgfVxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLmZpZWxkLmZvY3VzICYmICF0aGlzLmRpc2FibGVkO1xuICB9XG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnRvLmRpc2FibGVkO1xuICB9XG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnRvLnJlcXVpcmVkO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy50by5wbGFjZWhvbGRlciB8fCAnJztcbiAgfVxuICBnZXQgc2hvdWxkUGxhY2Vob2xkZXJGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaG91bGRMYWJlbEZsb2F0O1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmZvcm1Db250cm9sLnBhdGNoVmFsdWUodmFsdWUpO1xuICB9XG4gIGdldCBuZ0NvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2wgYXMgYW55O1xuICB9XG4gIGdldCBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA9PSBudWxsIHx8IHRoaXMudmFsdWUgPT09ICcnO1xuICB9XG4gIGdldCBzaG91bGRMYWJlbEZsb2F0KCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7XG4gIH1cbiAgZ2V0IGZvcm1GaWVsZCgpOiBNYXRGb3JtRmllbGQge1xuICAgIHJldHVybiB0aGlzLmZpZWxkID8gKDxhbnk+dGhpcy5maWVsZClbJ19fZm9ybUZpZWxkX18nXSA6IG51bGw7XG4gIH1cbn1cbiJdfQ==