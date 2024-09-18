import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../appService/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const rout = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    alert('Please login');
    rout.navigateByUrl('');
    return false;
  }
};
