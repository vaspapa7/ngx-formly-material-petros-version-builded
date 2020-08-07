import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormlyFieldCheckbox } from './checkbox.type';
var FormlyMatCheckboxModule = /** @class */ (function () {
    function FormlyMatCheckboxModule() {
    }
    FormlyMatCheckboxModule = __decorate([
        NgModule({
            declarations: [FormlyFieldCheckbox],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatCheckboxModule,
                FormlyMatFormFieldModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'checkbox',
                            component: FormlyFieldCheckbox,
                            wrappers: ['form-field'],
                        },
                        {
                            name: 'boolean',
                            extends: 'checkbox',
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatCheckboxModule);
    return FormlyMatCheckboxModule;
}());
export { FormlyMatCheckboxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvY2hlY2tib3gvIiwic291cmNlcyI6WyJjaGVja2JveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQTBCdEQ7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHVCQUF1QjtRQXhCbkMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDbkMsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUVuQixpQkFBaUI7Z0JBRWpCLHdCQUF3QjtnQkFDeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLElBQUksRUFBRSxVQUFVOzRCQUNoQixTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7eUJBQ3pCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxTQUFTOzRCQUNmLE9BQU8sRUFBRSxVQUFVO3lCQUNwQjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7U0FDRixDQUFDO09BQ1csdUJBQXVCLENBQUc7SUFBRCw4QkFBQztDQUFBLEFBQXZDLElBQXVDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuXG5pbXBvcnQgeyBGb3JtbHlGaWVsZENoZWNrYm94IH0gZnJvbSAnLi9jaGVja2JveC50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRDaGVja2JveF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuXG4gICAgRm9ybWx5TWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcm1seUZpZWxkQ2hlY2tib3gsXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZm9ybS1maWVsZCddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGV4dGVuZHM6ICdjaGVja2JveCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlNYXRDaGVja2JveE1vZHVsZSB7fVxuIl19