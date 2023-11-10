import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { SideBarComponent } from './side-bar/sideBar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule } from "@angular/material/list"

@NgModule({
    imports: [
        RouterModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [SideBarComponent],
    declarations: [SideBarComponent],
    providers: [],
})
export class SharedModule { }
