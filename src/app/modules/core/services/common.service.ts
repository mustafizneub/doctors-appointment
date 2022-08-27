import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class CommonService {
	dataSource = new BehaviorSubject(null);
	data =  this.dataSource.asObservable();
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
