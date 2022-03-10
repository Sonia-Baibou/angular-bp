import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {

  @Input() public title!: any;

  constructor() {
    //this.title = "Titre"
    // undefined
    console.log(this.title, 'title template')
  }

  ngOnChanges(): void {
    console.log(this.title, "ngOnChanges")
  }

  ngOnInit(): void {
    console.log(this.title, 'ngOninit')
  }

  ngDoCheck(){
    // console.log(this.title, 'ngDoCheck')
  }
}
