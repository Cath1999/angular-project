import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, pipe } from "rxjs";
import { Pais } from "../interface/pais";

@Injectable({providedIn: 'root'})
export class PaisService {
    private apiUrl:string = 'http://localhost:8088';

    constructor(private http: HttpClient) { }

    private getPaisRequest(url: string): Observable<Pais[]>{
        return this.http.get<Pais[]>(url)
            .pipe(
              catchError( () => of ([]))
            );
    }



    searchPais(term: string): Observable<Pais[]>{
        const url = `${this.apiUrl}/api/pais`;
        return this.getPaisRequest(url);
    }

    searchPaisById(term:string): Observable<Pais | null>{
        const url = `${this.apiUrl}/api/pais/getById/${term}`;
        return this.http.get<Pais>(url)
        .pipe(

            catchError( () => of(null))
        );
    }

    addPais(pais:Pais): Observable<any> {
        const url = `${this.apiUrl}/api/pais/add`;
        const headers = { 'content-type': 'application/json'}
        const body=JSON.stringify(pais);
        console.log(body)
        return this.http.post(url, body,{'headers':headers})
    }

    updatePais(pais: Pais): Observable<any>{
        const url = `${this.apiUrl}/api/pais/updateById/${pais.idPais}`;
        const headers = { 'content-type': 'application/json'}
        const body=JSON.stringify(pais);
        console.log(body)
        return this.http.put(url, body,{'headers':headers})
    }

    deletePais(id:number): Observable<any>{
        const url = `${this.apiUrl}/api/pais/deleteById/${id}`;
        return this.http.delete(url)

    }
}
