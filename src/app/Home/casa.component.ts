import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 
import { filter } from 'rxjs/operators'; 
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-casa',
  standalone: true,
  imports: [RouterModule, CommonModule, CardModule, ButtonModule, ReactiveFormsModule, CarouselModule, TagModule], 
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss'],
})
export class CASAComponent {
  // Para la visibilidad del formulario
  showButtons: boolean = true; 

  // Formulario reactivo
  profileForm: FormGroup;

  // Productos para el carrusel
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
  ];

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

  // Inicialización del formulario reactivo
  constructor(private fb: FormBuilder, private router: Router) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      opinion: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue],
    });

    // Controlar la visibilidad del botón según la URL
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showButtons = event.url === '/CASA';
      });
  }

  // Método para el envío del formulario
  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  // Método para determinar la severidad del estado de inventario
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}


