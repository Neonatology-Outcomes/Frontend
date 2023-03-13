import {Component, ViewChild} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
})
export class ToolbarComponent {

  @ViewChild('sidenav') sidenav: MatDrawer;

  ngAfterViewInit() {
    // Use setTimeout to delay the toggle method until the next tick of the event loop
    setTimeout(() => {
      this.sidenav.toggle();
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
  
}