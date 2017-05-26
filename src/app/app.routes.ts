/**
 * Created by 林皓 on 2017/5/14 0014.
 */
import {Routes} from '@angular/router';
import {HomepageComponent} from './home/homepage/homepage.component';
import {NoticeComponent} from './notice/notice.component';
import {ActivityComponent} from './activity/activity.component';
import {BlogComponent} from './blog/blog.component';
import {BookComponent} from './book/book.component';
import {PersonalComponent} from './personal/personal.component';
import {AboutComponent} from './about/about.component';
import {SignInComponent} from './sign/sign-in/sign-in.component';
import {SignUpComponent} from './sign/sign-up/sign-up.component';

export const rootRouterConfig: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'notice', component: NoticeComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'book', component: BookComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent}
  ];
