import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../../core/services/common.service';

@Component({
	selector: 'app-add-appointment',
	templateUrl: './add-appointment.component.html',
	styleUrls: ['./add-appointment.component.scss'],
	providers:[
		DatePipe
	]
})
export class AddAppointmentComponent implements OnInit {

	appointmentForm!: FormGroup;
	minDate = new Date();
	minTime = '';
	constructor(
		public dialogRef: MatDialogRef<AddAppointmentComponent>,
		public formBuilder: FormBuilder,
		private service:CommonService,
		private datePipe:DatePipe
	) { }

	ngOnInit(): void {
		this.initializeForm();
		this.minTime = this.datePipe.transform(new Date(), 'hh:mm a')!;
		this.date.valueChanges.subscribe(res=>{
			if (res){
				if (new Date()<new Date(res)){
					this.minTime = '00:01 am';
				} else {
					this.minTime = this.datePipe.transform(new Date(), 'hh:mm a')!;
				}
			}
		});
	}

	initializeForm() {
		this.appointmentForm = this.formBuilder.group({
			firstname: [null, [Validators.required, Validators.maxLength(40)]],
			lastname: [null, [Validators.required, Validators.maxLength(40)]],
			email: [null, [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
			gender: [null],
			age: [null],
			date: [null, [Validators.required]],
			time: [null, [Validators.required]],
		});
	}

	get firstname(): AbstractControl {
		return this.appointmentForm.get('firstname')!;
	}

	get lastname(): AbstractControl {
		return this.appointmentForm.get('lastname')!;
	}

	get email(): AbstractControl {
		return this.appointmentForm.get('email')!;
	}

	get date(): AbstractControl {
		return this.appointmentForm.get('date')!;
	}

	get time(): AbstractControl {
		return this.appointmentForm.get('time')!;
	}

	submit() {
		if (this.appointmentForm.valid) {
			this.appointmentForm.value.date = this.datePipe.transform(this.appointmentForm.value.date,'yyyy-MM-dd');
			this.service.dataSource.next(this.appointmentForm.value);
			this.close(this.appointmentForm.value);
		}
	}

	close(data?: any) {
		this.dialogRef.close(data);
	}

}
