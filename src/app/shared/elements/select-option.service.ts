import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOption } from 'ng-select';

@Injectable({
	providedIn: 'root'
})
export class SelectOptionService {
	constructor() {}

	private loadOptions(options: Array<IOption>): Observable<Array<IOption>> {
		return new Observable((obs) => {
			setTimeout(() => {
				obs.next(this.cloneOptions(options));
				obs.complete();
			}, 5000);
		});
	}

	private cloneOptions(options: Array<IOption>): Array<IOption> {
		return options.map((option) => ({
			value: option.value,
			label: option.label
		}));
	}
}
