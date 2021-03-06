import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },

  {
    path: 'calculador',
    loadChildren: () => import('./calculador/calculador.module').then( m => m.CalculadorPageModule)
  },
  {
    path: 'info',
    loadChildren: ()=> import('./info/info.module').then(m =>  m.InfoPageModule)
  },  
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },  {
    path: 'resultado',
    loadChildren: () => import('./resultado/resultado.module').then( m => m.ResultadoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
