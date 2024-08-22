import { Component, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
blue: ThemePalette;

}
