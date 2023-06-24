import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { TranslocoRootModule } from '../shared/transloco-root.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, TranslocoRootModule],
  declarations: [HomePage, HeaderComponent, ResumeComponent]
})
export class HomePageModule {}
