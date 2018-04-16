import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ReceivedComponent } from './components/received/received.component';
import { SentComponent } from './components/sent/sent.component';

const messagesRoutes: Routes = [
	{
		path: 'mensajes',
		component: MainComponent,
		children: [
			{ path: '', redirectTo: 'recibidos', pathMatch: 'full' },
			{ path: 'enviar', component: AddComponent, pathMatch: 'full' },
			{ path: 'recibidos', component: ReceivedComponent, pathMatch: 'full' },
			{ path: 'enviados', component: SentComponent, pathMatch: 'full' },
			{ path: 'enviados/:page', component: SentComponent, pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(messagesRoutes)
	],
	exports: [
		RouterModule
	]
})

export class MessagesRoutingModule {}