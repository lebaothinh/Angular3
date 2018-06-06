import { Component, OnInit } from '@angular/core';
import { Http, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentsmanagementService } from '../studentsmanagement.service';
import { ManageStudentsComponent } from '../manage-students/manage-students.component';
import { ManageSubjectsComponent } from '../manage-subjects/manage-subjects.component';
import { element } from 'protractor';

@Component({
  selector: 'app-manage-mark',
  templateUrl: './manage-mark.component.html',
  styleUrls: ['./manage-mark.component.css'],
  providers: [StudentsmanagementService,
    ManageStudentsComponent,
    ManageSubjectsComponent
  ]
})
export class ManageMarkComponent implements OnInit {

  statusupdatemark: boolean = false;
  statusaddmark: boolean = false;
  statusmarktable = true;
  disabletable = true;

  url: string = "http://192.168.101.129:8080/score/";
  urlstudent: string = "http://192.168.101.129:8080/student/";
  urlsubject: string = "http://192.168.101.129:8080/subject/";

  arrMarks: any[];
  arrStudents: any[];
  arrSubjects: any[];

  idom: string;
  idost: string;
  idosu: string;
  score: number= 0;
  nameost: string;
  nameosu: string;
  searchText: string = '';
  btnupdatemark: string = "Chỉnh Sửa";

  constructor(private getJson: StudentsmanagementService, private http: Http) {

  }

  clickMarkList() {
    if (this.statusmarktable === false) {
      this.statusmarktable = true;
      this.statusaddmark = false;
      this.statusupdatemark = false;
      this.searchText = '';
    }
  }

  clickAddMark() {
    if (this.statusaddmark === false) {
      this.statusmarktable = false;
      this.statusaddmark = true;
      this.statusupdatemark = false;
      this.searchText = '';
    }
  }

  getAllDataStudent() {
    this.getJson.getData(this.urlstudent)
      .subscribe((res: any) => this.arrStudents = res);
  }

  getAllDataSubject() {
    this.getJson.getData(this.urlsubject)
      .subscribe((res: any) => this.arrSubjects = res);
  }

  getAllData() {
    this.getJson.getData(this.url)
      .subscribe((response: any) => {
        this.arrMarks = response;
      });

  }

  UpdateMark()
  {
    if (this.btnupdatemark == "Chỉnh Sửa")
    {
      this.btnupdatemark = "Lưu";
      this.disabletable = false;

    }
    else
    {
      this.btnupdatemark = "Chỉnh Sửa";
      this.disabletable = true;
      this.arrMarks.forEach(element => {

      })
    }
  }

  CannelMark
  UpdateScore(value: any,event: any)
  {
    this.idom = value.id;
    value.score = event.target.value;
    this.UpdateMarkIntoDataBase(value);
  }

  ChangeSelectSubject(event: any) {
    this.idosu = event.target.value;
    if (this.idosu == "allsubjects") {
      this.getAllData();
    }
    else {
      this.getJson.getData(this.url + "subject/" + this.idosu)
        .subscribe((res: any) => this.arrMarks = res);
    }
  }

  ChangeValueStudent(event: any) {
    this.idost = event.target.value;
    this.arrStudents.forEach(element => {
      if (element.studentID == this.idost) {
        this.nameost = element.student_Name;
      }
    });
  }

  ChangeValueSubject(event: any) {
    this.idosu = event.target.value;
    this.arrSubjects.forEach(element => {
      if (element.id == this.idosu) {
        this.nameosu = element.name;
      }
    });
  }

  AddMark(formAddMark) {
    if (this.statusaddmark === true) {
      this.getJson.sendPostForm(this.url, formAddMark.value);
      this.getAllData();
      alert("Thêm Thành Công!");
    }

  }

  DeleteArray(arrMarks: any[], id: string) {
    arrMarks.splice(arrMarks.findIndex(i => i.id === id), 1)
  }

  CannelAddMark() {
    this.statusaddmark = false;
  }
  DeleteMark(mark: any) {
    let cf = confirm("Bạn có muốn xóa điểm môn " + mark.subjectID + " của sinh viên " + mark.studentID)
    if (cf == true) {
      this.getJson.sendDeleteForm(this.url + mark.id);
      //this.DeleteArray(this.arrMarks,m.id);
      alert("Xóa Thành Công!");
      this.getAllData();
    }
  }
  ReSetInput() {
    this.idost = '';
    this.idosu = '';
    this.idom = '';
    this.score = 0;
    this.nameost = '';
    this.nameosu = '';
  }
  UpdateMarkIntoDataBase(form: any)
  {
    this.getJson.sendPutForm(this.url + this.idom, form);
  }
  
  UpdateMarkDetail(formUpdateMark: any) {
    if (this.statusupdatemark === true) {
      this.UpdateMarkIntoDataBase(formUpdateMark);
      this.clickMarkList();
    }
  }
  UpdateMarkIn(mark: any) {
    this.statusmarktable = false;
    this.statusupdatemark = true;
    this.idom = mark.id;
    this.idost = mark.studentID;
    this.idosu = mark.subjectID;
    this.score = mark.score;
    this.nameost = mark.studentName;
    this.nameosu = mark.subjectName;
  }

  CannelUpdateMark() {
    this.statusupdatemark = false;
  }

  ngOnInit() {
    this.getAllData();
    this.getAllDataStudent();
    this.getAllDataSubject();
  }

}
