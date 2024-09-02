import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  addNewPicture(gallery: GalleryComponent) {
    // console.log('added new picture', gallery);
    gallery.pictures.unshift(gallery.generateImage());
  }

  removeFirstPicture(gallery: GalleryComponent) {
    // console.log('removed first picture', gallery);
    gallery.pictures.shift();
  }
}
