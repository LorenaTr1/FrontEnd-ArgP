import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'nuevoproyecto',
    component: NewProyectoComponent
  },
  {
    path: 'editproyecto/:id',
    component: EditProyectoComponent
  },
  {
    path: 'experiencia',
    component: ExperienciaComponent
  },
  {
    path: 'nuevaexp',
    component: NewExperienciaComponent
  },
  {
    path: 'editexp/:id',
    component: EditExperienciaComponent
  },
  {
    path: 'educacion',
    component: EducacionComponent
  },
  {
    path: 'nuevaedu',
    component: NewEducacionComponent
  },
  {
    path: 'editedu/:id',
    component: EditEducacionComponent
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent
  },
  {
    path: 'nuevahab',
    component: NewHabilidadesComponent
  },
  {
    path: 'edithab/:id',
    component: EditHabilidadesComponent
  },
  {
    path: 'contact',
    component: ContactoComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
