import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../../models/medicamento.model';
import { MedicamentoService } from '../../services/medicamento.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stock: Stock[] = [];
  loading: boolean = true;

  constructor(private medicamentoService: MedicamentoService) {}

  ngOnInit(): void {
    this.loadStock();
  }

  loadStock(): void {
    this.loading = true;
    this.medicamentoService.getStock().subscribe({
      next: (data) => {
        this.stock = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getStockClass(cantidad: number): string {
    if (cantidad < 100) return 'danger';
    if (cantidad < 300) return 'warning';
    return 'success';
  }
}
