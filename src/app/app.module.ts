import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchCase1 } from './switchcase1/switchcase1.component';
import { SwitchCase2 } from './switchcase2/switchcase2.component';
import { SwitchCase3 } from './switchcase3/switchcase3.component';
import { SwitchCase4 } from './switchcase4/switchcase4.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCase1,
    SwitchCase2,
    SwitchCase3,
    SwitchCase4,
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
