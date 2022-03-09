import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public v!: number;

  constructor(private version : VersionService) {
    // subscribe à
    this.version.data$.subscribe((data)=> {
      this.v = data;
    })

   }

  ngOnInit(): void {
  }

}
