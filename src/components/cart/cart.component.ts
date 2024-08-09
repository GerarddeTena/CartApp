import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { CartItems } from '../../models/cart-items';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() items: CartItems[] = [];
  @Input() total: number = 0;
  @Output() idProduct: EventEmitter<number> = new EventEmitter();

  onDeleteCart(id: number) {
    this.idProduct.emit(id);
  }
}
