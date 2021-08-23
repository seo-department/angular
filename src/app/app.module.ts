import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule, HttpErrorInterceptor, CosmicInterceptor } from './core';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchModule } from './search/search.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { WidgetSearchBarComponent } from './search/widget-search-bar/widget-search-bar.component';
// import { WidgetSearchBarButtonComponent } from './search/widget-search-bar-button/widget-search-bar-button.component';
// import { NgAisModule } from 'angular-instantsearch';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, PagenotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CoreModule, SearchModule, BrowserAnimationsModule],
  // exports: [WidgetSearchBarComponent, WidgetSearchBarButtonComponent],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CosmicInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
