import { OnInit, OnDestroy, AfterViewInit, TemplateRef } from '@angular/core';
import { FieldType as CoreFieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
export declare abstract class FieldType<F extends FormlyFieldConfig = FormlyFieldConfig> extends CoreFieldType<F> implements OnInit, AfterViewInit, OnDestroy, MatFormFieldControl<any> {
    matPrefix: TemplateRef<any>;
    matSuffix: TemplateRef<any>;
    get formFieldControl(): MatFormFieldControl<any>;
    set formFieldControl(control: MatFormFieldControl<any>);
    errorStateMatcher: ErrorStateMatcher;
    stateChanges: Subject<void>;
    _errorState: boolean;
    private _control;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDescribedByIds(ids: string[]): void;
    onContainerClick(event: MouseEvent): void;
    get errorState(): boolean;
    get controlType(): string;
    get focused(): boolean;
    get disabled(): boolean;
    get required(): boolean;
    get placeholder(): string;
    get shouldPlaceholderFloat(): boolean;
    get value(): any;
    set value(value: any);
    get ngControl(): any;
    get empty(): boolean;
    get shouldLabelFloat(): boolean;
    get formField(): MatFormField;
}
