import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormlyFieldNativeSelect } from './native-select.type';
let FormlyMatNativeSelectModule = class FormlyMatNativeSelectModule {
};
FormlyMatNativeSelectModule = __decorate([
    NgModule({
        declarations: [FormlyFieldNativeSelect],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            FormlyMatFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'native-select',
                        component: FormlyFieldNativeSelect,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ],
    })
], FormlyMatNativeSelectModule);
export { FormlyMatNativeSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9uYXRpdmUtc2VsZWN0LyIsInNvdXJjZXMiOlsibmF0aXZlLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFzQi9ELElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0NBQUcsQ0FBQTtBQUE5QiwyQkFBMkI7SUFwQnZDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ3ZDLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsY0FBYztZQUVkLHdCQUF3QjtZQUN4QixrQkFBa0I7WUFDbEIsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxlQUFlO3dCQUNyQixTQUFTLEVBQUUsdUJBQXVCO3dCQUNsQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3pCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO0tBQ0YsQ0FBQztHQUNXLDJCQUEyQixDQUFHO1NBQTlCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGb3JtbHlTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlL3NlbGVjdCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5pbXBvcnQgeyBGb3JtbHlGaWVsZE5hdGl2ZVNlbGVjdCB9IGZyb20gJy4vbmF0aXZlLXNlbGVjdC50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGROYXRpdmVTZWxlY3RdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG5cbiAgICBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5U2VsZWN0TW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ25hdGl2ZS1zZWxlY3QnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGROYXRpdmVTZWxlY3QsXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZm9ybS1maWVsZCddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5TWF0TmF0aXZlU2VsZWN0TW9kdWxlIHt9XG4iXX0=