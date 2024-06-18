import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
@Input('disabled')
disabled=false;

  @Input('size')
size='s'; //s,m,l

 @Input ('shade')
shade='na'; //d,l,w,na
@Input('animation')
animation='c'; //c,f
@Input('name')
name=''; 
}
