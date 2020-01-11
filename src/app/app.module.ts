import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { MapComponent } from './map/map.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FindrideComponent } from './findride/findride.component';
import { FamouseComponent } from './famouse/famouse.component';
import { LiveRideComponent } from './live-ride/live-ride.component';
import { SuccessComponent } from './success/success.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { PastRideComponent } from './past-ride/past-ride.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { ViewrideComponent } from './viewride/viewride.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BookingRecievedComponent } from './booking-recieved/booking-recieved.component';
import { UpdateComponent } from './update/update.component';
import { AboutusComponent } from './aboutus/aboutus.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
routingComponents,
RegisterComponent,
MapComponent,
FindrideComponent,
FamouseComponent,
LiveRideComponent,
SuccessComponent,
AdminComponent,
LogoutComponent,
PastRideComponent,
ViewAccountComponent,
ViewrideComponent,
AdminpageComponent,
BookingRecievedComponent,
UpdateComponent,
AboutusComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
