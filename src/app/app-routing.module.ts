import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NetworkAwarePreloadingService} from './network-aware-preloading.service';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NetworkAwarePreloadingService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
