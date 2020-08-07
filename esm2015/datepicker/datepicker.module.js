import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormlyDatepickerTypeComponent } from './datepicker.type';
let FormlyMatDatepickerModule = class FormlyMatDatepickerModule {
};
FormlyMatDatepickerModule = __decorate([
    NgModule({
        declarations: [FormlyDatepickerTypeComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            MatDatepickerModule,
            FormlyMatFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'datepicker',
                        component: FormlyDatepickerTypeComponent,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ],
    })
], FormlyMatDatepickerModule);
export { FormlyMatDatepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFbkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFzQmxFLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0NBQUcsQ0FBQTtBQUE1Qix5QkFBeUI7SUFwQnJDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLDZCQUE2QixDQUFDO1FBQzdDLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLG1CQUFtQjtZQUVuQix3QkFBd0I7WUFDeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxZQUFZO3dCQUNsQixTQUFTLEVBQUUsNkJBQTZCO3dCQUN4QyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3pCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO0tBQ0YsQ0FBQztHQUNXLHlCQUF5QixDQUFHO1NBQTVCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuXG5pbXBvcnQgeyBGb3JtbHlEYXRlcGlja2VyVHlwZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RGF0ZXBpY2tlclR5cGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcblxuICAgIEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgdHlwZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdkYXRlcGlja2VyJyxcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcm1seURhdGVwaWNrZXJUeXBlQ29tcG9uZW50LFxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2Zvcm0tZmllbGQnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seU1hdERhdGVwaWNrZXJNb2R1bGUge31cbiJdfQ==