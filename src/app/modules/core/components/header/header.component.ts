import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddAppointmentComponent } from 'src/app/modules/appointment/add-appointment/add-appointment.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	date = new Date().getMonth() + 1;
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
	];
	constructor(
		public dialog: MatDialog,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(res => {
			if (res.get('id')) {
				this.date =  Number(res.get('id'));
			}
		});
	}

	changeMonth(event: any) {
		this.router.navigate(['month/' + event.value]);
	}

	addDialog() {
		const dialogRef = this.dialog.open(AddAppointmentComponent);
	}
}
