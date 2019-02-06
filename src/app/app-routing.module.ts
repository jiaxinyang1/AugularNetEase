import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchmusicComponent } from './searchmusic/searchmusic.component';
import { SongsheetshowComponent } from './songsheetshow/songsheetshow.component';
import { SongsheetComponent } from './songsheet/songsheet.component';

const routes: Routes = [
  {path:'',component:SearchmusicComponent},
  {path:'search',component:SearchmusicComponent},
  {path:'sheet/:id',component:SongsheetshowComponent,runGuardsAndResolvers:'paramsChange'},
  {path:'sheeteditor',component:SongsheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
