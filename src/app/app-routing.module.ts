import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MapComponent } from './map/map.component';
import { FindrideComponent } from './findride/findride.component';
import { FamouseComponent } from './famouse/famouse.component';
import { LiveRideComponent } from './live-ride/live-ride.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { PastRideComponent } from './past-ride/past-ride.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { ViewrideComponent } from './viewride/viewride.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BookingRecievedComponent } from './booking-recieved/booking-recieved.component';
import { UpdateComponent } from './update/update.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent },
  {path:'register',component:RegisterComponent },
  {path:'map',component:MapComponent},
  {path:'findride',component:FindrideComponent},
  {path:'famouse',component:FamouseComponent},
  {path:'liveride',component:LiveRideComponent},
  {path:'admin',component:AdminComponent},
  {path:'logout',component:LogoutComponent},
  {path:'pastride',component:PastRideComponent},
  {path:'viewaccount',component:ViewAccountComponent},
  {path:'viewride',component:ViewrideComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'bookrec',component:BookingRecievedComponent},
  {path:'update',component:UpdateComponent},
  {path:'aboutus',component:AboutusComponent  },
  {path:'',redirectTo: '/home',pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,LoginComponent]