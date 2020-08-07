import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormlyFieldTextArea } from './textarea.type';
var FormlyMatTextAreaModule = /** @class */ (function () {
    function FormlyMatTextAreaModule() {
    }
    FormlyMatTextAreaModule = __decorate([
        NgModule({
            declarations: [FormlyFieldTextArea],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatInputModule,
                FormlyMatFormFieldModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'textarea',
                            component: FormlyFieldTextArea,
                            wrappers: ['form-field'],
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatTextAreaModule);
    return FormlyMatTextAreaModule;
}());
export { FormlyMatTextAreaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvdGV4dGFyZWEvIiwic291cmNlcyI6WyJ0ZXh0YXJlYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFxQnREO0lBQUE7SUFBc0MsQ0FBQztJQUExQix1QkFBdUI7UUFuQm5DLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsY0FBYztnQkFFZCx3QkFBd0I7Z0JBQ3hCLFlBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxJQUFJLEVBQUUsVUFBVTs0QkFDaEIsU0FBUyxFQUFFLG1CQUFtQjs0QkFDOUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3lCQUN6QjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7U0FDRixDQUFDO09BQ1csdUJBQXVCLENBQUc7SUFBRCw4QkFBQztDQUFBLEFBQXZDLElBQXVDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5pbXBvcnQgeyBGb3JtbHlGaWVsZFRleHRBcmVhIH0gZnJvbSAnLi90ZXh0YXJlYS50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRUZXh0QXJlYV0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcblxuICAgIEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgdHlwZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlGaWVsZFRleHRBcmVhLFxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2Zvcm0tZmllbGQnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seU1hdFRleHRBcmVhTW9kdWxlIHt9XG4iXX0=