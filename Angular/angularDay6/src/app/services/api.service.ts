import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.development';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.endPoint}/prodects`);
  }
  getProductById(id: string|null): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(`${environment.endPoint}/prodects/${id}`);
  }
  getProductsBycatId(catId: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.endPoint}/prodects?catId=${catId}`);
  }
  getAllCategories(): Observable<Icategory[]> {
    return this.httpClient.get<Icategory[]>(`${environment.endPoint}/categories`);
  }
  addNewProduct(prodect: Iproduct): Observable<Iproduct> {
    return this.httpClient.post<Iproduct>(`${environment.endPoint}/prodects`, prodect)
  }
  deleteProduct(id: string): Observable<Iproduct> {
    return this.httpClient.delete<Iproduct>(`${environment.endPoint}/prodects/${id}`);
  }
  updateProduct(product: Iproduct, id:string|null): Observable<Iproduct> {
    return this.httpClient.put<Iproduct>(`${environment.endPoint}/prodects/${id}`, product);
  }
}
