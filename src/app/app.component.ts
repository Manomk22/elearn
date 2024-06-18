import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuScrolled=false;
  isScrolled=false;
  @HostListener('window:scroll', [ '$ event'])
  scrollCheck(){
if(window.pageYOffset>120)
this.isMenuScrolled=true;
else
this.isMenuScrolled=false;



  }
  opensidebar(){
this.isScrolled=true;
  }
  closesidebar(){
this.isScrolled=false;
  }
  scrolltotop(){
    document.body.scrollIntoView({behavior:'smooth'})
  }
}
