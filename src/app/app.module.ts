import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StartComponent } from './start/start.component';
import { ElModule } from 'element-angular';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component'
import { RouterModule, Routes } from '@angular/router';

const routeConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: '/product/:productTitle', component: ProductDetailComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StartComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot(),
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
