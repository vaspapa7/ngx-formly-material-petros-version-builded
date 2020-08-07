import { __decorate, __metadata } from "tslib";
import { TemplateRef, ViewChild, Type, Directive } from '@angular/core';
import { FieldType as CoreFieldType } from '@ngx-formly/core';
import { Subject } from 'rxjs';
let FieldType = class FieldType extends CoreFieldType {
    constructor() {
        super(...arguments);
        this.errorStateMatcher = { isErrorState: () => this.field && this.showError };
        this.stateChanges = new Subject();
        this._errorState = false;
    }
    get formFieldControl() {
        return this._control || this;
    }
    set formFieldControl(control) {
        this._control = control;
        if (this.formField && control !== this.formField._control) {
            this.formField._control = control;
        }
    }
    ngOnInit() {
        if (this.formField) {
            this.formField._control = this.formFieldControl;
        }
    }
    ngAfterViewInit() {
        if (this.matPrefix) {
            this.to.prefix = this.matPrefix;
        }
        if (this.matSuffix) {
            this.to.prefix = this.matSuffix;
        }
    }
    ngOnDestroy() {
        if (this.formField) {
            delete this.formField._control;
        }
        this.stateChanges.complete();
    }
    setDescribedByIds(ids) { }
    onContainerClick(event) {
        this.field.focus = true;
        this.stateChanges.next();
    }
    get errorState() {
        const showError = this.options.showError(this);
        if (showError !== this._errorState) {
            this._errorState = showError;
            this.stateChanges.next();
        }
        return showError;
    }
    get controlType() {
        if (this.to.type) {
            return this.to.type;
        }
        if (this.field.type instanceof Type) {
            return this.field.type.constructor.name;
        }
        return this.field.type;
    }
    get focused() {
        return !!this.field.focus && !this.disabled;
    }
    get disabled() {
        return !!this.to.disabled;
    }
    get required() {
        return !!this.to.required;
    }
    get placeholder() {
        return this.to.placeholder || '';
    }
    get shouldPlaceholderFloat() {
        return this.shouldLabelFloat;
    }
    get value() {
        return this.formControl.value;
    }
    set value(value) {
        this.formControl.patchValue(value);
    }
    get ngControl() {
        return this.formControl;
    }
    get empty() {
        return this.value == null || this.value === '';
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get formField() {
        return this.field ? this.field['__formField__'] : null;
    }
};
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
export { FieldType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQvIiwic291cmNlcyI6WyJmaWVsZC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQW9DLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsU0FBUyxJQUFJLGFBQWEsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSy9CLElBQXNCLFNBQVMsR0FBL0IsTUFBc0IsU0FBMkQsU0FBUSxhQUFnQjtJQUF6Rzs7UUFlRSxzQkFBaUIsR0FBc0IsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUYsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBcUZ0QixDQUFDO0lBakdDLElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsT0FBaUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBT0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDakQ7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U0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQU8sSUFBSSxDQUFDLEtBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2hFLENBQUM7Q0FDRixDQUFBO0FBcEd5QjtJQUF2QixTQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFhLFdBQVc7NENBQU07QUFDN0I7SUFBdkIsU0FBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBYSxXQUFXOzRDQUFNO0FBSGpDLFNBQVM7SUFEOUIsU0FBUyxFQUFFO0dBQ1UsU0FBUyxDQXNHOUI7U0F0R3FCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgVHlwZSwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgYXMgQ29yZUZpZWxkVHlwZSwgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZCwgTWF0Rm9ybUZpZWxkQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmllbGRUeXBlPEYgZXh0ZW5kcyBGb3JtbHlGaWVsZENvbmZpZyA9IEZvcm1seUZpZWxkQ29uZmlnPiBleHRlbmRzIENvcmVGaWVsZFR5cGU8Rj5cbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgTWF0Rm9ybUZpZWxkQ29udHJvbDxhbnk+IHtcbiAgQFZpZXdDaGlsZCgnbWF0UHJlZml4JykgbWF0UHJlZml4ITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnbWF0U3VmZml4JykgbWF0U3VmZml4ITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBnZXQgZm9ybUZpZWxkQ29udHJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbCB8fCB0aGlzO1xuICB9XG4gIHNldCBmb3JtRmllbGRDb250cm9sKGNvbnRyb2w6IE1hdEZvcm1GaWVsZENvbnRyb2w8YW55Pikge1xuICAgIHRoaXMuX2NvbnRyb2wgPSBjb250cm9sO1xuICAgIGlmICh0aGlzLmZvcm1GaWVsZCAmJiBjb250cm9sICE9PSB0aGlzLmZvcm1GaWVsZC5fY29udHJvbCkge1xuICAgICAgdGhpcy5mb3JtRmllbGQuX2NvbnRyb2wgPSBjb250cm9sO1xuICAgIH1cbiAgfVxuXG4gIGVycm9yU3RhdGVNYXRjaGVyOiBFcnJvclN0YXRlTWF0Y2hlciA9IHsgaXNFcnJvclN0YXRlOiAoKSA9PiB0aGlzLmZpZWxkICYmIHRoaXMuc2hvd0Vycm9yIH07XG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIF9lcnJvclN0YXRlID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbnRyb2whOiBNYXRGb3JtRmllbGRDb250cm9sPGFueT47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybUZpZWxkKSB7XG4gICAgICB0aGlzLmZvcm1GaWVsZC5fY29udHJvbCA9IHRoaXMuZm9ybUZpZWxkQ29udHJvbDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMubWF0UHJlZml4KSB7XG4gICAgICB0aGlzLnRvLnByZWZpeCA9IHRoaXMubWF0UHJlZml4O1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXRTdWZmaXgpIHtcbiAgICAgIHRoaXMudG8ucHJlZml4ID0gdGhpcy5tYXRTdWZmaXg7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZm9ybUZpZWxkKSB7XG4gICAgICBkZWxldGUgdGhpcy5mb3JtRmllbGQuX2NvbnRyb2w7XG4gICAgfVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKTogdm9pZCB7fVxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5maWVsZC5mb2N1cyA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgZ2V0IGVycm9yU3RhdGUoKSB7XG4gICAgY29uc3Qgc2hvd0Vycm9yID0gdGhpcy5vcHRpb25zIS5zaG93RXJyb3IhKHRoaXMpO1xuICAgIGlmIChzaG93RXJyb3IgIT09IHRoaXMuX2Vycm9yU3RhdGUpIHtcbiAgICAgIHRoaXMuX2Vycm9yU3RhdGUgPSBzaG93RXJyb3I7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNob3dFcnJvcjtcbiAgfVxuXG4gIGdldCBjb250cm9sVHlwZSgpIHtcbiAgICBpZiAodGhpcy50by50eXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy50by50eXBlO1xuICAgIH1cblxuICAgIGlmICg8YW55PnRoaXMuZmllbGQudHlwZSBpbnN0YW5jZW9mIFR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkLnR5cGUhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudHlwZSE7XG4gIH1cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5maWVsZC5mb2N1cyAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgfVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy50by5kaXNhYmxlZDtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy50by5yZXF1aXJlZDtcbiAgfVxuICBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudG8ucGxhY2Vob2xkZXIgfHwgJyc7XG4gIH1cbiAgZ2V0IHNob3VsZFBsYWNlaG9sZGVyRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkTGFiZWxGbG9hdDtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5mb3JtQ29udHJvbC5wYXRjaFZhbHVlKHZhbHVlKTtcbiAgfVxuICBnZXQgbmdDb250cm9sKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Db250cm9sIGFzIGFueTtcbiAgfVxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPT0gbnVsbCB8fCB0aGlzLnZhbHVlID09PSAnJztcbiAgfVxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5O1xuICB9XG4gIGdldCBmb3JtRmllbGQoKTogTWF0Rm9ybUZpZWxkIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZCA/ICg8YW55PnRoaXMuZmllbGQpWydfX2Zvcm1GaWVsZF9fJ10gOiBudWxsO1xuICB9XG59XG4iXX0=