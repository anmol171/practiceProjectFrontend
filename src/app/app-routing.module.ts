// import { AuthGuard } from './core/guards/auth.guard';
// import { AdminComponent } from './core/layout/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AuthComponent} from './layout/auth/auth.component';
import { CommonComponent } from './common/common.component';

const routes: Routes = [
//   {
//     path: '',
//     component: AdminComponent,
//     canActivate:[AuthGuard],
//     children: [
//       {
//         path: '',
//         redirectTo: '/dashboard',
//         pathMatch: 'full'
//       },
//       {
//         path: 'dashboard',
//         loadChildren:'./features/dashboard/dashboard.module#DashboardModule'
//       },
//       {
//         path: 'assessment',
//         loadChildren:'./features/assessment/assessment.module#AssessmentModule'
//       },
//       {
//         path: 'traning',
//         loadChildren:'./features/traning/traning.module#TraningModule'
//       },
//       {
//         path: 'question',
//         loadChildren:'./features/question/question.module#QuestionModule'
//       },
//       {
//         path: 'department',
//         loadChildren:'./features/department/department.module#DepartmentModule'
//       },
//       {
//         path: 'users',
//         loadChildren:'./features/users/users.module#UsersModule'
//       }
      
//   
//     ]
//   },
  {
    path: 'common',
    // loadChildren: './features/auth/auth.module#AuthModule'
    component: CommonComponent,
    // children: [
    //   {
    //     path: 'auth',
    //     loadChildren: './theme/auth/auth.module#AuthModule'
    //   },
    //   {
    //     path: 'maintenance/offline-ui',
    //     loadChildren: './theme/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
//   providers:[AuthGuard]
})
export class AppRoutingModule { }
