import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';

export const usuarioRoutes: Routes = [
    { path: ':id/nuevo', component: UsuarioNuevoComponent },
    { path: ':id/detalle', component: UsuarioDetalleComponent },
    { path: ':id/editar', component: UsuarioEditarComponent },
    { path: '**', redirectTo: '/usuario' },

];
