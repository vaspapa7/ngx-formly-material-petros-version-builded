import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { FormlyToggleTypeComponent } from './toggle.type';
var FormlyMatToggleModule = /** @class */ (function () {
    function FormlyMatToggleModule() {
    }
    FormlyMatToggleModule = __decorate([
        NgModule({
            declarations: [FormlyToggleTypeComponent],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatSlideToggleModule,
                FormlyMatFormFieldModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'toggle',
                            component: FormlyToggleTypeComponent,
                            wrappers: ['form-field'],
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatToggleModule);
    return FormlyMatToggleModule;
}());
export { FormlyMatToggleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL3RvZ2dsZS8iLCJzb3VyY2VzIjpbInRvZ2dsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUzRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFvQjFEO0lBQUE7SUFBb0MsQ0FBQztJQUF4QixxQkFBcUI7UUFsQmpDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3pDLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsb0JBQW9CO2dCQUNwQix3QkFBd0I7Z0JBQ3hCLFlBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxTQUFTLEVBQUUseUJBQXlCOzRCQUNwQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7eUJBQ3pCO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtTQUNGLENBQUM7T0FDVyxxQkFBcUIsQ0FBRztJQUFELDRCQUFDO0NBQUEsQUFBckMsSUFBcUM7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRTbGlkZVRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5pbXBvcnQgeyBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuaW1wb3J0IHsgRm9ybWx5VG9nZ2xlVHlwZUNvbXBvbmVudCB9IGZyb20gJy4vdG9nZ2xlLnR5cGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlUb2dnbGVUeXBlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgdHlwZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0b2dnbGUnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5VG9nZ2xlVHlwZUNvbXBvbmVudCxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlNYXRUb2dnbGVNb2R1bGUge31cbiJdfQ==