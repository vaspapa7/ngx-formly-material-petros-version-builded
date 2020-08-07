import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { FormlyToggleTypeComponent } from './toggle.type';
let FormlyMatToggleModule = class FormlyMatToggleModule {
};
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
export { FormlyMatToggleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL3RvZ2dsZS8iLCJzb3VyY2VzIjpbInRvZ2dsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUzRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFvQjFELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0NBQUcsQ0FBQTtBQUF4QixxQkFBcUI7SUFsQmpDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO1FBQ3pDLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtZQUN4QixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsU0FBUyxFQUFFLHlCQUF5Qjt3QkFDcEMsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtpQkFDRjthQUNGLENBQUM7U0FDSDtLQUNGLENBQUM7R0FDVyxxQkFBcUIsQ0FBRztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcbmltcG9ydCB7IEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5pbXBvcnQgeyBGb3JtbHlUb2dnbGVUeXBlQ29tcG9uZW50IH0gZnJvbSAnLi90b2dnbGUudHlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Zvcm1seVRvZ2dsZVR5cGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgRm9ybWx5TWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3RvZ2dsZScsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlUb2dnbGVUeXBlQ29tcG9uZW50LFxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2Zvcm0tZmllbGQnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seU1hdFRvZ2dsZU1vZHVsZSB7fVxuIl19