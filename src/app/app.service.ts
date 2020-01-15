import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  configUrl = `${environment.production?'envapp/':''}assets/app.config.json`;
  private configSettings: any = null;

  get settings() {
    return this.configSettings;
  }

  public load(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get(this.configUrl).subscribe((response: any) => {
            this.configSettings = response;
            resolve(true);
      });
    });
  }
  
}
