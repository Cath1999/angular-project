import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, pipe } from "rxjs";
import { Examenes } from "../interface/examenes";

@Injectable({providedIn: 'root'})
export class ExamenesService {
    private apiUrl:string = 'http://localhost:8080';
    
    constructor(private http: HttpClient) { }

    private getExamenesRequest(url: string): Observable<Examenes[]>{
        return this.http.get<Examenes[]>(url)
            .pipe(
              catchError( () => of ([]))  
            );
    
    }

    searchExamenes(term: string): Observable<Examenes[]>{
        const url = `${this.apiUrl}/api/examenes`;
        return this.getExamenesRequest(url);
    }

    searchExamenesById(term:string): Observable<Examenes | null>{
        const url = `${this.apiUrl}/api/examenes/getById/${term}`;
        return this.http.get<Examenes>(url)
        .pipe(
           
            catchError( () => of(null))
        );
    }

    addExamenes(examenes:Examenes): Observable<any> {
        const url = `${this.apiUrl}/api/examenes/add`;
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(examenes);
        console.log(body)
        return this.http.post(url, body,{'headers':headers})
    }

    updateExamenes(examenes: Examenes): Observable<any>{
        const url = `${this.apiUrl}/api/examenes/updateById/${examenes.idExamen}`;
        const headers = { 'content-type': 'application/json'} 
        const body=JSON.stringify(examenes);
        console.log(body)
        return this.http.put(url, body,{'headers':headers})
    }

    deleteExamenes(id:number): Observable<any>{
        const headers = { 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS', 'Access-Control-Allow-Headers': '*'}  
        const url = `${this.apiUrl}/api/examenes/deleteById/${id}`;
        return this.http.delete(url)
        
    }

}        