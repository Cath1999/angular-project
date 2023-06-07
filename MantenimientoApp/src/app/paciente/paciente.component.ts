import { Component } from '@angular/core';
import { Paciente } from './interface/paciente';
import { PacientesService } from './services/pacientes.service';

type Funciones = 'Buscar'|'Guardar'|'Editar'

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  public pacientes: Paciente[] = [];
  public funciones: Funciones[] = ['Buscar', 'Guardar', 'Editar'];
  public selectedFuncion?: Funciones;
  public p?: Paciente;
  constructor(private pacienteService: PacientesService){}

  ngOnInit(){
    this.selectedFuncion = this.funciones[0];
    this.refreshTable();
  }

  selectFuncion(funcion:Funciones):void{
    this.selectedFuncion = funcion;
    // console.log(funcion);
  }

  refreshTable(){
    this.selectedFuncion = this.funciones[0];
    this.pacienteService.searchPaciente()
      .subscribe(pacientes =>{
        console.log(pacientes)
        this.pacientes = pacientes
      });
  }

  searchPacienteById(id: string):void{

    this.pacienteService.searchPacienteById(id)
      .subscribe(pc =>{
        this.pacientes=[];
        if(pc !=null){
          this.pacientes.push(pc!);
        }

      });
  }
  addPaciente($event: any){
    console.log($event);
    this.pacienteService.addPaciente($event)
      .subscribe(data =>{
        console.log(data)
        this.refreshTable();
      })
  }

  deletePaciente($event: any){
    console.log($event);
    this.p = $event;
    if (this.p?.idPaciente != undefined){
      this.pacienteService.deletePaciente(this.p.idPaciente)
        .subscribe(s=>{
          this.refreshTable();
        });
    }else{
      console.log('El id es nulo')
    }
  }

  fillForm($event: any){
    this.p = $event;
    this.selectedFuncion = this.funciones[2];
    console.log(this.p)
  }

  updatePaciente($event: any){
    this.p = $event;
    if (this.p?.idPaciente != undefined){
      this.pacienteService.updatePaciente(this.p)
        .subscribe(data =>{
          console.log(data)
          this.refreshTable();
        })
    }
  }

}
