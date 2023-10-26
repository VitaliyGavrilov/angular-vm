import { Component, Input } from "@angular/core";
import { IProduct } from "src/app/models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.comp.html'
})

export class ProductComp {
  @Input() product: IProduct

  details =  false
}
