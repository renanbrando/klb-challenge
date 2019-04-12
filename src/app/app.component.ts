import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'klb-challenge';

  menus = [
    { title: "Painel de Gestão", icon: "globe" },
    { title: "Conta Digital", icon: "at"}, 
    { title: "Ant. de Recebíveis >>", icon: "chart-bar"}
  ]

  toggleNav() {
    if (document.getElementById("mySidenav").style.width == "250px" ) {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
}
