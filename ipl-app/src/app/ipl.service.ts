import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IplService {
  constructor(private http: HttpClient) { }

  getTeamRoleCount(teamName: string): Observable<any[]> {
    return this.http.get<any[]>(`https://indipl2020.herokuapp.com/ipl2020/team/role/${teamName}`);
  }
  getPlayerDetails(teamName: string): Observable<any[]> {
    return this.http.get<any[]>(`https://indipl2020.herokuapp.com/ipl2020/team/${teamName}`);
  }


  featchLabels(): Observable<any> {
    return this.http.get<any>("https://indipl2020.herokuapp.com/ipl2020/team/labels")
  }
}
