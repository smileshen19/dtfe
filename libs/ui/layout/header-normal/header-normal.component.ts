import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'dtfe-header-normal',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header-normal.component.html',
  styleUrl: './header-normal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNormalComponent {
  @Output() menuClick = new EventEmitter<any>();
}
