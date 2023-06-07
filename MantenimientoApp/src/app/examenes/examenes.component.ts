import { Component } from '@angular/core';
import { Examenes } from './interface/examenes';
import { ExamenesService } from './services/examenes.service';

type Funciones = 'Buscar'|'Agregar'|'Editar'

@Component({
    selector: 'app-examenes',
    templateUrl: './examenes.component.html',
    styleUrls: ['./examenes.component.css']
})

export class ExamenesComponent {
    select: any;
    public e?:Examenes;
    public examenes: Examenes[] = [];
    public funciones: Funciones[] = ['Buscar', 'Agregar', 'Editar'];
    public selectedFuncion?: Funciones;
    constructor(private examenesService: ExamenesService){}
    ngOnInit(){
      this.selectedFuncion = this.funciones[0];
      let term = ''
      this.examenesService.searchExamenes(term)
      .subscribe(examenes =>{
        this.examenes = examenes
      });
    
    }
  
    refreshTable(){
      this.selectedFuncion = this.funciones[0];
      this.examenesService.searchExamenes('')
      .subscribe(examenes =>{
        this.examenes = examenes
      });
    }
  
    selectFuncion(funcion:Funciones):void{
      this.selectedFuncion = funcion;
      console.log(funcion);
    }
  
    addExamenes($event: any){
      this.select = $event;
      this.examenesService.addExamenes(this.select)
            .subscribe(data =>{
                console.log(data)
                this.refreshTable();
                
            });
      console.log(this.select);
      
    }
    searchExamenesById(term: string):void{
      
      this.examenesService.searchExamenesById(term)
      .subscribe(ms =>{
        this.examenes = [];
        if (ms !=null){
          this.examenes.push(ms!);
        }
        console.log(ms);
      });
    }
    // Hace un fill al formulario
    updateExamenes($event: any){
      this.e = $event;
      this.selectedFuncion = this.funciones[2];
      console.log(this.e);
      
    }
    // Hace el put
    updateExamenes2($event: any){
      this.e = $event;
      if (this.e?.idExamen != undefined){
        this.examenesService.updateExamenes(this.e)
          .subscribe(data =>{
            console.log(data)
            this.refreshTable();
            
          });
      }
      
    }
  
    deleteExamenes($event: any){
      this.e = $event
      console.log(this.e);
      if (this.e?.idExamen != undefined){
        this.examenesService.deleteExamenes(this.e.idExamen)
          .subscribe(s =>{
            this.refreshTable();
          });
      }else{
        console.log('El id es nulo');
      }  
      
    }
  }