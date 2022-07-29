import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  opened=false
  nome="Caio Naim"
  job="Analista Gráfico"
  isDarkMode:boolean
  constructor( private themeService : ThemeService,
     private router : Router,
     private route : ActivatedRoute
     ) {
    this.themeService.initTheme();
    this.isDarkMode= this.themeService.isDarkMode();
   }

  ngOnInit(): void {
  }

  toggleDarkMode(){
    this.isDarkMode= this.themeService.isDarkMode();
    if(this.isDarkMode){
      this.themeService.update("light-mode");
    }else{
      this.themeService.update("dark-mode");
    }
    //window.location.reload();
    this.resetComponent()
    
  }

  resetComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation ='reload'
    console.log(this.router.url)
    this.router.navigate([this.router.url],{
      relativeTo: this.route
    })
  }
  

}
