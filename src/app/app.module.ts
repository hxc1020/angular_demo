import {BrowserModule} from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdTabsModule,
  MdToolbarModule, MdSidenavModule, MdIconModule, MdListModule,
  MdChipsModule, MdGridListModule, MdInputModule, MdMenuModule
} from '@angular/material';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {AlertModule, CarouselModule} from 'ngx-bootstrap';
import {HomepageComponent} from './home/homepage/homepage.component';
import {rootRouterConfig} from './app.routes';
import {NoticeComponent} from './notice/notice.component';
import {ActivityComponent} from './activity/activity.component';
import {BlogComponent} from './blog/blog.component';
import {BookComponent} from './book/book.component';
import {PersonalComponent} from './personal/personal.component';
import {AboutComponent} from './about/about.component';
import {RegisterComponent} from './register/register.component';
import {NoteComponent} from './shared/component/note/note.component';
import { SignInComponent } from './sign/sign-in/sign-in.component';
import { SignUpComponent } from './sign/sign-up/sign-up.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SignInService} from './sign/sign-in/sign-in.service';
import {MyHttp} from './shared/service/MyHttp';
import {AuthService} from './shared/service/auth.service';
import { UserInfoComponent } from './user-info/user-info.component';


const rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);


@NgModule({
  declarations: [
    AppComponent, HomepageComponent, NoticeComponent,
    ActivityComponent, BlogComponent, BookComponent, PersonalComponent,
    AboutComponent, RegisterComponent, NoteComponent, SignInComponent, SignUpComponent, UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MdButtonModule, MdCheckboxModule, MdTabsModule, MdCardModule, MdToolbarModule, MdSidenavModule,
    MdIconModule, MdListModule, MdChipsModule, MdGridListModule, MdInputModule, MdMenuModule,
    AlertModule.forRoot(), CarouselModule,
    rootRouterModule,
    BrowserAnimationsModule, NoopAnimationsModule
  ],
  providers: [SignInService, MyHttp, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
