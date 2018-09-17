import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() sideMenu : any;

  opened:boolean=true;
  fixed: boolean;
  topGap:number;
  bottomGap:number;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'menuIcon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/menu-icon.svg'));
  }

  ngOnInit() {
  }

}
