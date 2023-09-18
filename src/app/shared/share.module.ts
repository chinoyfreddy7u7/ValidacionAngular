import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  //lo exportamos para utilizarlo fuera de este modulo
  exports:[
    SideMenuComponent
  ]
})
export class SharedModule { }
