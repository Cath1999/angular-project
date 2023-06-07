import { Component } from '@angular/core';
import { Muestra } from './interface/muestra';
import { MuestrasService } from './services/muestras.service';

type Funciones = 'Buscar'|'Guardar'|'Editar'

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent {
  select: any;
  public m?:Muestra;
  public muestras: Muestra[] = [];
  public funciones: Funciones[] = ['Buscar', 'Guardar', 'Editar'];
  public selectedFuncion?: Funciones;
  constructor(private muestraService: MuestrasService){}
  ngOnInit(){
    this.selectedFuncion = this.funciones[0];
    let term = ''
    this.muestraService.searchMuestra(term)
    .subscribe(muestras =>{
      this.muestras = muestras
    });
  
  }

  refreshTable(){
    this.selectedFuncion = this.funciones[0];
    this.muestraService.searchMuestra('')
    .subscribe(muestras =>{
      this.muestras = muestras
    });
  }

  selectFuncion(funcion:Funciones):void{
    this.selectedFuncion = funcion;
    console.log(funcion);
  }

  addMuestra($event: any){
    this.select = $event;
    this.muestraService.addMuestra(this.select)
          .subscribe(data =>{
              console.log(data)
              this.refreshTable();
              
          });
    console.log(this.select);
    
  }
  searchMuestraById(term: string):void{
    
    this.muestraService.searchMuestraById(term)
    .subscribe(ms =>{
      this.muestras = [];
      if (ms !=null){
        this.muestras.push(ms!);
      }
      console.log(ms);
    });
  }
  // Hace un fill al formulario
  updateMuestra($event: any){
    this.m = $event;
    this.selectedFuncion = this.funciones[2];
    console.log(this.m);
    
  }
  // Hace el put
  updateMuestra2($event: any){
    this.m = $event;
    if (this.m?.idTipoMuestra != undefined){
      this.muestraService.updateMuestra(this.m)
        .subscribe(data =>{
          console.log(data)
          this.refreshTable();
          
        });
    }
    
  }

  deleteMuestra($event: any){
    this.m = $event
    console.log(this.m);
    if (this.m?.idTipoMuestra != undefined){
      this.muestraService.deleteMuestra(this.m.idTipoMuestra)
        .subscribe(s =>{
          this.refreshTable();
        });
    }else{
      console.log('El id es nulo');
    }  
    
  }
}
  
  

