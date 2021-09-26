import {from, Observable} from 'rxjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Storage} from './Storage';

export class StorageImpl implements Storage {
  getItem(key: string): Observable<string | null> {
    console.log('[Storage] setItem called: Key [' + key + ']');

    return from(AsyncStorage.getItem(key));
  }

  setItem(key: string, value: string): Observable<void> {
    console.log(
      '[Storage] setItem called: Key [' + key + '], Value [' + value + ']',
    );

    return from(AsyncStorage.setItem(key, value));
  }
}
