import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
// import { AccountsServices } from "./accounts.service";
import { Student,Token } from '../student-index/student'
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class StudentResolve implements Resolve<Student> {
    user
    constructor( route: ActivatedRoute,
        private router: Router) { }

    students: Student
    id
    holder
    subscription: Subscription

    dataSource = new BehaviorSubject<any>(null);


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Student> | Promise<any> | any {


        console.log("state", state.url)
        console.log("idd :::", route.params['id'])
        return route.params['id']


    }


}