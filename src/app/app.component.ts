import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links: Array<object>;
  userName: string = null;

  ngOnInit(): void {
    this.links = this.getLinks();
  }

  getLinks() {
    const links = [{
      link: '/homepage',
      label: '首页',
      linkIcon: 'home'
    }, {
      link: '/notice',
      label: '公告',
      linkIcon: 'lightbulb_outline'
    }, {
      link: '/activity',
      label: '活动',
      linkIcon: 'accessibility'
    }, {
      link: '/blog',
      label: '博客',
      linkIcon: 'chrome_reader_mode'
    }, {
      link: '/book',
      label: '书',
      linkIcon: 'folder'
    }, {
      link: '/about',
      label: '关于',
      linkIcon: 'announcement'
    }];
    return links;
  }

  isSigned(): Boolean {
    this.userName = localStorage.getItem('userName');
    return this.userName !== null && 'undefined' !== this.userName;
  }
}

