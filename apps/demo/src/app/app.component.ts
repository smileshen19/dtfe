import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutNormalComponent } from '@dtfe/ui/layout/layout-normal';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LayoutNormalComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo';
}
