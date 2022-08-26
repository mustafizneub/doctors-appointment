import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-appointment-view',
	templateUrl: './appointment-view.component.html',
	styleUrls: ['./appointment-view.component.scss']
})
export class AppointmentViewComponent implements OnInit {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data:any,
		public dialogRef: MatDialogRef<AppointmentViewComponent>
	) { }

	ngOnInit(): void {
		console.log('');
	}

	close(){
		this.dialogRef.close();
	}

}
