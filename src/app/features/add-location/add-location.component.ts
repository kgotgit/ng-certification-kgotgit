import {Component, ChangeDetectionStrategy, OnInit, OnDestroy, EventEmitter, Output, forwardRef} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Component({
  'selector':'add-location',
  'templateUrl':'./add-location.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class AddLocationComponent implements OnInit,OnDestroy{

  
  @Output() addZip=new EventEmitter<string>();

  _formGroup:FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit(){
    this.createFormGroup();
  }


  /**
   * initalize the reactive forms object.
   */
  createFormGroup(){
    this._formGroup=this.fb.group({
      zip:new FormControl({value:"",disabled:false},this.zipValidator)
    })
  }


  /**
   * Listens to click event and emits the entered zip code to the parent component via Output even emitter.
   */
  addLocation($event){
    if(!this._formGroup.invalid){
      //get value from formControl
       let zipCode=this._formGroup.controls.zip.value;
      //emit to parent component
       this.addZip.emit(zipCode);
      //clear and mark as pristine and untouched so that user can enter next item
       this._formGroup.controls.zip.setValue(null);
       this._formGroup.controls.zip.markAsPristine();
       this._formGroup.controls.zip.markAsTouched();
    }else{
      //mark as dirty so that an error message can be shown to the user.
      this._formGroup.controls.zip.markAsDirty();
    }   
    
  }

  /**
   * zip code validator
   */
  zipValidator(control:FormControl):ValidationErrors{
    if(control.enabled){
        let zipRegx=new RegExp(/^\d{5}$/);
        if(!zipRegx.test(control.value)){
          return {'invalidZip':'Valid five digit zip code is required. eg., 12345'} as ValidationErrors;
        }      
    }
    return null;
  }

  ngOnDestroy(){

  }


}