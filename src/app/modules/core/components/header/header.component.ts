import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddAppointmentComponent } from 'src/app/modules/appointment/add-appointment/add-appointment.component';
import { CommonService } from '../../services/common.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	months = [
		{
			name: 'January',
			value: 1
		},
		{
			name: 'February',
			value: 2
		},
		{
			name: 'March',
			value: 3
		},
		{
			name: 'April',
			value: 4
		},
		{
			name: 'May',
			value: 5
		},
		{
			name: 'June',
			value: 6
		},
		{
			name: 'July',
			value: 7
		},
		{
			name: 'August',
			value: 8
		},
		{
			name: 'Septembar',
			value: 9
		},
		{
			name: 'Ocotbar',
			value: 10
		},
		{
			name: 'Novembar',
			value: 11
		},
		{
			name: 'Decembar',
			value: 12
		}
	]
	constructor(
		public dialog: MatDialog,
		private service: CommonService,
		private router:Router
	) { }

	ngOnInit(): void {
		console.log('header works');
	}

	changeMonth(event: any) {
		this.router.navigate(['month/'+event.value])
	}

	addDialog() {
		const dialogRef = this.dialog.open(AddAppointmentComponent, {
			data: {
				animal: 'panda',
			},
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
			if (result) {
				this.service.data.next(result);
			}
		});
	}
}
