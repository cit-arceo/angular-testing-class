import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ComputeDemoComponent } from './compute-demo/compute-demo.component';
=======
import { ComputeDemoComponent } from '.compute/compute-demo/compute-demo.component';
import { GreetDemoComponent } from './greet/greet-demo/greet-demo.component';

>>>>>>> e72b9d1f93b3567e493088d2a93f444abb3a9a92

@NgModule({
  declarations: [
    AppComponent,
    ComputeDemoComponent
    GreetDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
