import { Component, OnInit } from '@angular/core';
import { Http, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentsmanagementService } from '../studentsmanagement.service';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.css'],
  providers: [StudentsmanagementService]
})
export class ManageSubjectsComponent implements OnInit {
  
  statusupdatesubject: boolean = false;
  statusaddsubject: boolean = false;
  statussubjecttable = true;
  searchText: string = '';
  url: string = "http://5b1104db3ffdad0014dacd97.mockapi.io/managestudents/subject/";
  //url: string = "http://192.168.101.129:8080/subject/";

  arrSubjects: any[];
  arrSubject: any[];
  idos: string;
  nameos: string;

  constructor(private getJson: StudentsmanagementService, private http: Http) {

  }

  clickSubjectList() {
    if (this.statussubjecttable === false) {
      this.statussubjecttable = true;
      this.statusaddsubject = false;
      this.statusupdatesubject = false;
      this.searchText = '';
    }
  }

  clickAddSubject() {
    if (this.statusaddsubject === false) {
      this.statussubjecttable = false;
      this.statusaddsubject = true;
      this.statusupdatesubject = false;
      this.searchText = '';
    }
  }

  getAllData() {
    this.getJson.getData(this.url).subscribe((response: any) => {this.arrSubjects =  response;
    });
  }
  mang = {};
  AddSubject(formAddSubject) {
    if (this.statusaddsubject === true) {
      this.getJson.sendPostForm(this.url, formAddSubject.value);
      this.mang = Array.of(formAddSubject);
      alert(this.mang+" - ")
      this.getAllData();
      alert("Thêm Thành Công!");
    }

  }

  DeleteArray(arrSubjects: any[],id: string)
  { 
      arrSubjects.splice(arrSubjects.findIndex(i => i.id === id),1)
  }

  AddArray(arrSubjects: any[],value: any)
  {
    this.getAllData();
  }

  CannelAddSubject() {
    this.statusaddsubject = false;
  }
  DeleteSubject(subject: any,location: number) {
    let cf = confirm("Bạn có muốn xóa sinh viên " + subject.name)
    if (cf == true) {
      console.log(this.getJson.sendDeleteForm(this.url+subject.id));
      this.DeleteArray(this.arrSubjects,subject.id); 
      alert("Xóa Thành Công!");
    }

  }
  ReSetInput(formAddSubject: any) {
    this.idos = '';
    this.nameos = '';
  }
  UpdateSubject(formUpdateSubject: any) {
    if (this.statusupdatesubject === true) {
      this.getJson.sendPutForm(this.url + this.idos, formUpdateSubject.value);
    
      this.getAllData();
      alert("Cập Nhật Thành Công!");
      this.clickSubjectList();
    }
  }
  UpdateSubjectIn(subject: any) {
    this.statussubjecttable = false;
    this.statusupdatesubject = true;
    this.idos = subject.id;
    this.nameos = subject.name;
    
  }

  CannelUpdateSubject() {
    this.statusupdatesubject = false;
  }

  ngOnInit() {
    this.getAllData();
  }


}
