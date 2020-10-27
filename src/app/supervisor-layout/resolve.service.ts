import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
// import { SupervisorAccountsServices } from "./sup-account.service";
import { Supervisor } from '../student-index/student'
import { BehaviorSubject } from 'rxjs';
import { Token } from '../student-index/student'
import { Subscription } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class SupervisorResolve implements Resolve<Supervisor> {
    user
    constructor(  route: ActivatedRoute,
        private router: Router) { }

    supervisor: Supervisor
    id
    holder
    subscription: Subscription

    dataSource = new BehaviorSubject<any>(null);


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Supervisor> | Promise<any> | any {


        console.log("state", state.url)
        console.log("idd :::", route.params['id'])
        return route.params['id']


    }


}





//private dataSource = new BehaviorSubject<any>(null);

// getCurrentUser(): Observable<any> {
//     return this.dataSource.asObservable();

// }

// CurrentUser(token)  {


//     console.log("works!")
//     this.dataSource.next(token)
//     this.getCurrentUser().subscribe(data => {
//         console.log("test", data)

//         this.accountsServices.
//             getStudentService(data)
//             .subscribe((data) => {
//                 console.log(data.body)
//                 this.students = data.body
//                 console.log("students   :", this.students)

//             })
//     })




// }