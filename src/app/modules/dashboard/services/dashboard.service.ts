import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getImagesList() {
    return [
      {
        url: '/assets/dummy-image.svg',
        hasImage: false
      },
      {
        url: '/assets/dummy-image.svg',
        hasImage: false
      },
      {
        url: '/assets/dummy-image.svg',
        hasImage: false
      },
      {
        url: '/assets/dummy-image.svg',
        hasImage: false
      },
      {
        url: '/assets/dummy-image.svg',
        hasImage: false
      },
      {
        url: '/assets/dummy-image.svg',
        hasImage: false
      }
    ]
  }
}
