import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';

@Component({
	selector: 'app-appointment',
	templateUrl: './appointment.component.html',
	styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

	number:number = 0;
	constructor(
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
		this.number = this.getDays(2022,8);
	}

	getDays = (year:number, month:number) => {
		return new Date(year, month, 0).getDate();
	};

	openDialog() {
		const dialogRef = this.dialog.open(AppointmentViewComponent,{
			data: {
				animal: 'panda',
			  },
		});
	
		dialogRef.afterClosed().subscribe(result => {
		  console.log(`Dialog result: ${result}`);
		});
	  }

	  addDialog() {
		const dialogRef = this.dialog.open(AddAppointmentComponent,{
			data: {
				animal: 'panda',
			  },
		});
	
		dialogRef.afterClosed().subscribe(result => {
		  console.log(`Dialog result: ${result}`);
		});
	  }

}
