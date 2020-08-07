import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormlyWrapperFormField } from './form-field.wrapper';
var FormlyMatFormFieldModule = /** @class */ (function () {
    function FormlyMatFormFieldModule() {
    }
    FormlyMatFormFieldModule = __decorate([
        NgModule({
            declarations: [FormlyWrapperFormField],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                FormlyModule.forChild({
                    wrappers: [
                        {
                            name: 'form-field',
                            component: FormlyWrapperFormField,
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatFormFieldModule);
    return FormlyMatFormFieldModule;
}());
export { FormlyMatFormFieldModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkLyIsInNvdXJjZXMiOlsiZm9ybS1maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWtCOUQ7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHdCQUF3QjtRQWhCcEMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDdEMsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixrQkFBa0I7Z0JBQ2xCLFlBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLFFBQVEsRUFBRTt3QkFDUjs0QkFDRSxJQUFJLEVBQUUsWUFBWTs0QkFDbEIsU0FBUyxFQUFFLHNCQUFzQjt5QkFDbEM7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1NBQ0YsQ0FBQztPQUNXLHdCQUF3QixDQUFHO0lBQUQsK0JBQUM7Q0FBQSxBQUF4QyxJQUF3QztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRm9ybWx5V3JhcHBlckZvcm1GaWVsZCB9IGZyb20gJy4vZm9ybS1maWVsZC53cmFwcGVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5V3JhcHBlckZvcm1GaWVsZF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHdyYXBwZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZm9ybS1maWVsZCcsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlXcmFwcGVyRm9ybUZpZWxkLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5TWF0Rm9ybUZpZWxkTW9kdWxlIHt9XG4iXX0=