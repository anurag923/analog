import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const baseUrl_pharmacy = 'http://3.14.150.254:8000/api/reg/pharmacy/';
const baseUrl_pharmacy_product = 'http://3.14.150.254:8000/api/product/pharmacy/all/product/';
const baseUrl_product = 'http://3.14.150.254:8000/api/product/pharmacy/product/';
const baseUrl_diagnostic = 'http://3.14.150.254:8000/api/reg/diagnostic/';
const baseUrl_diagnostic_ind = 'http://3.14.150.254:8000/api/reg/diagnostic/tests/';
const login_url = 'http://3.14.150.254:8000/api/reg/loginotp/';
const logout_url = 'http://3.14.150.254:8000/api/reg/logout/';
const cartPost = 'http://3.14.150.254:8000/api/cart/item/';

@Injectable({
  providedIn: 'root'
})
export class NovitaService {

  private isloggedIn: boolean;
  
  constructor(private http:HttpClient) {
    this.isloggedIn=false;
  }

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

  getIndTest(labid,testid){
    return this.http.get(`${baseUrl_diagnostic_ind}${labid}/${testid}`)
  }
  
  login(data): Observable<any> {
    this.isloggedIn=true;
    this.http.post(login_url, data);
    return of(this.isloggedIn);
  }
  
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
}
  logout(): Observable<any> {
    return this.http.get(logout_url);
  }

  addItemToCart(data): Observable<any> {
    // const headers = { 'content-type': 'application/json'}
    return this.http.post(cartPost,data);
  }
}

