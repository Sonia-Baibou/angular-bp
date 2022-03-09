import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // nouveau BehaviorSubject
  // observable$.value + 1


  constructor(private version : VersionService) { }

  ngOnInit(): void {
  }

  public onAdd(){
    // accéder à la méthode increment du service
    this.version.increment()
  }

}
