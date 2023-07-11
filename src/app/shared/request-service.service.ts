import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class RequestService {
  constructor() {}

  protected handleError(error: Error | HttpErrorResponse): Observable<never> {
    console.log('GlobalErrorHandlerService');
    console.error(error);

    return throwError(() => 'No response');
  }
}
