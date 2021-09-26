import {Observable} from 'rxjs';

export interface Storage {
  getItem(key: string): Observable<string | null>;
  setItem(key: string, value: string): Observable<void>;
}
