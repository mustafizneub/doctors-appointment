import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class CommonService {
	
	data =  new BehaviorSubject(null);
	private configUrl: string = "/assets/config/config.json";
	constructor(
		private httpClient: HttpClient
	) { }

	public getConfigFile() {
		let promise = this.httpClient.get(this.configUrl).toPromise().then((data: any) => {
			this.setIntoVariable(data);
		});
		return promise;
	}

	setIntoVariable(res: any) {
		
	}

}
