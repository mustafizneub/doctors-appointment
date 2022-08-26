import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-add-appointment',
	templateUrl: './add-appointment.component.html',
	styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		public dialogRef: MatDialogRef<AddAppointmentComponent>
	) { }

	ngOnInit(): void {
		console.log('');
	}

	close(data?: any) {
		this.dialogRef.close(data);
	}

}
