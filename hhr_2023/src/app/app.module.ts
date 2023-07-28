import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    RoomsComponent,
    AboutUsComponent,
    ContactComponent
  
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'rooms', component: RoomsComponent},
      {path: 'aboutus', component: AboutUsComponent},
      {path: 'contact', component: ContactComponent},
      // {path: '**', component: PageNotFoundComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
