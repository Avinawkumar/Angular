import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrl: './products-component.component.css'
})
export class ProductsComponentComponent {
  products: Product[] = [
    new Product('Laptop', 1200, true),
    new Product('Smartphone', 800, true),
    new Product('Headphones', 100, false),
    new Product('Camera', 600, true),
    new Product('Tablet', 300, false),
    new Product('Fitness Tracker', 50, true),
    new Product('Bluetooth Speaker', 80, true),
    new Product('Gaming Console', 400, false),
    new Product('Smartwatch', 150, true),
    new Product('External Hard Drive', 120, true)
  ];

}

