import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
export { FieldType } from '@ngx-formly/material/form-field';
import { __decorate } from 'tslib';
import { NgModule } from '@angular/core';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { FormlyMatTextAreaModule } from '@ngx-formly/material/textarea';
import { FormlyMatRadioModule } from '@ngx-formly/material/radio';
import { FormlyMatCheckboxModule } from '@ngx-formly/material/checkbox';
import { FormlyMatMultiCheckboxModule } from '@ngx-formly/material/multicheckbox';
import { FormlyMatSelectModule } from '@ngx-formly/material/select';

let FormlyMaterialModule = class FormlyMaterialModule {
};
FormlyMaterialModule = __decorate([
    NgModule({
        imports: [
            FormlyMatFormFieldModule,
            FormlyMatInputModule,
            FormlyMatTextAreaModule,
            FormlyMatRadioModule,
            FormlyMatCheckboxModule,
            FormlyMatMultiCheckboxModule,
            FormlyMatSelectModule,
        ],
    })
], FormlyMaterialModule);

/*
 * Public API Surface of material
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyMaterialModule };
//# sourceMappingURL=ngx-formly-material.js.map
