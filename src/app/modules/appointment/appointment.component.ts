import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CommonService } from '../core/services/common.service';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';

@Component({
	selector: 'app-appointment',
	templateUrl: './appointment.component.html',
	styleUrls: ['./appointment.component.scss'],
	providers: [
		DatePipe
	]
})
export class AppointmentComponent implements OnInit, OnDestroy {

	number: number = 0;
	appointment: Array<any> = [];
	unsubscribe$ = new Subject();
	date = new Date();
	param: any;
	month!: number;
	constructor(
		public dialog: MatDialog,
		private service: CommonService,
		private route: ActivatedRoute,
		private datePipe: DatePipe
	) {
		if (localStorage.getItem('appointment')) {
			this.appointment = JSON.parse(localStorage.getItem('appointment')!);
		}
	}

	ngOnInit(): void {
		this.service.data.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
			if (res) {
				this.appointment.push(res);
				localStorage.setItem('appointment', JSON.stringify(this.appointment));
			}
		});
		this.route.paramMap.subscribe(res => {
			if (res.get('id')) {
				this.month = Number(res.get('id')) - 1;
				this.number = this.getDays(this.date.getFullYear(), Number(res.get('id')));
			} else {
				this.month = this.date.getMonth();
				this.number = this.getDays(this.date.getFullYear(), this.month);
			}
		});
	}

	getDays = (year: number, month: number) => {
		return new Date(year, month, 0).getDate();
	};

	openDialog(item: any) {
		this.dialog.open(AppointmentViewComponent, {
			data: item
		});
	}

	getAppointment(date: number) {
		let array = this.appointment.filter(res =>
			res.date === this.datePipe.transform(new Date(this.date.getFullYear(), this.month, date), 'yyyy-MM-dd'))
			.sort((a, b) => {
				return new Date(a.date + " " + a.time).getTime() - new Date(b.date + " " + b.time).getTime();
			});
		return array;
	}

	trackAppointment(index: number, data: any) {
		return data ? data : undefined;
	}

	ngOnDestroy(): void {
		this.unsubscribe$.complete();
	}
}
