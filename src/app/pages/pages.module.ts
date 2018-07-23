import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
	  HomeModule
  ],
  exports: [
    HomeModule
  ],
  declarations: []
})
export class PagesModule { }
