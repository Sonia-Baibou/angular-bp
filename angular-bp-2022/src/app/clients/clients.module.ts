import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';



@NgModule({
  declarations: [
    PageAddClientComponent,
    PageEditClientComponent,
    PageListClientsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }
