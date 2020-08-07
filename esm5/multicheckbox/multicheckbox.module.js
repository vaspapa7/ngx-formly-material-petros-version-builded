import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormlyFieldMultiCheckbox } from './multicheckbox.type';
var FormlyMatMultiCheckboxModule = /** @class */ (function () {
    function FormlyMatMultiCheckboxModule() {
    }
    FormlyMatMultiCheckboxModule = __decorate([
        NgModule({
            declarations: [FormlyFieldMultiCheckbox],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatCheckboxModule,
                FormlyMatFormFieldModule,
                FormlySelectModule,
                FormlyModule.forChild({
                    types: [
                        {
                            name: 'multicheckbox',
                            component: FormlyFieldMultiCheckbox,
                            wrappers: ['form-field'],
                        },
                    ],
                }),
            ],
        })
    ], FormlyMatMultiCheckboxModule);
    return FormlyMatMultiCheckboxModule;
}());
export { FormlyMatMultiCheckboxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGljaGVja2JveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9tdWx0aWNoZWNrYm94LyIsInNvdXJjZXMiOlsibXVsdGljaGVja2JveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQXVCaEU7SUFBQTtJQUEyQyxDQUFDO0lBQS9CLDRCQUE0QjtRQXJCeEMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDeEMsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUVuQixpQkFBaUI7Z0JBRWpCLHdCQUF3QjtnQkFDeEIsa0JBQWtCO2dCQUNsQixZQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLFNBQVMsRUFBRSx3QkFBd0I7NEJBQ25DLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQzt5QkFDekI7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1NBQ0YsQ0FBQztPQUNXLDRCQUE0QixDQUFHO0lBQUQsbUNBQUM7Q0FBQSxBQUE1QyxJQUE0QztTQUEvQiw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZvcm1seVNlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUvc2VsZWN0JztcbmltcG9ydCB7IEZvcm1seU1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5cbmltcG9ydCB7IEZvcm1seUZpZWxkTXVsdGlDaGVja2JveCB9IGZyb20gJy4vbXVsdGljaGVja2JveC50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRNdWx0aUNoZWNrYm94XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG5cbiAgICBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5U2VsZWN0TW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ211bHRpY2hlY2tib3gnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGRNdWx0aUNoZWNrYm94LFxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2Zvcm0tZmllbGQnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seU1hdE11bHRpQ2hlY2tib3hNb2R1bGUge31cbiJdfQ==