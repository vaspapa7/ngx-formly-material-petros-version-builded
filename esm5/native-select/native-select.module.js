import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormlyFieldNativeSelect } from './native-select.type';
var FormlyMatNativeSelectModule = /** @class */ (function () {
    function FormlyMatNativeSelectModule() {
    }
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
    return FormlyMatNativeSelectModule;
}());
export { FormlyMatNativeSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9uYXRpdmUtc2VsZWN0LyIsInNvdXJjZXMiOlsibmF0aXZlLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFzQi9EO0lBQUE7SUFBMEMsQ0FBQztJQUE5QiwyQkFBMkI7UUFwQnZDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3ZDLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsY0FBYztnQkFFZCx3QkFBd0I7Z0JBQ3hCLGtCQUFrQjtnQkFDbEIsWUFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLElBQUksRUFBRSxlQUFlOzRCQUNyQixTQUFTLEVBQUUsdUJBQXVCOzRCQUNsQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7eUJBQ3pCO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtTQUNGLENBQUM7T0FDVywyQkFBMkIsQ0FBRztJQUFELGtDQUFDO0NBQUEsQUFBM0MsSUFBMkM7U0FBOUIsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZvcm1seVNlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUvc2VsZWN0JztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5cbmltcG9ydCB7IEZvcm1seUZpZWxkTmF0aXZlU2VsZWN0IH0gZnJvbSAnLi9uYXRpdmUtc2VsZWN0LnR5cGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlGaWVsZE5hdGl2ZVNlbGVjdF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcblxuICAgIEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlTZWxlY3RNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnbmF0aXZlLXNlbGVjdCcsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlGaWVsZE5hdGl2ZVNlbGVjdCxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlNYXROYXRpdmVTZWxlY3RNb2R1bGUge31cbiJdfQ==