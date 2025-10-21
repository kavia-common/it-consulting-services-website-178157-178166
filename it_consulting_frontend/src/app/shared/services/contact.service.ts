import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // PUBLIC_INTERFACE
  /** Simulate sending a contact message to a backend API, with latency and random error for demo purposes. */
  send(payload: ContactPayload): Observable<boolean> {
    // Simulate network latency
    return of(null).pipe(
      delay(1000),
      switchMap(() => {
        // 25% chance of error to demonstrate error UI
        const shouldError = Math.random() < 0.25;
        if (shouldError) {
          return throwError(() => new Error('Simulated network error'));
        }
        return of(true);
      })
    );
  }
}
