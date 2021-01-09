import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAnnouncementPageRoutingModule } from './create-announcement-routing.module';

import { CreateAnnouncementPage } from './create-announcement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAnnouncementPageRoutingModule
  ],
  declarations: [CreateAnnouncementPage]
})
export class CreateAnnouncementPageModule {}
