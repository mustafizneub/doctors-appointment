import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'month', pathMatch: 'full' },
	{ path: '', loadChildren: () => import('./modules/appointment/appointment.module').then(m => m.AppointmentModule) },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
