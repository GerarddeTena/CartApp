import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItems } from '../../models/cart-items';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-modal-cart',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './modal-cart.component.html',
  styleUrl: './modal-cart.component.css'
})
export class ModalCartComponent {

  @Input() items: CartItems[] = [];
  @Input() total: number = 0;
  @Output() showCart = new EventEmitter();
  @Output() idProduct: EventEmitter<number> = new EventEmitter();

  onDeleteCart(id: number) {
    this.idProduct.emit(id);
  }

  setShowCart() {
    this.showCart.emit();
  }
}
