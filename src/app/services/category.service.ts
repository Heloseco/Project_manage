import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  id : any;
  url="http://localhost:3030/category";
  constructor(private http: HttpClient) {  }

  getcategory() {
    return this.http.get<{data:any}>(`${this.url}/getcategory`);
  };

  getcategoryByid()
  {
    return this.http.get<{data:any}>(`${this.url}/getcategory/:id`);
  };

  addcategory(data:any)
  {
    return this.http.post(`${this.url}/addcategory`,data);
  }


}
