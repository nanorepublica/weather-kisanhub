import { Component, OnInit } from '@angular/core';

import { DisplayTypeService } from '../display-type.service'

import { DisplayType } from '../class';

@Component({
  selector: 'app-display-choice',
  templateUrl: './display-choice.component.html',
  styleUrls: ['./display-choice.component.css']
})
export class DisplayChoiceComponent implements OnInit {
  availableDisplays: DisplayType[];
  selectedDisplay: DisplayType;

  onSelect(display: DisplayType): void {
    this.selectedDisplay = display;
  }

  getDisplayChoices(): void {
    this.displayService.getDisplayTypes().subscribe(displayChoices => this.availableDisplays = displayChoices);
  }

  constructor(private displayService: DisplayTypeService) { }

  ngOnInit() {
    this.getDisplayChoices();
    this.onSelect(this.availableDisplays[0]);
  }
}
