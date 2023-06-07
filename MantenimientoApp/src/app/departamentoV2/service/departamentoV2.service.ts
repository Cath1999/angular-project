import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, pipe } from "rxjs";
import { DepartamentoV2 } from "../interface/departamentoV2";

@Injectable({providedIn: 'root'})
export class DepartamentoV2Service {
    private apiUrl:string = 'http://localhost:8081';
    
    constructor(private http: HttpClient) { }

    private getDepartamentoV2Request(url: string): Observable<DepartamentoV2[]>{
        return this.http.get<DepartamentoV2[]>(url)
            .pipe(
              catchError( () => of ([]))  
            );
    }

    

    searchDepartamentoV2(term: string): Observable<DepartamentoV2[]>{
        const url = `${this.apiUrl}/api/departamentos`;
        return this.getDepartamentoV2Request(url);
    }

    searchDepartamentoV2ById(term:string): Observable<DepartamentoV2| null>{
        const url = `${this.apiUrl}/api/departamentos/getById/${term}`;
        return this.http.get<DepartamentoV2>(url)
        .pipe(
           
            catchError( () => of(null))
        );
    }

    addDepartamentoV2(departamentoV2:DepartamentoV2): Observable<any> {
        const url = `${this.apiUrl}/api/departamentos/add`;
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(departamentoV2);
        console.log(body)
        return this.http.post(url, body,{'headers':headers})
    }

    updateDepartamentoV2(departamentoV2: DepartamentoV2): Observable<any>{
        const url = `${this.apiUrl}/api/departamentos/updateById/${departamentoV2.idDepartamento}`;
        const headers = { 'content-type': 'application/json'} 
        const body=JSON.stringify(departamentoV2);
        console.log(body)
        return this.http.put(url, body,{'headers':headers})
    }

    deleteDepartamentoV2(id:number): Observable<any>{
        const url = `${this.apiUrl}/api/departamentos/deleteById/${id}`;
        return this.http.delete(url)
        
    }
}