import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor(@Inject('LOCAL_STORAGE') private localStorage: Storage) { }

  setItem(key: string, value: string): void {
    this.localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    const value = this.localStorage.getItem(key);
    return value ? value : null;
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }

  clear(): void {
    this.localStorage.clear();
  }

}
