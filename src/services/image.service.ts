import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  readonly BaseURI = 'http://localhost:8089/SpringMVC/get/image/info/';

  constructor(private http: HttpClient) { }

  getImage(image){
    
    return this.http.get(this.BaseURI+ image );
  }
}
