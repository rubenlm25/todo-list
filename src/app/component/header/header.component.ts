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
      // document.getElementsByClassName("task")[0].classList.replace("light","dark");
      document.getElementsByClassName("header")[0].classList.replace("light","dark");
      document.getElementById("toogle").classList.replace("light","dark");
      
      
      
      
      // //delete class light
      // document.getElementsByClassName("add-form")[0].classList.remove("light");
      // document.getElementsByClassName("task")[0].classList.remove("light");
      // document.getElementsByClassName("header")[0].classList.remove("light");
      // document.getElementById("toogle").classList.remove("light");
      // //add class dark
      // document.getElementsByClassName("add-form")[0].classList.toggle("dark");
      // document.getElementsByClassName("task")[0].classList.toggle("dark");
      // document.getElementsByClassName("header")[0].classList.toggle("dark");
      // document.getElementById("toogle").classList.add("dark");
    }
    else if(document.getElementById("toogle").classList.contains("dark")){
      document.getElementsByClassName("add-form")[0].classList.replace("dark","light");
      let taskItem=document.getElementsByClassName("task");
      for(var i=0; i< taskItem.length; i++){
        document.getElementsByClassName("task")[i].classList.replace("dark","light");
      }
      // document.getElementsByClassName("task")[0].classList.replace("dark","light");
      document.getElementsByClassName("header")[0].classList.replace("dark","light");
      document.getElementById("toogle").classList.replace("dark","light");
      
      
      
      
      
      // //delete class dark
      // document.getElementsByClassName("add-form")[0].classList.remove("dark");
      // document.getElementsByClassName("task")[0].classList.remove("dark");
      // document.getElementsByClassName("header")[0].classList.remove("dark");
      // document.getElementById("toogle").classList.remove("dark");
      // //add class light
      // document.getElementsByClassName("add-form")[0].classList.toggle("light");
      // document.getElementsByClassName("task")[0].classList.toggle("light");
      // document.getElementsByClassName("header")[0].classList.toggle("light");
      // document.getElementById("toogle").classList.add("light");
    }   

    
  }

}
