import {Component, OnInit, ViewEncapsulation, HostListener, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  },
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];
  test: any[];
  public elWidth: number;
  private el: ElementRef;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, el: ElementRef) {
    this.elWidth = 641;
  }

  public showSidebar() {
    return this.elWidth > 640
  }

  // private resizeWorks(): void {
  //   this.elWidth = this.el.nativeElement.width;
  //   console.log(this.elWidth)
  // }

  // @HostListener('window:resize', ['$event.target'])elHeight:number
  onResize(e) {
    console.log(e.target.innerWidth)
    this.elWidth = e.target.innerWidth
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Admin',
        icon: 'pi pi-fw pi-lock',
        items: [
          {
            label: 'Bundles',
            icon: 'pi-fw fa fa-paw',
            routerLink: 'bundles',
          },
        ],
      },
      {
        label: 'Reports',
        icon: 'pi-fw fa fa-chart-pie',
      },
    ];
// tslint:disable-next-line: max-line-length
    // this.activatedRoute.url.pipe(map(segments => segments.join(''))).subscribe(p => console.log(p));
    // console.log(this.activatedRoute.toString())
  }
}
