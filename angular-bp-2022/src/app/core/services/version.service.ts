import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  public data$: BehaviorSubject<number> = new BehaviorSubject<number>(6)

  constructor() { }

  public increment(): void{
    // increment l'observable
    this.data$.next(this.data$.value + 1 )
  }


}
