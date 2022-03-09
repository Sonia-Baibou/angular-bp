import { Component, Input, OnInit } from '@angular/core';

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

  ngOnChanges(){
    console.log(this.title)
  }

  ngOnInit(): void {
    console.log(this.title)
  }

}