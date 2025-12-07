import { Component } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital-frontend';
  personasOpen = false;

  constructor(private authService: AuthService) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  getCurrentUserName(): string {
    const currentUser = this.authService.getCurrentUser();
    return currentUser ? currentUser.nombre : '';
  }

  getUserRole(): string {
    const currentUser = this.authService.getCurrentUser();
    return currentUser ? currentUser.rol : '';
  }

  togglePersonas(event: Event): void {
    event.preventDefault();
    this.personasOpen = !this.personasOpen;
  }

  closePersonas(): void {
    this.personasOpen = false;
  }
}
