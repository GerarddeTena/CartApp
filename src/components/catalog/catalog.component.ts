import {Component, EventEmitter, Input, Output} from '@angular/core';
import {products} from "../../data/products.data";
import {Product} from "../../models/product";
import {ProductCartComponent} from "../product-cart/product-cart.component";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  title = 'Product List';
  @Input() product!: Product[];
  @Output() productEvent: EventEmitter<Product> = new EventEmitter();

  onAddCart(product: Product) {
    this.productEvent.emit(product);
  }
  protected readonly products = products;
}
