import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageAddClientComponent,
    PageEditClientComponent,
    PageListClientsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ClientsModule { }
