import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product";
import {products} from "../../data/products.data";

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  @Input() product!: Product;
  @Output() productEvent: EventEmitter<Product> = new EventEmitter();
  onAddCart(product: Product) {
   this.productEvent.emit(product);
  }
  protected readonly products = products;
}
