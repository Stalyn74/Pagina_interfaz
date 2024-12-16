import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Propiedad de productos
  products = [
    { 
      name: 'Top 1 Ventas', 
      price: 100, 
      inventoryStatus: 'In Stock', 
      image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/552520/capsule_616x353.jpg?t=1694554810'
    },
    { 
      name: 'Top 2 Ventas', 
      price: 150, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0311/cp7G7TILGKzAzLGb1MMn9hyt.jpg'
    },
    { 
      name: 'Top 3 Ventas', 
      price: 200, 
      inventoryStatus: 'In Stock', 
      image: 'https://www.desconsolados.com/wp-content/uploads/2014/02/Outlast1376438305_1380640487.jpg'
    },
    { 
      name: 'Top 4 Ventas', 
      price: 100, 
      inventoryStatus: 'In Stock', 
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1262540/capsule_616x353.jpg?t=1716834386'
    },
    { 
      name: 'Top 5 Ventas', 
      price: 100, 
      inventoryStatus: 'In Stock', 
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202303/0116/90966f8c33926d1ffd144b560322873f9435f480d29606d8.jpg'
    },
    { 
      name: 'Top 6 Ventas', 
      price: 100, 
      inventoryStatus: 'In Stock', 
      image: 'https://pbs.twimg.com/media/Eu6wiobXAAIgZ-S.jpg:large'
    },


    // Agrega más productos si es necesario
  ];

  // Opciones de visibilidad y desplazamiento para el carrusel
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 5,
      numScroll: 1
    }
  ];

  // Método para determinar la severidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';  // Severidad para "En Stock"
      case 'Out of Stock':
        return 'danger';   // Severidad para "Agotado"
      case 'Low Stock':
        return 'warning';  // Severidad para "Bajo stock"
      default:
        return 'info';     // Severidad por defecto
    }
  }
}
