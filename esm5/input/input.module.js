import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormlyFieldInput } from './input.type';
var FormlyMatInputModule = /** @class */ (function () {
    function FormlyMatInputModule() {
    }
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
    return FormlyMatInputModule;
}());
export { FormlyMatInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvaW5wdXQvIiwic291cmNlcyI6WyJpbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBd0NoRDtJQUFBO0lBQW1DLENBQUM7SUFBdkIsb0JBQW9CO1FBdENoQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoQyxPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLGNBQWM7Z0JBRWQsd0JBQXdCO2dCQUN4QixZQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsSUFBSSxFQUFFLE9BQU87NEJBQ2IsU0FBUyxFQUFFLGdCQUFnQjs0QkFDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3lCQUN6Qjt3QkFDRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTt3QkFDcEM7NEJBQ0UsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLGNBQWMsRUFBRTtnQ0FDZCxlQUFlLEVBQUU7b0NBQ2YsSUFBSSxFQUFFLFFBQVE7aUNBQ2Y7NkJBQ0Y7eUJBQ0Y7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLFNBQVM7NEJBQ2YsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLGNBQWMsRUFBRTtnQ0FDZCxlQUFlLEVBQUU7b0NBQ2YsSUFBSSxFQUFFLFFBQVE7aUNBQ2Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1NBQ0YsQ0FBQztPQUNXLG9CQUFvQixDQUFHO0lBQUQsMkJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRm9ybWx5TWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuaW1wb3J0IHsgRm9ybWx5RmllbGRJbnB1dCB9IGZyb20gJy4vaW5wdXQudHlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Zvcm1seUZpZWxkSW5wdXRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG5cbiAgICBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGRJbnB1dCxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cmluZycsIGV4dGVuZHM6ICdpbnB1dCcgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdudW1iZXInLFxuICAgICAgICAgIGV4dGVuZHM6ICdpbnB1dCcsXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpbnRlZ2VyJyxcbiAgICAgICAgICBleHRlbmRzOiAnaW5wdXQnLFxuICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlNYXRJbnB1dE1vZHVsZSB7fVxuIl19