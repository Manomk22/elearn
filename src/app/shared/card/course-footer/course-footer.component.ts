import { Component, Input, input } from '@angular/core';
import { course } from '../../../models/course.model';


@Component({
  selector: 'app-course-footer',
  templateUrl: './course-footer.component.html',
  styleUrl: './course-footer.component.css'
})
export class CourseFooterComponent {
  @Input('course')
  course!:course
}
