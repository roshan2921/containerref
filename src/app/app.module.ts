import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastComponent } from './toast/toast.component';
import { MainComponent } from './main/main.component';
import { placeHolderDirective } from './shared/placeholder.directive';
import { HitComponent } from './hit/hit.component';
import { ToasttComponent } from './toastt/toastt.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastService } from './toast.service';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    MainComponent,
    placeHolderDirective,
    HitComponent,
    ToasttComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
