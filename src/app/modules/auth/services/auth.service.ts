import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

interface LoginPayload {
  documento: string;
  password: string;
}

interface LoginResponse {
  token?: string;
  empleado?: any;
  user?: any;
  rol?: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;
  private readonly STORAGE_KEY = 'currentUser';
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.currentUser = JSON.parse(stored);
    }
  }

  login(documento: string, password: string): Observable<LoginResponse> {
    const payload: LoginPayload = { documento, password };

    return this.http.post<LoginResponse>(`${this.baseUrl}/login/`, payload).pipe(
      tap(response => {
        if (!response) {
          return;
        }

        const userData = response.empleado ?? response.user ?? response;
        this.currentUser = userData;

        const payloadToStore = {
          ...userData,
          token: response.token,
          rol: userData?.rol?.nombre ?? userData?.rol ?? response.rol,
        };

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(payloadToStore));
      })
    );
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
