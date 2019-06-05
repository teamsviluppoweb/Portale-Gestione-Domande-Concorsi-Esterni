import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule} from './shared/models/shared.module';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './modules/auth/auth.module';
import {CoreModule} from './core';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserAnimationsModule,

    // Authentication module
    AuthModule,

    // Core e Shared
    SharedModule,
    CoreModule,


    //  app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
