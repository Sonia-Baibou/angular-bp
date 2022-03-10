import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  @Input() public headers!: string[];

  constructor() {
    // toujours en undefined car TS lu en premier
    // console.log(this.headers)
    // console.log(this.collection)
  }

  ngOnInit(): void {
    //console.log(this.headers)
    //console.log(this.collection)
  }

  ngOnChanges(){
    //console.log(this.headers)
    //console.log(this.collection)
  }

}
