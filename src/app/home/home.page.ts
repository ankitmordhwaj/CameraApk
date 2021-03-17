import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  imageURL; 

  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  loadContact(){
    console.log("Opening camera...");
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then((res)=>{
      this.imageURL=res; 
    }).catch(e=>{
      console.log(e);
    })
  }

}
