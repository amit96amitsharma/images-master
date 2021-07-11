import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-image-listing',
  templateUrl: './image-listing.component.html',
  styleUrls: ['./image-listing.component.scss']
})
export class ImageListingComponent implements OnInit {

  imagesList = [];

  constructor(public commonService: CommonService, private service: DashboardService) { }

  ngOnInit() {
    this.getImageListing();
  }
  getImageListing() {
    this.imagesList = this.service.getImagesList();
  }

  getImage(event, index) {
    const file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load",
      () => {
        this.reorderImagesAfterInsertion(reader.result, index);
      },
      false);
    }
  }
  reorderImagesAfterInsertion(url, index) {
    let flag = false;
    // condition to check if all images are already inserted
    for (let image of this.imagesList) {
      if (!image.hasImage) {
        image.url = url;
        image.hasImage = true;
        flag = true;
        break;
      }
    }
    // if all images are there just replace the image with the current one
    if (!flag) {
      this.imagesList[index].url = url;
      this.imagesList[index].hasImage = true;
    }
  }
  deleteImageHandler(index,url) {
    // if all images are not filled, delete the particular image else shift all one place left
    if (this.checkForAllImagesFilled()) {
      this.reorderImagesAfterDeletion(index,url);
    }
    else {
      this.imagesList[index].url = '/assets/dummy-image.svg';
      this.imagesList[index].hasImage = false;
    }
  }
  reorderImagesAfterDeletion(index,url) {
    // LAST IMAGE WILL BE EMPTY
    this.imagesList[this.imagesList.length -1].url = '/assets/dummy-image.svg';
    this.imagesList[this.imagesList.length -1].hasImage = false;

    // SHIFT IMAGES TOWARDS LEFT
    for (var i = index+1 , len = this.imagesList.length; i < len-1 ; i++){
      this.imagesList[i-1] = this.imagesList[i];
    }
  }
  checkForAllImagesFilled() {
    let count = 0;
    for (let image of this.imagesList) {
      if (image.hasImage) {
        count++;
      }
    }
    return count == 6 ? true : false;
  }
  imageTracker(index:number,image){
    return index;
  }

}
