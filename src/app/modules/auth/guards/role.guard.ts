import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isAuth = this.authService.isAuthenticated();
    console.log('RoleGuard - isAuthenticated:', isAuth);
    console.log('RoleGuard - currentUser:', this.authService.getCurrentUser());
    
    if (!isAuth) {
      console.log('RoleGuard - Redirigiendo a login');
      this.router.navigate(['/login']);
      return false;
    }

    const requiredRoles = route.data['roles'] as Array<string>;
    const userRole = this.authService.getUserRole();
    console.log('RoleGuard - userRole:', userRole, 'requiredRoles:', requiredRoles);

    if (requiredRoles && requiredRoles.length > 0) {
      if (!userRole || !requiredRoles.includes(userRole)) {
        console.log('RoleGuard - Rol no autorizado');
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }

    console.log('RoleGuard - Acceso permitido');
    return true;
  }
}
