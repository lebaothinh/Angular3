import { Component, OnInit } from '@angular/core';
import { BoundElementPropertyAst } from '@angular/compiler';

@Component({
  selector: 'app-asideleft',
  templateUrl: './asideleft.component.html',
  styleUrls: ['./asideleft.component.css']
})
export class AsideleftComponent implements OnInit {

  constructor() { }
  selected = 1;
  arrOptions = [
    { id: 1, name: "Quản Lý Sinh Viên", link: "/managestudents"},
    { id: 2, name: "Quản Lý Môn Học", link: "/managesubjects"},
    { id: 3, name: "Quản Lý Lớp Học", link: "/manageclasses"},
    { id: 4, name: "Quản Lý Điểm", link: "/managemark"},
    { id: 5, name: "Thống Kê", link: "/statistics"},
  ]

  onSelected (id: number)
  {
    this.selected = id;
  }
  ngOnInit() {
  }

}
