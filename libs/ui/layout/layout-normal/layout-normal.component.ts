import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderNormalComponent } from '@dtfe/ui/layout/header-normal';

@Component({
  selector: 'dtfe-layout-normal',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    HeaderNormalComponent,
  ],
  templateUrl: './layout-normal.component.html',
  styleUrl: './layout-normal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutNormalComponent {}
