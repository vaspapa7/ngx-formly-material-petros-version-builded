import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormlyFieldRadio } from './radio.type';
var FormlyMatRadioModule = /** @class */ (function () {
    function FormlyMatRadioModule() {
    }
    FormlyMatRadioModule = __decorate([
        NgModule({
            declarations: [FormlyFieldRadio],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatRadioModule,
                FormlyMatFormFieldModule,
                FormlySelectModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'radio',
                            component: FormlyFieldRadio,
                            wrappers: ['form-field'],
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatRadioModule);
    return FormlyMatRadioModule;
}());
export { FormlyMatRadioModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1mb3JtbHkvbWF0ZXJpYWwvcmFkaW8vIiwic291cmNlcyI6WyJyYWRpby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBc0JoRDtJQUFBO0lBQW1DLENBQUM7SUFBdkIsb0JBQW9CO1FBcEJoQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoQyxPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLGNBQWM7Z0JBRWQsd0JBQXdCO2dCQUN4QixrQkFBa0I7Z0JBQ2xCLFlBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsZ0JBQWdCOzRCQUMzQixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7eUJBQ3pCO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtTQUNGLENBQUM7T0FDVyxvQkFBb0IsQ0FBRztJQUFELDJCQUFDO0NBQUEsQUFBcEMsSUFBb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtbHlTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlL3NlbGVjdCc7XG5cbmltcG9ydCB7IEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5cbmltcG9ydCB7IEZvcm1seUZpZWxkUmFkaW8gfSBmcm9tICcuL3JhZGlvLnR5cGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlGaWVsZFJhZGlvXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuXG4gICAgRm9ybWx5TWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIEZvcm1seVNlbGVjdE1vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgdHlwZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdyYWRpbycsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlGaWVsZFJhZGlvLFxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2Zvcm0tZmllbGQnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seU1hdFJhZGlvTW9kdWxlIHt9XG4iXX0=