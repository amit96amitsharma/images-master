import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ImageListingComponent } from './components/image-listing/image-listing.component';
import { DashboardService } from './services/dashboard.service';


export const dashboardModuleRoutes: Routes = [
  {
    path: 'images',
    component: ImageListingComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'images'
  },
];


@NgModule({
  declarations: [DashboardComponent, ImageListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardModuleRoutes)
  ],
  providers : [DashboardService]
})
export class DashboardModule { }
