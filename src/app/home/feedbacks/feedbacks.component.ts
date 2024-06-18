
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, input } from '@angular/core';
import { feedbacks } from '../../models/feedbacks.model';

import { slideconfig } from '../../models/slide-config.model';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent implements OnInit {
  feedbacks:feedbacks[]=[];

 slideConfig = new slideconfig()

  constructor(private httpClient:HttpClient){}

 

  ngOnInit():void{
     this.slideConfig.breakpoints={sm:1,md:1,lg:2,xl:2}
     this.slideConfig.showLeftRightArrows=false;
     this.slideConfig.showDots=true
    this.getAllfeedbacks()}


  getAllfeedbacks(){
    this.httpClient.get('assets/data/feedbacks.json').subscribe({
      next: (feedbacks)=>{
  this.feedbacks=feedbacks as feedbacks[];
  
      },
      error:(courses)=>{
  console.log(courses);
  
      }
    })
  }
}
