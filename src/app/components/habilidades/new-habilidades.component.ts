import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesService } from '../../service/habilidades.service';
import { Habilidades } from '../../model/habilidades';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent implements OnInit {

  nombre: string;
  porcentaje: number;

  constructor(private habilidadesS: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const habilidades = new Habilidades(this.nombre, this.porcentaje);

    this.habilidadesS.save(habilidades).subscribe(
      data => {
        alert("Habilidad creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló al añadir la habilidad");
        this.router.navigate(['']);
      }
    )
  }

}
