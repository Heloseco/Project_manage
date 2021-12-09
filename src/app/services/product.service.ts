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

  getproductByid(id:any)
  {
    return this.http.get<{product:any}>(`${this.url}/getproduct/${id}`);
  };

  addproduct(data:any)
  {
    return this.http.post(`${this.url}/addproduct`,data);
  }

  editproduct(data:any, id:string){
    return this.http.put(`${this.url}/editproduct/${id}`,data);
  }
  
  change(id:any,status:any){
    return this.http.put(`${this.url}/changestatus/${id}`,status)
  }
}
