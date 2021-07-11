import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  showLoader: boolean;

  constructor(private http: HttpClient) { }

  uploadImage(image) {

    let data = new FormData();
    data.append('ref_image', image);
    return this.http.post(`${environment.api_url}/upload_reference_images`, data)
      .pipe(map((res: any) => {
        if (res.status === 200) {
          return res.data.ref_image;
        }
        else {
            // HANDLE ERROR
        }
      }
      ))
  }
}
