import { Component } from '@angular/core';
import { slideconfig } from '../../models/slide-config.model';
import { HttpClient } from '@angular/common/http';
import { client } from '../../models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  constructor(private httpClient:HttpClient){}
slideConfig = new slideconfig()
clients!:client[];
ngOnInit():void{
  this.slideConfig.breakpoints={sm:1,md:2,lg:3,xl:5}
  this.slideConfig.showDots=false;
  this.slideConfig.showLeftRightArrows=false;
  this.slideConfig.autoplay=true;
  this.getAllClient()
}

getAllClient(){
  this.httpClient.get('assets/data/clients.json').subscribe({
    next: (clients)=>{
this.clients=clients as client[];

    },
    error:(courses)=>{
console.log(courses);

}
})
}
  }
