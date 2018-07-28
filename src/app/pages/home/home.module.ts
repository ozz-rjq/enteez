import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './../../components/header/header.component';
import { MainComponent } from '../../components/main/main.component';
import { SidebarComponent } from '../../components/main/sidebar/sidebar.component';

@NgModule({
  declarations: [
		HomeComponent,
		HeaderComponent,
		MainComponent,
		SidebarComponent
	],
	exports: [
		HomeComponent,
		HeaderComponent,
		MainComponent
	]
})

export class HomeModule { }
