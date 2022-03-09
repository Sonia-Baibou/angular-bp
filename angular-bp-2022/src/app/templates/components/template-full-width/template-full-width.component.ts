import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {

  @Input() public title!: string;

  constructor() {
    //this.title = "Titre"
    // undefined
    console.log(this.title)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    console.log(this.title)
  }

}
