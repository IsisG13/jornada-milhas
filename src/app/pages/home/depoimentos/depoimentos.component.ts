import { Component, OnInit } from '@angular/core';
import { DepoimentosService } from 'src/app/core/servicos/depoimentos/depoimentos.service';
import { Depoimentos } from 'src/app/core/types/types';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit{

  depoimentos!: Depoimentos[];
  constructor(private service: DepoimentosService) {}
  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.depoimentos = res;
    });
  }
}