import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let isAuth = inject(UserAuthService);
  return isAuth.isLogedStatus;
};
