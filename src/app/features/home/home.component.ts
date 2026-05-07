import { TopbarComponent } from '@/app/shared/components/topbar/topbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [TopbarComponent],
  styles: []
})
export class HomeComponent {

}
