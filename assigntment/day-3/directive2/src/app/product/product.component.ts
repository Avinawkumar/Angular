import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})


export class ProductComponent {

  products: Product[] = [
    { name: 'Product A', price: 60, available: true },
    { name: 'Product B', price: 40, available: false },
    { name: 'Laptop', price: 1200, available: true },
    { name: 'Smartphone', price: 800, available: true },
    { name: 'Headphones', price: 100, available: false },
    { name: 'Camera', price: 600, available: true },
    { name: 'Tablet', price: 300, available: false },
    { name: 'Fitness Tracker', price: 50, available: true },
    { name: 'Bluetooth Speaker', price: 80, available: true },
    { name: 'Gaming Console', price: 400, available: false },
    { name: 'Smartwatch', price: 150, available: true },
    { name: 'External Hard Drive', price: 120, available: true }
    
  ];

  priceThreshold: number = 50; 

  


}
