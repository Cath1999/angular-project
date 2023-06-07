import { Component } from '@angular/core';
import { DepartamentoV2 } from './interface/departamentoV2';
import { DepartamentoV2Service } from './service/departamentoV2.service';

type Funciones = 'Buscar'|'Guardar'|'Editar'

@Component({
  selector: 'app-departamentoV2',
  templateUrl: './departamentoV2.component.html',
  styleUrls: ['./departamentoV2.component.css']
})
export class DepartamentoV2Component {
  select: any;
  public d?:DepartamentoV2;
  public departamentoV2: DepartamentoV2[] = [];
  public funciones: Funciones[] = ['Buscar', 'Guardar', 'Editar'];
  public selectedFuncion?: Funciones;
  constructor(private departamentoV2Service: DepartamentoV2Service){}
  ngOnInit(){
    this.selectedFuncion = this.funciones[0];
    let term = ''
    this.departamentoV2Service.searchDepartamentoV2(term)
    .subscribe(departamentoV2 =>{
      this.departamentoV2 = departamentoV2
    });
  
  }

  refreshTable(){
    this.selectedFuncion = this.funciones[0];
    this.departamentoV2Service.searchDepartamentoV2('')
    .subscribe(departamentoV2 =>{
      this.departamentoV2 = departamentoV2
    });
  }

  selectFuncion(funcion:Funciones):void{
    this.selectedFuncion = funcion;
    console.log(funcion);
  }

  addDepartamentoV2($event: any){
    this.select = $event;
    this.departamentoV2Service.addDepartamentoV2(this.select)
          .subscribe(data =>{
              console.log(data)
              this.refreshTable();
              
          });
    console.log(this.select);
    
  }
  searchDepartamentoV2ById(term: string):void{
    
    this.departamentoV2Service.searchDepartamentoV2ById(term)
    .subscribe(ms =>{
      this.departamentoV2 = [];
      if (ms !=null){
        this.departamentoV2.push(ms!);
      }
      console.log(ms);
    });
  }
  // Hace un fill al formulario
  updateDepartamentoV2($event: any){
    this.d = $event;
    this.selectedFuncion = this.funciones[2];
    console.log(this.d);
    
  }
  // Hace el put
  updateDepartamentoV22($event: any){
    this.d = $event;
    if (this.d?.idDepartamento != undefined){
      this.departamentoV2Service.updateDepartamentoV2(this.d)
        .subscribe(data =>{
          console.log(data)
          this.refreshTable();
          
        });
    }
    
  }

  deleteDepartamentoV2($event: any){
    this.d = $event
    console.log(this.d);
    if (this.d?.idDepartamento!= undefined){
      this.departamentoV2Service.deleteDepartamentoV2(this.d.idDepartamento)
        .subscribe(s =>{
          this.refreshTable();
        });
    }else{
      console.log('El id es nulo');
    }  
    
  }
}
  