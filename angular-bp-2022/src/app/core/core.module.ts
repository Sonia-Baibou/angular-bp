import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UiModule,
    TemplatesModule,
    IconsModule,
    LoginModule
  ]
})
export class CoreModule { }
