import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartComponent} from "../cart/cart.component";
import {CartItems} from "../../models/cart-items";
import {Environment} from "@angular/cli/lib/config/workspace-schema";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input() items: CartItems[] = [];

  @Output() showCart = new EventEmitter();

  setShowCart() {
    this.showCart.emit();
  }
}
