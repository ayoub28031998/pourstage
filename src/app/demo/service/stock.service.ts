import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }
  updateStock(stock:Stock){
    return this.http.put('assets/demo/data/stock.json',stock);
  }

  deleteStock(stock:Stock){
    return this.http.delete('assets/demo/data/stock.json');
  }

  getStock() {
      return this.http.get<any>('assets/demo/data/stock.json')
          .toPromise()
          .then(res => res.data as Stock[])
          .then(data => data);
  }
}

