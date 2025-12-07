import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './modules/auth/guards/role.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./modules/reportes/reportes.module').then(m => m.ReportesModule),
    canActivate: [RoleGuard]
  },
  { 
    path: 'sedes', 
    loadChildren: () => import('./modules/sedes/sedes.module').then(m => m.SedesModule),
    canActivate: [RoleGuard]
  },
  { 
    path: 'personas', 
    loadChildren: () => import('./modules/personas/personas.module').then(m => m.PersonasModule),
    canActivate: [RoleGuard]
  },
  { 
    path: 'empleados', 
    redirectTo: '/personas/empleados'
  },
  { 
    path: 'pacientes', 
    redirectTo: '/personas/pacientes'
  },
  { 
    path: 'citas', 
    loadChildren: () => import('./modules/citas/citas.module').then(m => m.CitasModule),
    canActivate: [RoleGuard]
  },
  { 
    path: 'historias', 
    loadChildren: () => import('./modules/historias/historias.module').then(m => m.HistoriasModule),
    canActivate: [RoleGuard]
  },
  { 
    path: 'medicamentos', 
    loadChildren: () => import('./modules/medicamentos/medicamentos.module').then(m => m.MedicamentosModule),
    canActivate: [RoleGuard]
  },
  { 
    path: 'equipamiento', 
    loadChildren: () => import('./modules/equipamiento/equipamiento.module').then(m => m.EquipamientoModule),
    canActivate: [RoleGuard]
  },
  { 
    path: 'auditoria', 
    loadChildren: () => import('./modules/auditoria/auditoria.module').then(m => m.AuditoriaModule),
    canActivate: [RoleGuard],
    data: { roles: ['Administrador'] }
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
