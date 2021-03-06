import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-trigger',
  templateUrl: './menu-trigger.component.html',
  styleUrls: ['./menu-trigger.component.scss']
})
export class MenuTriggerComponent {
  @Input() isMenuOpen = false;
}
