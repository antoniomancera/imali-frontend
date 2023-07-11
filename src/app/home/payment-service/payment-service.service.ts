import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, tap } from 'rxjs';

import { Payment } from 'src/app/shared/payment.interface';
import { RequestService } from 'src/app/shared/request-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends RequestService {
  constructor(private http: HttpClient) {
    super();
  }

  getAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(environment.url + '/payment').pipe(catchError((error) => this.handleError(error)));
  }
}
