import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  // private collection
  private collection$!: Observable<Order[]>;

  // urlApi
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    //appel http = API
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map((tab)=>{
        return tab.map((obj)=>{
          return new Order(obj)
        })
      })
    )
  }

  public get collection(): Observable<Order[]>{
    return this.collection$;
  }

  public set collection(col: Observable<Order[]>){
    // collection = col
    this.collection$ = col;
  }

  public changeState(item: Order, state: StateOrder): Observable<any>{
    const obj = new Order({...item})
    obj.state = state
    // appeler fonction update
    return this.update(obj)
  }

  public update(item: Order): Observable<any>{
    // appel http
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item)
  }




}
