import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent {
public myForm: FormGroup= this.fb.group({
gender: ['M', Validators.required],
wantNotification: [true, Validators.required],
termsAndCondition: [false, Validators.requiredTrue]
})

constructor (private fb: FormBuilder) {}

isValidField(field:string): boolean | null{
  return this.myForm.controls[field].errors && this.myForm.controls[field].touched
 }

onSave(){
  if(this.myForm.invalid){
     this.myForm.markAllAsTouched()
   return
  }

}

}