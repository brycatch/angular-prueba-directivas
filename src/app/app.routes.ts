import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { usuarioRoutes } from './components/usuario/usuario.routes';
import { UsuarioComponent } from './components/usuario/usuario.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario', component: UsuarioComponent, children: usuarioRoutes },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(appRoutes);
