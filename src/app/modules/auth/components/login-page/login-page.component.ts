import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  documento: string = '';
  password: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.documento || !this.password) {
      this.errorMessage = 'Por favor, ingrese documento y contraseña';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.documento, this.password).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.success) {
          // Redirigir según rol
          const role = response.user.rol;
          switch (role) {
            case 'Administrador':
              this.router.navigate(['/dashboard']);
              break;
            case 'Médico':
              this.router.navigate(['/citas']);
              break;
            case 'Enfermero':
              this.router.navigate(['/historias']);
              break;
            case 'Administrativo':
              this.router.navigate(['/pacientes']);
              break;
            default:
              this.router.navigate(['/dashboard']);
          }
        } else {
          this.errorMessage = response.error;
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Error al conectar con el servidor';
      }
    });
  }
}
