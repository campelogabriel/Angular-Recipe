import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if (req.url.includes('spoonacular')) return next(req);

  if (!token) {
    window.location.href = window.location.origin + '/login';
  }

  const reqClone = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });
  return next(reqClone);
};
