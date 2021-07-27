import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  modeSetup(){
    if(document.getElementById("toogle").classList.contains("light")){
      document.getElementsByClassName("add-form")[0].classList.replace("light","dark");
      
      let taskItem=document.getElementsByClassName("task");

      for(var i=0; i< taskItem.length; i++){
        document.getElementsByClassName("task")[i].classList.replace("light","dark");
      }

      document.getElementsByClassName("header")[0].classList.replace("light","dark");
      document.getElementById("toogle").classList.replace("light","dark");
      document.getElementById("bcg").classList.replace("light","dark");
    }
    else if(document.getElementById("toogle").classList.contains("dark")){
      document.getElementsByClassName("add-form")[0].classList.replace("dark","light");
      
      let taskItem=document.getElementsByClassName("task");

      for(var i=0; i< taskItem.length; i++){
        document.getElementsByClassName("task")[i].classList.replace("dark","light");
      }

      document.getElementsByClassName("header")[0].classList.replace("dark","light");
      document.getElementById("toogle").classList.replace("dark","light");
      document.getElementById("bcg").classList.replace("dark","light");
    }   

    
  }

}
