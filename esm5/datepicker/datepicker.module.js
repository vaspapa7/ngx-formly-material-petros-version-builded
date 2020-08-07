import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormlyDatepickerTypeComponent } from './datepicker.type';
var FormlyMatDatepickerModule = /** @class */ (function () {
    function FormlyMatDatepickerModule() {
    }
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
    return FormlyMatDatepickerModule;
}());
export { FormlyMatDatepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFbkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFzQmxFO0lBQUE7SUFBd0MsQ0FBQztJQUE1Qix5QkFBeUI7UUFwQnJDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLDZCQUE2QixDQUFDO1lBQzdDLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsY0FBYztnQkFDZCxtQkFBbUI7Z0JBRW5CLHdCQUF3QjtnQkFDeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLElBQUksRUFBRSxZQUFZOzRCQUNsQixTQUFTLEVBQUUsNkJBQTZCOzRCQUN4QyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7eUJBQ3pCO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtTQUNGLENBQUM7T0FDVyx5QkFBeUIsQ0FBRztJQUFELGdDQUFDO0NBQUEsQUFBekMsSUFBeUM7U0FBNUIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5cbmltcG9ydCB7IEZvcm1seURhdGVwaWNrZXJUeXBlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLnR5cGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlEYXRlcGlja2VyVHlwZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuXG4gICAgRm9ybWx5TWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2RhdGVwaWNrZXInLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RGF0ZXBpY2tlclR5cGVDb21wb25lbnQsXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZm9ybS1maWVsZCddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5TWF0RGF0ZXBpY2tlck1vZHVsZSB7fVxuIl19