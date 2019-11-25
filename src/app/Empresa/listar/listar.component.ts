import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../../Service/service.service';
import { Empresa } from 'src/app/Modelo/Empresa';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

    empresas: Empresa[];
  constructor(private service: ServiceService, private router: Router ) { }

  ngOnInit() {
    this.service.getEmpresas().subscribe(data => {
       this.empresas = data;

    })
  }

}
