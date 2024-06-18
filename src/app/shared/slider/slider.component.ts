import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewChild, contentChild, input } from '@angular/core';
import { course } from '../../models/course.model';
import { feedbacks } from '../../models/feedbacks.model';
import { slideconfig } from '../../models/slide-config.model';
import { client } from '../../models/client.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, AfterViewInit {
@Input('items')
  items:string[] | feedbacks[] | client[]=[];

  dots:number[]=[];
activeSlideId=1;
   
@ContentChild('template')
template:TemplateRef<any> | undefined

@Output('select')
Onselect:EventEmitter<string>=new EventEmitter<string>()

@Input('slideConfig')
slideConfig= new slideconfig()

@ViewChild('sliderContainer')
sliderContainer!:ElementRef
sliderContainerWidth=0;
slidewidth=0;
elementToShow=1;
sliderwidth=0;
slidemarleft=0;
isSlideover=false;
@HostListener('window:resize',['$event'])
onScreenResize(){

this.setupslider


}
  ngOnInit(): void {
    
    
  }
  getitems(){
    return this.items as any[]
  }
  ngAfterViewInit(): void {
    
    this.setupslider()
   

  }

  setupslider(){
    if(window.innerWidth<500)
      this.elementToShow=this.slideConfig.breakpoints.sm;
    else if(window.innerWidth<900)
      this.elementToShow=this.slideConfig.breakpoints.md;
    else if(window.innerWidth<1300)
      this.elementToShow=this.slideConfig.breakpoints.lg;
    else
    this.elementToShow=this.slideConfig.breakpoints.xl;
  if(this.items.length<this.elementToShow){
    this.elementToShow=this.items.length
  }

    this.dots=Array(this.items.length-this.elementToShow+1);
let container=this.sliderContainer.nativeElement as HTMLElement
this.sliderContainerWidth=container.clientWidth;
this.slidewidth=this.sliderContainerWidth/this.elementToShow;
this.sliderwidth=this.slidewidth*this.items.length;
if (this.slideConfig.autoplay) this.autoplay()
  }

prev(){
  if(this.slidemarleft===0){
    return
  }
  this.activeSlideId--;
  this.slidemarleft=this.slidemarleft+this.slidewidth;
}
next(){
  const notShowingElemeentCount=this.items.length-this.elementToShow
  const possibleMargin=(-notShowingElemeentCount*this.slidewidth)
  if(this.slidemarleft<=possibleMargin){
    this.isSlideover=true;
    return
  }
  this.isSlideover=false;
  this.activeSlideId++;
this.slidemarleft=this.slidemarleft-this.slidewidth

}
move(slideId:number){
let differnce=slideId-this.activeSlideId;

if(differnce>0){
 // next
 for (let index = 0; index < differnce; index++) {
  this.next()
 }
}
else if(differnce<0){
//  prev
for (let index = 0; index < Math.abs(differnce); index++) {
  this.prev()
}


}
}

autoplay(){
setTimeout(() => {
  if(this.isSlideover===true){
    this.slidemarleft=this.slidewidth;
  }
  this.next()
  this.autoplay
}, 1000);
}
}
