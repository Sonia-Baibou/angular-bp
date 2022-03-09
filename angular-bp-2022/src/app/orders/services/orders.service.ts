import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`)
  }

  public get collection(): Observable<Order[]>{
    return this.collection$;
  }

  public set collection(col: Observable<Order[]>){
    // collection = col
    this.collection$ = col;
  }






}
