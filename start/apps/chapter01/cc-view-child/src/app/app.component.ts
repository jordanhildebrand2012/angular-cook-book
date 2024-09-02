import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(GalleryComponent) galery!: GalleryComponent;

  addNewPicture() {
    // console.log('added new picture');
    this.galery.pictures.unshift(this.galery.generateImage());
  }

  removeFirstPicture() {
    // console.log('removed first picture');
    this.galery.pictures.shift();
  }
}
