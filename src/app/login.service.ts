import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs'; // Correct import statement

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isAuthenticatedFlag: boolean = false;

  constructor(
    private router: Router
  ) // Inject your authentication service here (e.g., AngularFireAuth).
  {}
  isAuthenticated(): boolean {
    return this.isAuthenticatedFlag;
  }

  login(username: string, password: string): Observable<string> {
    // Placeholder example:
    this.isAuthenticatedFlag = true;
    return of('someUser');
  }

  logout() {
    // Implement the logout logic here (e.g., AngularFireAuth sign out).
    // Example: return this.afAuth.signOut();
    this.isAuthenticatedFlag = false;
  }
}
