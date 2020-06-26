import { NgModule } from '@angular/core';
import { MatBreadcrumbComponent } from './mat-breadcrumb.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [MatBreadcrumbComponent],
  imports: [
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [MatBreadcrumbComponent]
})
export class MatBreadcrumbModule { }
