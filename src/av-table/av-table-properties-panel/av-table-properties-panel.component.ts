import {Component, Input, OnInit} from '@angular/core';
import {AvTableConfig} from "../av-table/AvTableConfig";

@Component({
  selector: 'app-av-table-properties-panel',
  templateUrl: './av-table-properties-panel.component.html',
  styleUrls: ['./av-table-properties-panel.component.css']
})
export class AvTablePropertiesPanelComponent implements OnInit {

  @Input() tableConfig : AvTableConfig;

  constructor() { }

  ngOnInit() {
  }

}
