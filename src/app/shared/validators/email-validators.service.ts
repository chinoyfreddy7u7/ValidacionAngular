import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, Subscriber, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {
  constructor() { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
   const email= control.value;

   const  httpCallObservable = new Observable<ValidationErrors|null>((Subscriber)=>{
    console.log({email})

if(email ==='fernando@google.co'){
  Subscriber.next({emailTaken:true})
  Subscriber.complete
}
//se pone nuevamente el next para dar a entender que el sig valor será nulo ya que no se repetira la operacion

Subscriber.next(null)
Subscriber.complete()


   }).pipe(
    delay(2000)
   )

   return httpCallObservable


   
   //validate(control: AbstractControl): Observable<ValidationErrors | null> {
   // const email= control.value;
   // console.log({email})
   // return of ({
    // emailTaken:true
   // }).pipe(
    // delay(2000)
    //)


  }


}
