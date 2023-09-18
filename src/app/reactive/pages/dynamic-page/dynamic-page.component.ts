import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  public myForm:FormGroup= this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    favGames: this.fb.array([
      ['Genshin Impact', Validators.required],
      ['World Of Tanks', Validators.required]
    ])
  })
  public newFavorite: FormControl= new FormControl('',Validators.required)
constructor(private fb: FormBuilder){}

get favGames(){
  return this.myForm.get('favGames') as FormArray
}
isValidField(field:string): boolean | null{
  return this.myForm.controls[field].errors && this.myForm.controls[field].touched
 }
 isvalidFieldInArray(formArray: FormArray, index: number){

  return formArray.controls[index].errors
  &&   formArray.controls[index].touched

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
onAddToFavorites():void{
if(
  this.newFavorite.invalid
)
return;
const newGame = this.newFavorite.value

this.newFavorite.reset()
}

onDeleteFavorite(index:number):void{

  this.favGames.removeAt(index)
}



onSubmit(): void{
  if (this.myForm.invalid) {
    this.myForm.markAllAsTouched();
    return;
  }


  console.log(this.myForm.value);

 ( this.myForm.controls['favoriteGames'] as FormArray ) = this.fb.array([]);
  this.myForm.reset()

}

}
