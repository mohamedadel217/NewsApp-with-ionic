import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  constructor(public http: HttpClient) {
  }
getbussines(){
  return this.http.get("https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=27dc9ed64bc74ec6ab7bb4a507fa1172");
}
getentertainment(){
  return this.http.get("https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=27dc9ed64bc74ec6ab7bb4a507fa1172");
}
gethealth(){
  return this.http.get("https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=27dc9ed64bc74ec6ab7bb4a507fa1172");

}
getscience(){
  return this.http.get("https://newsapi.org/v2/top-headlines?country=gb&category=science&apiKey=27dc9ed64bc74ec6ab7bb4a507fa1172");
}
getsports(){
  return this.http.get("https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=27dc9ed64bc74ec6ab7bb4a507fa1172");
}
gettechnology(){
  return this.http.get("https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=27dc9ed64bc74ec6ab7bb4a507fa1172");
}

}