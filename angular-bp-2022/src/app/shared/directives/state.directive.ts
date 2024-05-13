import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {
  // récupérer une valeur du parent
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;

  constructor() {
    console.log('directive')
    //console.log(this.test)
   }

   ngOnChanges(){
     //attribue un élément html class à this.app.state
    this.tdClassName = `state-${this.appState.toLowerCase()}`
   }


   ngOnInit(){
    console.log(this.appState, "ngonInit")
   }


}
