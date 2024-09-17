import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';​
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, TruncatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addToCartEvent = new EventEmitter<Product>();

  onAddToCartClicked(){
    this.addToCartEvent.emit(this.product);
}

}
