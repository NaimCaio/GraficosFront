import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemiDonutComponent } from './semi-donut/semi-donut.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { FormsModule } from '@angular/forms';
import { GraphPageComponent } from './graph-page/graph-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    SemiDonutComponent,
    SidenavComponent,
    LineGraphComponent,
    BarGraphComponent,
    GraphPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
