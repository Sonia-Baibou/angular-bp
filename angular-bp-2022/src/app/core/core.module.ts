import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

    HeaderComponent,
       FooterComponent,
       NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    UiModule,
    TemplatesModule,
    IconsModule,
    LoginModule,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ]
})
export class CoreModule { }
