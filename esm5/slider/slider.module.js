import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { FormlySliderTypeComponent } from './slider.type';
var FormlyMatSliderModule = /** @class */ (function () {
    function FormlyMatSliderModule() {
    }
    FormlyMatSliderModule = __decorate([
        NgModule({
            declarations: [FormlySliderTypeComponent],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatSliderModule,
                FormlyMatFormFieldModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'slider',
                            component: FormlySliderTypeComponent,
                            wrappers: ['form-field'],
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatSliderModule);
    return FormlyMatSliderModule;
}());
export { FormlyMatSliderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L21hdGVyaWFsL3NsaWRlci8iLCJzb3VyY2VzIjpbInNsaWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFM0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBb0IxRDtJQUFBO0lBQW9DLENBQUM7SUFBeEIscUJBQXFCO1FBbEJqQyxRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN6QyxPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLGVBQWU7Z0JBQ2Ysd0JBQXdCO2dCQUN4QixZQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsU0FBUyxFQUFFLHlCQUF5Qjs0QkFDcEMsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3lCQUN6QjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7U0FDRixDQUFDO09BQ1cscUJBQXFCLENBQUc7SUFBRCw0QkFBQztDQUFBLEFBQXJDLElBQXFDO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U2xpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7IEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5pbXBvcnQgeyBGb3JtbHlTbGlkZXJUeXBlQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXIudHlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Zvcm1seVNsaWRlclR5cGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgdHlwZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdzbGlkZXInLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5U2xpZGVyVHlwZUNvbXBvbmVudCxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlNYXRTbGlkZXJNb2R1bGUge31cbiJdfQ==