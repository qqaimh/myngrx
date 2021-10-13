import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBookComponent } from './my-book/my-book.component';

import { MyCounterComponent } from './my-counter/my-counter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full'
  },
  {
    path: 'counter',
    component: MyCounterComponent,
  },
  {
    path: 'book',
    component: MyBookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
