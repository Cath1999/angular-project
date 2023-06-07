import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, pipe } from "rxjs";
import { Paciente } from "../interface/paciente";

@Injectable({providedIn: 'root'})
export class PacientesService{
    private apiUrl: string = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    private getPacientesRequest(url: string): Observable<Paciente[]>{
        return this.http.get<Paciente[]>(url)
            .pipe(
                catchError(() => of ([]))
            )
    }

    searchPaciente(): Observable<Paciente[]>{
        const url = `${this.apiUrl}/api/pacientes`;
        return this.getPacientesRequest(url);
    }

    searchPacienteById(id: string): Observable<Paciente | null>{
        const url = `${this.apiUrl}/api/pacientes/getById/${id}`;
        return this.http.get<Paciente>(url)
            .pipe(
                catchError( () => of (null))
            );
    }

    addPaciente(paciente:Paciente): Observable<any>{
        const url = `${this.apiUrl}/api/pacientes/add`;
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(paciente);
        return this.http.post(url, body,{'headers':headers})

    }

    updatePaciente(paciente: Paciente): Observable<any>{
        const url = `${this.apiUrl}/api/pacientes/updateById/${paciente.idPaciente}`;
        const headers = { 'content-type': 'application/json'} 
        const body=JSON.stringify(paciente);
        console.log(body)
        return this.http.put(url, body,{'headers':headers})
    }

    deletePaciente(id:number): Observable<any>{
        const url = `${this.apiUrl}/api/pacientes/deleteById/${id}`;
        return this.http.delete(url)
    }


}