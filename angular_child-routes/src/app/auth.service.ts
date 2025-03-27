import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin(): boolean {
    console.log('AuthService.isAdmin() called - returning TRUE for demo');
    return true; // TEMPORARILY RETURN TRUE FOR TESTING ADMIN GUARD ALLOWING ACCESS

    // Uncomment the following lines to simulate not being an admin for demonstration
    // console.log('AuthService.isAdmin() called - always returning false for demo');
    // return false;
  }
}
