import { Component, Input } from '@angular/core';

import { blog } from '../../../models/blog.model';

@Component({
  selector: 'app-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrl: './blog-footer.component.css'
})
export class BlogFooterComponent {
  @Input('blog')
  blog!:blog
}
