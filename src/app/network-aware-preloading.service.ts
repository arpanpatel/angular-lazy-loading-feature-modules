import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';

/**
 *  @link https://github.com/Microsoft/TypeScript/issues/27186
 */
declare const navigator: any;

@Injectable({
  providedIn: 'root'
})
export class NetworkAwarePreloadingService implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const connection = navigator.connection;
    if (connection.saveData) {
      return of(null);
    }
    const speed = connection.effectiveType;
    const slowConnections = ['slow-2g', '2g', '3g'];
    if (slowConnections.includes(speed)) {
      return of(null);
    }
    return fn();
  }
}
