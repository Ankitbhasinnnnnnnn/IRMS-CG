import { Component } from '@angular/core';

import { SortEvent } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: string;
  date3: Date;
}
@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss'],
})
export class LeaveManagementComponent {
  visibleSidebar: boolean = false;
  products1: Product[] = [];

  constructor(private http: HttpClient) {}
  getProductsSmall() {
    return this.http
      .get<any>('assets/JSON/products-small.json')
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }

  ngOnInit() {
    this.getProductsSmall().then((data) => (this.products1 = data));
  }

  // customSort(event: SortEvent) {
  //     event.data.sort((data1, data2) => {
  //         let value1 = data1[event.field];
  //         let value2 = data2[event.field];
  //         let result = null;

  //         if (value1 == null && value2 != null)
  //             result = -1;
  //         else if (value1 != null && value2 == null)
  //             result = 1;
  //         else if (value1 == null && value2 == null)
  //             result = 0;
  //         else if (typeof value1 === 'string' && typeof value2 === 'string')
  //             result = value1.localeCompare(value2);
  //         else
  //             result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

  //         return (event.order * result);
  //     });
  // }
}
