import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
  PageTitle = "Angular Data Binding Practice";
  a = 5;
  b = 7;

  imageUrl : string = "https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  disable: boolean = false;

  toggleChange (){
    this.disable = !this.disable;
  }

  handleButtonClick(){
    console.log("Button clicked")
  }

  userName: string = "";


  isError : boolean = true;
}
