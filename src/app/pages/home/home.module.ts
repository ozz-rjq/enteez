import { MainNavComponent } from './../../components/main/sidebar/main-nav/main-nav.component';
import { AdComponent } from './../../components/main/advertisment/ad.component';
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
		MainNavComponent,
		ServicesComponent,
		PeopleComponent,
		FeaturesComponent,
		AdComponent
	],
	exports: [
		HomeComponent,
		HeaderComponent,
		MainComponent
	]
})

export class HomeModule { }
