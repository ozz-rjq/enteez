import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './../../components/header/header.component';
import { MainComponent } from '../../components/main/main.component';

@NgModule({
  declarations: [
		HomeComponent,
		HeaderComponent,
		MainComponent
	],
	exports: [
		HomeComponent,
		HeaderComponent,
		MainComponent
	]
})

export class HomeModule { }
