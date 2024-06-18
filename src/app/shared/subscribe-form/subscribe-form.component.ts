import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrl: './subscribe-form.component.css'
})
export class SubscribeFormComponent {
email:string | undefined=undefined;
message:string='';
errorMessage:string='';
constructor(private httpClient:HttpClient){

}
submit(form:NgForm){
this.httpClient.post('/api/subscriptionForm.php',form.value).subscribe(
  (data:any)=>{
    if(this.message==='SUCCESS'){
      this.message='thank you.';

    }
    console.log(data);
    
  },
  error=>{
    this.errorMessage=error.error;
    console.log(error);
    
  }
)

}
}
