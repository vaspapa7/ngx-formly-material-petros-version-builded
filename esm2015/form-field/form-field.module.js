import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormlyWrapperFormField } from './form-field.wrapper';
let FormlyMatFormFieldModule = class FormlyMatFormFieldModule {
};
FormlyMatFormFieldModule = __decorate([
    NgModule({
        declarations: [FormlyWrapperFormField],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'form-field',
                        component: FormlyWrapperFormField,
                    },
                ],
            }),
        ],
    })
], FormlyMatFormFieldModule);
export { FormlyMatFormFieldModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkLyIsInNvdXJjZXMiOlsiZm9ybS1maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWtCOUQsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7Q0FBRyxDQUFBO0FBQTNCLHdCQUF3QjtJQWhCcEMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDdEMsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxZQUFZO3dCQUNsQixTQUFTLEVBQUUsc0JBQXNCO3FCQUNsQztpQkFDRjthQUNGLENBQUM7U0FDSDtLQUNGLENBQUM7R0FDVyx3QkFBd0IsQ0FBRztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRm9ybWx5V3JhcHBlckZvcm1GaWVsZCB9IGZyb20gJy4vZm9ybS1maWVsZC53cmFwcGVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5V3JhcHBlckZvcm1GaWVsZF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHdyYXBwZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZm9ybS1maWVsZCcsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlXcmFwcGVyRm9ybUZpZWxkLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5TWF0Rm9ybUZpZWxkTW9kdWxlIHt9XG4iXX0=