import { Routes } from '@angular/router';
import { Home } from './home/home';
import { InactivePost } from './inactive-post/inactive-post';
import { ActivePost } from './active-post/active-post';
import { Detail } from './detail/detail';
import { authGuard } from './shared/auth-guard/auth-guard';
import { Signup } from './login-signup/signup/signup';
import { Login } from './login-signup/login/login';


export const routes: Routes = [
     { path: '', component: Home },
     { path: 'inactive-post', component: InactivePost }, //i post inattivi sono protetti e puoi accedere solo se sei loggato!!
     { path: 'active-post', component: ActivePost },
     { path: 'post/:id', component: Detail },
     //{ path: 'users/:id', component: UserProfilo, canActivate:[authGuard] }, => se avessi un router amnche per i dettagli dei profili
     { path: 'users', loadChildren: ()=> import ('./users/users-routes')
          .then(m => m.Usersroutes), //TRASFORMA IN LAZY LOADING 
          canActivate:[authGuard] //auth guard!!!
           },
     { path: 'signup', component: Signup },
     { path: 'login', component: Login },

     { path: '**', redirectTo: '' } //WILDCARD reindirizzo alla home tutte le routs non valide!!! 
   
];
