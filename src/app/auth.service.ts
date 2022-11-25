import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";



@Injectable()
export class AuthService implements CanActivate, CanActivateChild {
  private _isLoggedIn = new BehaviorSubject<boolean>(false)
  isLoggedIn = this._isLoggedIn.asObservable()

  constructor(private router: Router) {
    const token = this.checkForKey()
    this._isLoggedIn.next(token)
  }


  checkForKey(): boolean {
    return !!localStorage.getItem("auth_key")
  }


  login(email: string, pass: string): Promise<boolean> {
		const promise = new Promise<boolean>((res, rej) => {
      if (email === "admin" && pass === "admin") {
        this._isLoggedIn.next(true)
        localStorage.setItem("auth_key", "superCoolKey")
        this.router.navigate(["/home"])
        res(true)
      } 
      rej(false)
		})
		return promise
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this._isLoggedIn.getValue()) return true
    else {
      this.router.navigate(["/"])
      return false
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state)
  }
}