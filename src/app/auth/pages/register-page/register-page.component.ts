import { cantBeStrider } from './../../../shared/validators/validators';
import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as customValidators from '../../../shared/validators/validators';
;
//import { firstNameAndLastnamePattern, emailPattern } from '../../../shared/validators/validators';
import { validatorsService } from '../../../shared/services/validators.services';
import { EmailValidator } from '../../../shared/validators/email-validators.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {


  public myForm: FormGroup =this.fb.group({
    name:['',[Validators.required,Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    //email:['',[Validators.required,Validators.pattern(this.validatorsService.emailPattern) ],[new emailValidator()]],
    email:['',[Validators.required,Validators.pattern(this.validatorsService.emailPattern) ],[this.EmailValidator]],
    userName:['',[Validators.required,this.validatorsService.cantBeStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required]],
  },
  {
    validators:[
     this.validatorsService.isFieldOneEqualFieldTwo('password','password2'),
    ]
  })
  constructor(private fb: FormBuilder,
              private validatorsService: validatorsService,
              private EmailValidator: EmailValidator
              ){}

  isValidField(field:string){
   return this.validatorsService.isValidField(this.myForm,field)
  }
  OnSubmit(){
    this.myForm.markAllAsTouched()
  }
}
