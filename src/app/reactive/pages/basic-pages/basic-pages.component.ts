import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder} from '@angular/forms';


const rtx5090={
  name:'rtx5090',
  price:'5000',
  inStorage:'1'

}

@Component({
  templateUrl: './basic-pages.component.html',
  styles: [
  ]
})




export class BasicPagesComponent implements OnInit {
//public myForm : FormGroup = new FormGroup({
//name: new FormControl(''),
//price: new FormControl(0),
//storage: new FormControl(0)

//})

public myForm:FormGroup = this.fb.group({
  name:['',[Validators.required, Validators.minLength(3) ]],
  price:[0, [Validators.required, Validators.min(0)]],
  inStorage:[0, [Validators.required, Validators.min(0)]]
})
constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    //this.myForm.reset(rtx5090)
  }
 isValidField(field:string): boolean | null{
  return this.myForm.controls[field].errors && this.myForm.controls[field].touched
 }
 getFieldError(field: string): string | null{
if(!this.myForm.controls[field])return null     //&& !this.myForm.controls[field].errors


const errors =this.myForm.controls[field].errors || {}

for (const key of Object.keys(errors)) {


 switch(key){
  case 'required':
    return'este campo es requerido'

    case 'minlength':
      return `Minimo ${errors['minlength'].requiredLength} caracters.`
 }

}
return null;
 }



onSave():void{

  if(this.myForm.invalid)
   this.myForm.markAllAsTouched()
 
  console.log(this.myForm.value)

  this.myForm.reset({price:0, inStorage:0})
}

}



