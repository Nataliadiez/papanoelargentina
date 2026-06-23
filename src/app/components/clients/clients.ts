import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class ClientsComponent {
  protected readonly clients = ['Vital', 'PwC', 'Alaria'];
}
