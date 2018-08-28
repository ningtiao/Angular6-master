import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [ 
      new Product(1, "第1个商品", 1.99, 0.5,"这是1个商品,angular6入门实战",["电子商品"]),
      new Product(2, "第2个商品", 2.99, 1,"这是2个商品,angular6入门实战",["电子商品"]),
      new Product(3, "第3个商品", 4.99, 0.2,"这是3个商品,angular6入门实战",["电子商品"]),
      new Product(4, "第4个商品", 2.99, 1.5,"这是4个商品,angular6入门实战",["电子商品"]),
      new Product(5, "第5个商品", 5.99, 4.5,"这是5个商品,angular6入门实战",["电子商品"]),
      new Product(6, "第6个商品", 6.99, 3.5,"这是6个商品,angular6入门实战",["图书","硬件设备"]),
    ]
  }

}
// 组件类信息
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){

  }
}