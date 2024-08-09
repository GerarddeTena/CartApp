import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { products } from '../../data/products.data';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { CartItems } from '../../models/cart-items';
import { NavbarComponent } from '../navbar/navbar.component';
import { ModalCartComponent } from '../modal-cart/modal-cart.component';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogComponent, NavbarComponent, ModalCartComponent, CartComponent],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit {

  product!: Product[];

  items: CartItems[] = [];

  showCart: boolean = false;

  total: number = 0;

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.product = this.service.findAll();
    this.items = JSON.parse(localStorage.getItem('cartItems')!) || [];
    this.updateTotal();
  }

  onAddCart(product: Product): void {
    const selectedItem = this.items.find(item => item.product.id === product.id);
    if (selectedItem) {
      this.items = this.items.map(item => {
        return item.product.id === product.id ?
          { ...item, quantity: item.quantity + 1 } :
          item;
      });
    } else {
      this.items = [...this.items, { product: product, quantity: 1 }];
    }
    this.updateTotal();
    this.updateLocalStorage();
  }

  onDeleteCart(id: number) {
    const itemIndex = this.items.findIndex(item => item.product.id === id);

    if (itemIndex !== -1) {
      const items = this.items[itemIndex];

      if (items.quantity > 1) {
        items.quantity -= 1;
      } else {
        this.items = this.items.filter(item => item.product.id !== id);
      }
      this.updateTotal();
      this.updateLocalStorage();
    }
  }

  updateTotal() {
    this.total = this.items.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
  }

  updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  setShowCart() {
    this.showCart = !this.showCart;
  }

  protected readonly products = products;
}
