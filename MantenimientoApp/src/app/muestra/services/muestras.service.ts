import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, pipe } from "rxjs";
import { Muestra } from "../interface/muestra";

@Injectable({providedIn: 'root'})
export class MuestrasService {
    private apiUrl:string = 'http://localhost:8080';
    
    constructor(private http: HttpClient) { }

    private getMuestrasRequest(url: string): Observable<Muestra[]>{
        return this.http.get<Muestra[]>(url)
            .pipe(
              catchError( () => of ([]))  
            );
    }

    

    searchMuestra(term: string): Observable<Muestra[]>{
        const url = `${this.apiUrl}/api/muestras`;
        return this.getMuestrasRequest(url);
    }

    searchMuestraById(term:string): Observable<Muestra | null>{
        const url = `${this.apiUrl}/api/muestras/getById/${term}`;
        return this.http.get<Muestra>(url)
        .pipe(
           
            catchError( () => of(null))
        );
    }

    addMuestra(muestra:Muestra): Observable<any> {
        const url = `${this.apiUrl}/api/muestras/add`;
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(muestra);
        console.log(body)
        return this.http.post(url, body,{'headers':headers})
    }

    updateMuestra(muestra: Muestra): Observable<any>{
        const url = `${this.apiUrl}/api/muestras/updateById/${muestra.idTipoMuestra}`;
        const headers = { 'content-type': 'application/json'} 
        const body=JSON.stringify(muestra);
        console.log(body)
        return this.http.put(url, body,{'headers':headers})
    }

    deleteMuestra(id:number): Observable<any>{
        const url = `${this.apiUrl}/api/muestras/deleteById/${id}`;
        return this.http.delete(url)
        
    }
}