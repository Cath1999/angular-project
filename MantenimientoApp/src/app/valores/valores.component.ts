import { Component } from '@angular/core';
import { Valores } from './interface/valores';
import { ValoresService } from './services/valores.service';

type Funciones = 'Buscar'|'Agregar'|'Editar'

@Component({
    selector: 'app-valores',
    templateUrl: './valores.component.html',
    styleUrls: ['./valores.component.css']
})

export class ValoresComponent {
    select: any;
    public v?:Valores;
    public valores: Valores[] = [];
    public funciones: Funciones[] = ['Buscar', 'Agregar', 'Editar'];
    public selectedFuncion?: Funciones;
    constructor(private valoresService: ValoresService){}
    ngOnInit(){
      this.selectedFuncion = this.funciones[0];
      let term = ''
      this.valoresService.searchValores(term)
      .subscribe(valores =>{
        this.valores = valores
      });
    
    }
  
    refreshTable(){
      this.selectedFuncion = this.funciones[0];
      this.valoresService.searchValores('')
      .subscribe(valores =>{
        this.valores = valores
      });
    }
  
    selectFuncion(funcion:Funciones):void{
      this.selectedFuncion = funcion;
      console.log(funcion);
    }
  
    addValores($event: any){
      this.select = $event;
      this.valoresService.addValores(this.select)
            .subscribe(data =>{
                console.log(data)
                this.refreshTable();
                
            });
      console.log(this.select);
      
    }
    searchValoresById(term: string):void{
      
      this.valoresService.searchValoresById(term)
      .subscribe(ms =>{
        this.valores = [];
        if (ms !=null){
          this.valores.push(ms!);
        }
        console.log(ms);
      });
    }
    // Hace un fill al formulario
    updateValores($event: any){
      this.v = $event;
      this.selectedFuncion = this.funciones[2];
      console.log(this.v);
      
    }
    // Hace el put
    updateValores2($event: any){
      this.v= $event;
      if (this.v?.idValoresNormales != undefined){
        this.valoresService.updateValores(this.v)
          .subscribe(data =>{
            console.log(data)
            this.refreshTable();
            
          });
      }
      
    }
  
    deleteValores($event: any){
      this.v = $event
      console.log(this.v);
      if (this.v?.idValoresNormales != undefined){
        this.valoresService.deleteValores(this.v.idValoresNormales)
          .subscribe(s =>{
            this.refreshTable();
          });
      }else{
        console.log('El id es nulo');
      }  
      
    }
  }