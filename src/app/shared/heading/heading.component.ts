import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
@Input('subheading')
subheading='';

@Input('heading1')
heading1='';
@Input('heading2')
heading2='';
@Input('heading3')
heading3='';

@Input('specialheading')
specialheading:number|string=2;

@Input('align')
align='c';

}
