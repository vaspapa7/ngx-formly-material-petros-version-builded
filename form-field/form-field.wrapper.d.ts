import { OnInit, OnDestroy, Renderer2, AfterViewInit, AfterContentChecked, TemplateRef, ElementRef, ViewContainerRef } from '@angular/core';
import { FormlyFieldConfig, FieldWrapper } from '@ngx-formly/core';
import { MatFormField } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
interface MatFormlyFieldConfig extends FormlyFieldConfig {
    _matprefix: TemplateRef<any>;
    _matsuffix: TemplateRef<any>;
    __formField__: FormlyWrapperFormField;
}
export declare class FormlyWrapperFormField extends FieldWrapper<MatFormlyFieldConfig> implements OnInit, OnDestroy, AfterViewInit, AfterContentChecked {
    private renderer;
    private elementRef;
    private focusMonitor;
    fieldComponent: ViewContainerRef;
    formField: MatFormField;
    field: MatFormlyFieldConfig;
    private initialGapCalculated;
    constructor(renderer: Renderer2, elementRef: ElementRef, focusMonitor: FocusMonitor);
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export {};
