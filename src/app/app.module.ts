import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SiderComponent } from './sider/sider.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SongsheetComponent } from './songsheet/songsheet.component';
import { SongsheetshowComponent } from './songsheetshow/songsheetshow.component';
import { UserinfoshowComponent } from './userinfoshow/userinfoshow.component';
import { SearchmusicComponent } from './searchmusic/searchmusic.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SiderComponent,
    MainComponent,
    FooterComponent,
    SongsheetComponent,
    SongsheetshowComponent,
    UserinfoshowComponent,
    SearchmusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
