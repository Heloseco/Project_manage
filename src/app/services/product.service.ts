import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="http://localhost:3030/product";
  constructor(private http: HttpClient) {}

  getproduct() {
    return this.http.get<{data:any}>(`${this.url}/getproduct`);
  };

  getproductByid()
  {
    return this.http.get<{data:any}>(`${this.url}/getproduct/:id`);
  };

  addproduct(data:any)
  {
    return this.http.post(`${this.url}/addproduct`,data);
  }

  editproduct(edit:any){
    return this.http.post<{data:any}>(`${this.url}/editproduct`,edit);
  }
}
