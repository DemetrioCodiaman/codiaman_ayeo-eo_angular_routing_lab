import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isAdmin = false; // Replace with actual logic to check if user is admin
    if (!isAdmin) {
      this.router.navigate(['/home']); // Redirect to home if not admin
      return false;
    }
    return true;
  }
}