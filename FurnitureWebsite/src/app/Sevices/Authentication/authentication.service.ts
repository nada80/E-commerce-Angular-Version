import { IUserRegistration } from './../../Interfaces/user/IUserRegistration'; 
import { registrationResponse } from './../../Interfaces/response/registrationResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  _envUrl= environment.baseURL;
  constructor(private _http: HttpClient) { }

  public registerUser = (route: string, body: IUserRegistration) => {
    return this._http.post<registrationResponse> (this.createCompleteRoute(route, this._envUrl), body);
  }
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
