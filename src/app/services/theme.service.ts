import { Injectable, Renderer2,RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private render : Renderer2;
  private colorTheme: any;

  constructor( renderFactory: RendererFactory2) {
    this.render= renderFactory.createRenderer(null, null)
   }

   initTheme(){
    this.getColorTheme();
    this.render.addClass(document.body,this.colorTheme)
   }

   update(theme: "dark-mode" | "light-mode" ){
      this.setColorTheme(theme)
      const previousColorTheme = (theme === "dark-mode"? "light-mode":"dark-mode");
      this.render.removeClass(document.body, previousColorTheme)
      this.render.addClass(document.body,theme)
      console.log(theme)
   }

   isDarkMode(){
    return this.colorTheme=== "dark-mode"
   }

   private setColorTheme(theme:string){
    this.colorTheme=theme;
    localStorage.setItem("user-theme",theme);
   }

   private getColorTheme(){
    if(localStorage.getItem("user-theme")){
      this.colorTheme=localStorage.getItem("user-theme");
    }else{
      this.colorTheme="light-mode"
    }
   }
}
