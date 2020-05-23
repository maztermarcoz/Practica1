import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// se agrega modulo
import { ContactosComponent} from './contactos/contactos.component';
import { HorarioComponent} from './horario/horario.component';
import { ServiciosComponent} from './servicios/servicios.component';
import { PrecioComponent} from './precio/precio.component';
  import { from } from 'rxjs';

//Por ultimo, modificar el arreglo de las rutas...


const routes: Routes = [
  { path: 'contactos', component: ContactosComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'horario', component: HorarioComponent},
  { path: 'precio', component: PrecioComponent}


  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
