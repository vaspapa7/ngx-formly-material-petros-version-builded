import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormlyFieldCheckbox } from './checkbox.type';
let FormlyMatCheckboxModule = class FormlyMatCheckboxModule {
};
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
export { FormlyMatCheckboxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvY2hlY2tib3gvIiwic291cmNlcyI6WyJjaGVja2JveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQTBCdEQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7Q0FBRyxDQUFBO0FBQTFCLHVCQUF1QjtJQXhCbkMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDbkMsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUVuQixpQkFBaUI7WUFFakIsd0JBQXdCO1lBQ3hCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsU0FBUyxFQUFFLG1CQUFtQjt3QkFDOUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixPQUFPLEVBQUUsVUFBVTtxQkFDcEI7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7S0FDRixDQUFDO0dBQ1csdUJBQXVCLENBQUc7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5cbmltcG9ydCB7IEZvcm1seUZpZWxkQ2hlY2tib3ggfSBmcm9tICcuL2NoZWNrYm94LnR5cGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlGaWVsZENoZWNrYm94XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG5cbiAgICBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGRDaGVja2JveCxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYm9vbGVhbicsXG4gICAgICAgICAgZXh0ZW5kczogJ2NoZWNrYm94JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seU1hdENoZWNrYm94TW9kdWxlIHt9XG4iXX0=