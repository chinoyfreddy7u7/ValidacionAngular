import { Component } from '@angular/core';


interface MenuItem{
  title: string;
  route:string;

}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {

  public reactiveMenu:MenuItem[]=[
{title:'basicos', route:'./reactive/basic'},
{title:'dinamicos',route:'./reactive/dynamics'},
{title:'switches', route:'./reactive/switches'}

  ]
public authMenu: MenuItem[]=[
  {title:'auth',route:'./auth'}

]
}
