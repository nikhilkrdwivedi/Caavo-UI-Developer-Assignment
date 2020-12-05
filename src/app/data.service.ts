import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getUserList(){
    return this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
  }
}
