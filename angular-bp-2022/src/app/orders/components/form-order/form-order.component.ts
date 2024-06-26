import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  @Input() public init!: Order;
  @Output() submitted = new EventEmitter<Order>();

  public form!: FormGroup
  public states = Object.values(StateOrder)
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHt : [this.init.tjmHt],
      nbJours : [ this.init.nbJours],
      tva : [ this.init.tva],
      state: [this.init.state],
      typePresta : [ this.init.typePresta],
      client: [this.init.client, [Validators.required, Validators.minLength(2)]],
      comment: [ this.init.comment],
      id: [this.init.id]
    })
  }

  public onSubmit(){
    console.log(this.form.value);
    this.submitted.emit(this.form.value); 
    // envoi de valeur
  }

}
