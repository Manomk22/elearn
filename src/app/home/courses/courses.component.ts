import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { course } from '../../models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses:course[]=[]
  filteredCourses:course[]=[]
  categories:string[]=[]

constructor(private httpClient:HttpClient){}
ngOnInit():void{this.getAllCourses()}
getAllCourses(){
  this.httpClient.get('assets/data/courses.json').subscribe({
    next: (courses)=>{
this.courses=courses as course[]
this.filteredCourses=courses as course[]
this.getCategories()
    },
    error:(courses)=>{
console.log(courses);

    }
  })
}
getCategories(){
  this.categories=this.courses.map((course)=>{return course.category})

  let uniqueCate=new Set(this.categories)
 this.categories=[...uniqueCate]
  

}
FilterCourse(categori:string){
this.filteredCourses=this.courses.filter((course)=>{return course.category===categori})

}
}
