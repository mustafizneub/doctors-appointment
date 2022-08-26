import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CommonService } from '../core/services/common.service';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';

@Component({
	selector: 'app-appointment',
	templateUrl: './appointment.component.html',
	styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit, OnDestroy {

	number: number = 0;
	appointment: Array<any> = [];
	unsubscribe$ = new Subject();
	date = new Date();
	param: any;
	constructor(
		public dialog: MatDialog,
		private service: CommonService,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.service.data.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
			if (res) {
				this.appointment.push(res);
			}
		})
		this.route.paramMap.subscribe(res => {
			if (res.get('id')) {
				this.number = this.getDays(this.date.getFullYear(), Number(res.get('id')));
			} else {
				this.number = this.getDays(this.date.getFullYear(), 1);
			}
		})

	}

	getDays = (year: number, month: number) => {
		return new Date(year, month, 0).getDate();
	};

	openDialog() {
		const dialogRef = this.dialog.open(AppointmentViewComponent, {
			data: {
				animal: 'panda',
			},
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

	ngOnDestroy(): void {
		this.unsubscribe$.complete();
	}
}
