import { Component, OnInit } from '@angular/core';
import { Http, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentsmanagementService } from '../studentsmanagement.service';

@Component({
  selector: 'app-manage-classes',
  templateUrl: './manage-classes.component.html',
  styleUrls: ['./manage-classes.component.css'],
  providers: [StudentsmanagementService]
})
export class ManageClassesComponent implements OnInit {

  statusupdateclass: boolean = false;
  statusaddclass: boolean = false;
  statusclasstable = true;
  searchText: string = '';
  //url: string = "http://5b1104db3ffdad0014dacd97.mockapi.io/managestudents/subject/";
  url: string = "http://192.168.101.129:8080/studentClass/";

  arrClasses: any[];

  idos: string;
  nameoc: string;
  nameom: string;

  constructor(private getJson: StudentsmanagementService, private http: Http) {

  }

  clickClassList() {
    if (this.statusclasstable === false) {
      this.statusclasstable = true;
      this.statusaddclass = false;
      this.statusupdateclass = false;
      this.searchText = '';
    }
  }

  clickAddClass() {
    if (this.statusaddclass === false) {
      this.statusclasstable = false;
      this.statusaddclass = true;
      this.statusupdateclass = false;
      this.searchText = '';
    }
  }

  getAllData() {
    this.getJson.getData(this.url).subscribe((response: any) => this.arrClasses =  response);

  }
  AddClass(formAddClass) {
    if (this.statusaddclass === true) {
      this.getJson.sendPostForm(this.url, formAddClass.value)
      .then(() => this.getAllData());
      alert("Thêm Thành Công!");
    }
  }

  DeleteArray(arrClasses: any[],id: string)
  { 
      arrClasses.splice(arrClasses.findIndex(i => i.id === id),1)
  }

  CannelAddClass() {
    this.statusaddclass = false;
  }
  DeleteClass(classc: any) {
    let cf = confirm("Bạn có muốn xóa lớp " + classc.name)
    if (cf == true) {
      this.getJson.sendDeleteForm(this.url+classc.id)
      .then(() => this.getAllData());
      alert("Xóa Thành Công!");
    }

  }
  ReSetInput() {
    this.idos = '';
    this.nameoc = '';
  }
  UpdateClass(formUpdateClass: any) {
    if (this.statusupdateclass === true) {
      this.getJson.sendPutForm(this.url + this.idos, formUpdateClass.value)
      .then(() => this.getAllData());
      alert("Cập Nhật Thành Công!");
      this.clickClassList();
    }
  }
  UpdateClassIn(classc: any) {
    this.statusclasstable = false;
    this.statusupdateclass = true;
    this.idos = classc.id;
    this.nameoc = classc.name;
    this.nameom = classc.monitor;
  }

  CannelUpdateClass() {
    this.statusupdateclass = false;
  }

  ngOnInit() {
    this.getAllData();
  }

}
