import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { LampModule } from '../lamp/lamp.module'; // Tambahkan ini

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LampModule // Tambahkan ini
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
