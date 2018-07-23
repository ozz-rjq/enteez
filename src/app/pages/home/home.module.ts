import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
		HomeComponent,
		HeaderComponent
	],
	exports: [
		HomeComponent,
		HeaderComponent
	]
})

export class HomeModule { }
