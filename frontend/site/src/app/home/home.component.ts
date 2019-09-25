import { Component, OnInit } from '@angular/core';
import { NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}


