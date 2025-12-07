import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;
  private readonly STORAGE_KEY = 'currentUser';

  constructor() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.currentUser = JSON.parse(stored);
    }
  }

  login(documento: string, password: string): Observable<any> {
    // Simulación de login con datos de prueba
    const mockUsers = [
      { documento: '12345678', password: '123456', rol: 'Administrador', nombre: 'Juan Pérez', id_emp: 1 },
      { documento: '87654321', password: '123456', rol: 'Médico', nombre: 'María García', id_emp: 2 },
      { documento: '11223344', password: '123456', rol: 'Enfermero', nombre: 'Carlos López', id_emp: 3 },
      { documento: '44332211', password: '123456', rol: 'Administrativo', nombre: 'Ana Torres', id_emp: 4 }
    ];

    const user = mockUsers.find(u => u.documento === documento && u.password === password);

    if (user) {
      const { password, ...userWithoutPassword } = user;
      this.currentUser = userWithoutPassword;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(userWithoutPassword));
      return of({ success: true, user: userWithoutPassword }).pipe(delay(500));
    } else {
      return of({ success: false, error: 'Credenciales incorrectas' }).pipe(delay(500));
    }
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getUserRole(): string | null {
    return this.currentUser?.rol || null;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  isAdmin(): boolean {
    return this.currentUser?.rol === 'Administrador';
  }
}
