import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { CoreModule } from '../core/core.module';


@NgModule({
	declarations: [
		AppointmentComponent,
		AppointmentViewComponent,
		AddAppointmentComponent
	],
	imports: [
		CommonModule,
		AppointmentRoutingModule,
		CoreModule
	]
})
export class AppointmentModule { }
