import { Component, Input, input } from '@angular/core';
import { course } from '../../models/course.model';
import { blog } from '../../models/blog.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input("input")
  input!:course | blog;
@Input('type')
type='c'//c,b

castToCourse(input:course|blog){
return input as course;
}
castToBlog(input:course|blog){
  return input as blog;
  }
}
