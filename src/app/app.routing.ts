import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowedComponent } from './components/followed/followed.component';


import { UserGuard } from './services/user.guard';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent, pathMatch: 'full' },
	{ path: 'registro', component: RegisterComponent, pathMatch: 'full' },
	{ path: 'mis-datos', component: UserEditComponent, pathMatch: 'full', canActivate:[UserGuard] },
	{ path: 'gente', component: UsersComponent, pathMatch: 'full', canActivate:[UserGuard] },
	{ path: 'gente/:page', component: UsersComponent, pathMatch: 'full', canActivate:[UserGuard] },
	{ path: 'timeline', component: TimelineComponent, pathMatch: 'full', canActivate:[UserGuard] },
	{ path: 'perfil/:id', component: ProfileComponent, pathMatch: 'full', canActivate:[UserGuard] },
	{ path: 'siguiendo/:id/:page', component: FollowingComponent, pathMatch: 'full', canActivate:[UserGuard] },
	{ path: 'seguidores/:id/:page', component: FollowedComponent, pathMatch: 'full', canActivate:[UserGuard] },
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: '**', component: HomeComponent, pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);