import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	providers: [UserService]
})

export class HomeComponent implements OnInit {
	public title: string;
	public identity;

	constructor(
		private _userService:UserService
	){
		this.title = 'Bienvenid@ a Social Angular';
	}

	ngOnInit() {
		console.log('Componente home cargado');
		this.identity = this._userService.getIdentity();
	}
}