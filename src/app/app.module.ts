import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { KnjigeComponent } from './views/knjige/knjige.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SharedModule],
  declarations: [AppComponent, HomepageComponent, KnjigeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
