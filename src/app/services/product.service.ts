import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="http://localhost:3030/product";
  constructor(private http: HttpClient) {}

  getproduct() {
    return this.http.get(`${this.url}/getproduct`);
  };
}
