import { FeaturesComponent } from './../../components/main/features/features.component';
import { PeopleComponent } from './../../components/main/people/people.component';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './../../components/header/header.component';
import { MainComponent } from '../../components/main/main.component';
import { SidebarComponent } from '../../components/main/sidebar/sidebar.component';
import { ServicesComponent } from '../../components/main/services/services.component';

@NgModule({
  declarations: [
		HomeComponent,
		HeaderComponent,
		MainComponent,
		SidebarComponent,
		ServicesComponent,
		PeopleComponent,
		FeaturesComponent
	],
	exports: [
		HomeComponent,
		HeaderComponent,
		MainComponent
	]
})

export class HomeModule { }
