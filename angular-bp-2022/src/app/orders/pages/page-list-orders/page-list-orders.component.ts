import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {


  db: any;
  constructor(private ordersService: OrdersService) {
    // appel à notre collection
    this.ordersService.collection.subscribe((data)=> console.log(data))
  }

  ngOnInit(): void {
  }

}
