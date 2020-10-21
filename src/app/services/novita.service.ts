import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl_pharmacy = 'http://3.14.150.254:8000/api/reg/pharmacy/';
const baseUrl_pharmacy_product = 'http://3.14.150.254:8000/api/product/pharmacy/all/product/';
const baseUrl_product = 'http://3.14.150.254:8000/api/product/pharmacy/product/';
const baseUrl_diagnostic = 'http://3.14.150.254:8000/api/reg/diagnostic/';
const baseUrl_diagnostic_ind = 'http://3.14.150.254:8000/api/reg/diagnostic/tests/';

@Injectable({
  providedIn: 'root'
})
export class NovitaService {

  constructor(private http:HttpClient) { }

  getAll_pharmacy(): Observable<any> {
    return this.http.get(baseUrl_pharmacy);
  }
 
  getbyid_pharmacy(id): Observable<any> {
    return this.http.get(`${baseUrl_pharmacy_product}${id}`);
  }
  
  getPharmaProduct(itemid,pharmaid){
    return this.http.get(`${baseUrl_product}${itemid}/${pharmaid}`)
  }

  getAll_diagnostic(): Observable<any> {
    return this.http.get(baseUrl_diagnostic);
  }

  getbyid_diagnostic(id): Observable<any> {
    return this.http.get(`${baseUrl_diagnostic_ind}${id}`);
  }
}

