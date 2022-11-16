import { Component, Input, OnInit } from '@angular/core';
import { PriceService } from '../price.service';
import {Subscription, timer} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})

export class PriceDisplayComponent implements OnInit {
  @Input() from!: string;
  @Input() to!: string;
  price!: number;
  timerSubscription!: Subscription;

  constructor(private priceService: PriceService) {}

  ngOnInit(): void { 
    this.timerSubscription = timer(0, 10000).pipe( 
    map(() => { 
      this.loadPriceData();
    }) 
  ).subscribe(); 
} 

  loadPriceData() {
    this.priceService.getPrice(this.from, this.to).subscribe(price => {
      this.price = price;
    });
  }

  get loading(): boolean {
    return this.price === undefined;
  }
}
