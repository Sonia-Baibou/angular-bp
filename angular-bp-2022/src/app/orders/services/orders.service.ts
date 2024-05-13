import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // private collection
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(
    []
  );

  // urlApi
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    //appel http = API
    this.refreshCollection();
  }

  public refreshCollection(): void {
    // appel http + y souscrire
    this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj);
          });
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public get collection(): Observable<Order[]> {
    this.refreshCollection();
    return this.collection$;
  }

  // public set collection(col: Observable<Order[]>){
  //   // collection = col
  //   this.collection$ = col;
  // }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.state = state;
    // appeler fonction update
    return this.update(obj);
  }

  public update(item: Order): Observable<any> {
    // appel http
    return this.http
      .put<Order>(`${this.urlApi}/orders/${item.id}`, item)
      .pipe(map((obj) => new Order({ ...obj })));
  }

  public add(item: Order): Observable<any> {
    // appel http
    return this.http.post<Order>(`${this.urlApi}/orders/`, item);
  }

  public getItemById(id: number): Observable<any> {
    // appel http
    return this.http.get<any>(`${this.urlApi}/orders/${id}`);
  }

  public delete(item: Order): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/orders/${item.id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }
}
