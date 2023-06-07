import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../interface/pais';
import { Observable, catchError, forkJoin, map, of, pipe } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrlPais:string = 'http://localhost:8086';

  constructor(private http: HttpClient) { }

  private getPaisRequest(url: string): Observable<Pais[]>{
      return this.http.get<Pais[]>(url)
          .pipe(
            catchError( () => of ([]))
          );
  }

  searchPaisById(term:string): Observable<Pais| null>{
    const url = `${this.apiUrlPais}/api/pais/paisById/${term}`;
    return this.http.get<Pais>(url)
    .pipe(

        catchError( () => of(null))
    );
}

  searchPais(term: string): Observable<Pais[]>{
      const url = `${this.apiUrlPais}/api/pais`;
      return this.getPaisRequest(url);
  }

  addPais(pais:Pais): Observable<any> {
    const url = `${this.apiUrlPais}/api/pais/add`;
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(pais);
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
}

updatePais(pais: Pais): Observable<any>{
    const url = `${this.apiUrlPais}/api/pais/updateById/${pais.IdPais}`;
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(pais);
    console.log(body)
    return this.http.put(url, body,{'headers':headers})
}

deletePais(id:number): Observable<any>{
    const headers = { 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS', 'Access-Control-Allow-Headers': '*'}
    const url = `${this.apiUrlPais}/api/pais/deletePaisById/${id}`;
    return this.http.delete(url)

}
}
