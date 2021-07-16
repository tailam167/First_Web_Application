import { IProducts } from './product.interface';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})

// Using Service and Dependency Injection
export class ProductServeice {

  // Getting data from Server API
  private productAPI = environment.apiServer;

  constructor(private http: HttpClient) {}

  // HTTP request get all products
  public getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(`${this.productAPI}/list`).pipe(
      tap((data) => console.log('All Product: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // HTTP request get a product
  public getProduct(productId: number): Observable<IProducts> {
    return this.http.get<IProducts>(`${this.productAPI}/${productId}`).pipe(
      tap((data) => console.log('Product was found: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // HTTP request create a product
  public addProduct(product: IProducts): Observable<IProducts> {
    const body = JSON.stringify(product);
    return this.http
      .post<IProducts>(`${this.productAPI}/new`, body, httpOptions)
      .pipe(
        tap((data) => console.log('New Product: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  // HTTP request update a product
  public updateProduct(product: IProducts): Observable<IProducts> {
    const body = JSON.stringify(product);
    return this.http
      .put<IProducts>(`${this.productAPI}/update`, body, httpOptions)
      .pipe(
        tap((data) => console.log('Updated Product: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  // HTTP request delete a product
  public deleteProduct(productID: number): Observable<void> {
    return this.http
      .delete<void>(`${this.productAPI}/delete/${productID}`)
      .pipe(
        tap((data) => console.log('Deleted Product: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // In a real project, we may send the server to some remote logging infrastructure
    // Instead of logging into the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client side or network error occurred. Handle it accordingly
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code
      // The response body may contain clues as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
