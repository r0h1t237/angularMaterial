import { AfterViewInit, Component,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrl: './mat-table.component.css'
})
export class MatTableComponent implements AfterViewInit{
  // it shows and hide column of table and also order of column in table
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  // for simple table
  // dataSource = ELEMENT_DATA;

  // for filter table
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }
  logRow(data: any) {
    console.log(data, "logging row data")
  }

  applyFilter(input:any){  
  let enteredValue=input.target.value
  console.log(enteredValue,'filter input')
  this.dataSource.filter = enteredValue.trim().toLowerCase()
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator= this.paginator;
  }
}
