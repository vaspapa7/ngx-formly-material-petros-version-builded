import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormlyFieldInput } from './input.type';
let FormlyMatInputModule = class FormlyMatInputModule {
};
FormlyMatInputModule = __decorate([
    NgModule({
        declarations: [FormlyFieldInput],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            FormlyMatFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'input',
                        component: FormlyFieldInput,
                        wrappers: ['form-field'],
                    },
                    { name: 'string', extends: 'input' },
                    {
                        name: 'number',
                        extends: 'input',
                        defaultOptions: {
                            templateOptions: {
                                type: 'number',
                            },
                        },
                    },
                    {
                        name: 'integer',
                        extends: 'input',
                        defaultOptions: {
                            templateOptions: {
                                type: 'number',
                            },
                        },
                    },
                ],
            }),
        ],
    })
], FormlyMatInputModule);
export { FormlyMatInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvaW5wdXQvIiwic291cmNlcyI6WyJpbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBd0NoRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtDQUFHLENBQUE7QUFBdkIsb0JBQW9CO0lBdENoQyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoQyxPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGNBQWM7WUFFZCx3QkFBd0I7WUFDeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLFNBQVMsRUFBRSxnQkFBZ0I7d0JBQzNCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDekI7b0JBQ0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7b0JBQ3BDO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixjQUFjLEVBQUU7NEJBQ2QsZUFBZSxFQUFFO2dDQUNmLElBQUksRUFBRSxRQUFROzZCQUNmO3lCQUNGO3FCQUNGO29CQUNEO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixjQUFjLEVBQUU7NEJBQ2QsZUFBZSxFQUFFO2dDQUNmLElBQUksRUFBRSxRQUFROzZCQUNmO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO0tBQ0YsQ0FBQztHQUNXLG9CQUFvQixDQUFHO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5pbXBvcnQgeyBGb3JtbHlGaWVsZElucHV0IH0gZnJvbSAnLi9pbnB1dC50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRJbnB1dF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcblxuICAgIEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgdHlwZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlGaWVsZElucHV0LFxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2Zvcm0tZmllbGQnXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBuYW1lOiAnc3RyaW5nJywgZXh0ZW5kczogJ2lucHV0JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ251bWJlcicsXG4gICAgICAgICAgZXh0ZW5kczogJ2lucHV0JyxcbiAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ludGVnZXInLFxuICAgICAgICAgIGV4dGVuZHM6ICdpbnB1dCcsXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seU1hdElucHV0TW9kdWxlIHt9XG4iXX0=