import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, PostDataDialogComponent } from './app.component';
import { TestAppHttpService, httpServiceCreator } from './services/http-service';
import { AppComponentService } from './app.component.service';

@NgModule({
  declarations: [
    AppComponent,
    PostDataDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule
  ],
  entryComponents: [PostDataDialogComponent],
  providers: [
    AppComponentService,
    {
      provide: TestAppHttpService,
      useFactory: httpServiceCreator,
      deps: [HttpClient],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
