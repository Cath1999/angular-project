import { Component } from '@angular/core';
import { Pais } from './interface/pais';
import { PaisService } from './services/pais.service';

type Funciones = 'Buscar'|'Guardar'|'Editar'

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: [],
})
export class PaisComponent {
  select: any;
  public p?:Pais;
  public paises: Pais[] = [];
  public funciones: Funciones[] = ['Buscar', 'Guardar', 'Editar'];
  public selectedFuncion?: Funciones;
  constructor(private paisService: PaisService){}
  ngOnInit(){
    this.selectedFuncion = this.funciones[0];
    let term = ''
    this.paisService.searchPais(term)
    .subscribe(paises =>{
      this.paises = paises
    });

  }

  refreshTable(){
    this.selectedFuncion = this.funciones[0];
    this.paisService.searchPais('')
    .subscribe(paises =>{
      this.paises = paises
    });
  }

  selectFuncion(funcion:Funciones):void{
    this.selectedFuncion = funcion;
    console.log(funcion);
  }

  addPais($event: any){
    this.select = $event;
    this.paisService.addPais(this.select)
          .subscribe(data =>{
              console.log(data)
              this.refreshTable();

          });
    console.log(this.select);

  }
  searchPaisById(term: string):void{

    this.paisService.searchPaisById(term)
    .subscribe(ms =>{
      this.paises = [];
      if (ms !=null){
        this.paises.push(ms!);
      }
      console.log(ms);
    });
  }
  // Hace un fill al formulario
  updatePais($event: any){
    this.p = $event;
    this.selectedFuncion = this.funciones[2];
    console.log(this.p);

  }
  // Hace el put
  updatePais2($event: any){
    this.p = $event;
    if (this.p?.idPais != undefined){
      this.paisService.updatePais(this.p)
        .subscribe(data =>{
          console.log(data)
          this.refreshTable();

        });
    }

  }

  deletePais($event: any){
    this.p = $event
    console.log(this.p);
    if (this.p?.idPais!= undefined){
      this.paisService.deletePais(this.p.idPais)
        .subscribe(s =>{
          this.refreshTable();
        });
    }else{
      console.log('El id es nulo');
    }

  }
}
