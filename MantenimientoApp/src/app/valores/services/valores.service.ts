import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, pipe } from "rxjs";
import { Valores } from "../interface/valores";

@Injectable({providedIn: 'root'})
export class ValoresService {
    private apiUrl:string = 'http://localhost:8080';
    
    constructor(private http: HttpClient) { }

    private getValoresRequest(url: string): Observable<Valores[]>{
        return this.http.get<Valores[]>(url)
            .pipe(
              catchError( () => of ([]))  
            );
    
    }

    searchValores(term: string): Observable<Valores[]>{
        const url = `${this.apiUrl}/api/valores`;
        return this.getValoresRequest(url);
    }

    searchValoresById(term:string): Observable<Valores | null>{
        const url = `${this.apiUrl}/api/valores/getById/${term}`;
        return this.http.get<Valores>(url)
        .pipe(
           
            catchError( () => of(null))
        );
    }

    addValores(valores:Valores): Observable<any> {
        const url = `${this.apiUrl}/api/valores/add`;
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(valores);
        console.log(body)
        return this.http.post(url, body,{'headers':headers})
    }

    updateValores(valores: Valores): Observable<any>{
        const url = `${this.apiUrl}/api/valores/updateById/${valores.idExamen}`;
        const headers = { 'content-type': 'application/json'} 
        const body=JSON.stringify(valores);
        console.log(body)
        return this.http.put(url, body,{'headers':headers})
    }

    deleteValores(id:number): Observable<any>{
        const headers = { 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS', 'Access-Control-Allow-Headers': '*'}  
        const url = `${this.apiUrl}/api/valores/deleteById/${id}`;
        return this.http.delete(url)
        
    }

}