import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public title: string = '';

  public description: string = '';

  public img: string = '';

  public videoLink: string = '';

  ngOnInit(): void {
    this.title = '';
  }

  saveCustomCard() {
    console.log(this.title);
  }
}
