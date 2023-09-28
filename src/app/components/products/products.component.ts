import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/domain/Product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Product[];
  
  constructor(
    private productService:ProductService,
    private router:Router
  ){
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe((data)=>{
      console.log(data);
      this.products = data;
    })
  }

  goToDetails(id:number){
    this.router.navigate(["products/",id]);
  }

}
