import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { blog } from '../../models/blog.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs:blog[]=[]
  constructor(private httpClient:HttpClient){}
  ngOnInit():void{this.getAllblogs()}
  getAllblogs(){
    this.httpClient.get('assets/data/blogs.json').subscribe({
      next: (blogs)=>{
  this.blogs=blogs as blog[]
  
      },
      error:(courses)=>{
  console.log(courses);
  
      }
    })
  }
}
