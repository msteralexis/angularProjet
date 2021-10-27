import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})



export class AppComponent {
  title = 'TestTP1partie1';
  seance = 'Séance Tp1';
  resumeSeance = "Prise en main d'angular, première applciation";
  nomEtu = "Jean";
  prenomEtu = "Martin";
  retNomEtu(){
    return "Jean";
  }

  retPrenomEtu(){
    return "Martin";
  }

  estAuth = true;

  
  
  constructor() {

    this.estAuth = false;
    
    setTimeout(function(){
      this.estAuth = false;
    },3000);

  }

}
