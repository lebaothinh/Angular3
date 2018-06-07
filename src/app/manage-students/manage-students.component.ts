import { Component, OnInit } from '@angular/core';
import { Http, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FormsModule, NgForm } from '@angular/forms';
import { ManageStudentsService } from './manage-students.service'

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css'],
  providers: [ManageStudentsService]
})
export class ManageStudentsComponent implements OnInit {

  statusupdatestudent: boolean = false;
  statusaddstudent: boolean = false;
  statusstudenttable = true;
  searchText: string = '';
  url: string = "http://192.168.101.129:8080/student/";
  urlClasses: string = "http://192.168.101.129:8080/studentClass/";
  arrStudents = [];
  arrClasses = [];
  idos: string;
  nameos: string;
  classos: string;
  dobos: Date;

  constructor(private getJson: ManageStudentsService, private http: Http) {

  }

  clickStudentList() {
    if (this.statusstudenttable === false) {
      this.statusstudenttable = true;
      this.statusaddstudent = false;
      this.statusupdatestudent = false;
      this.searchText = '';
    }
  }

  clickAddStudent() {
    if (this.statusaddstudent === false) {
      this.statusstudenttable = false;
      this.statusaddstudent = true;
      this.statusupdatestudent = false;
      this.searchText = '';
    }
  }

  getAllDataClasses() {
    this.getJson.getData(this.urlClasses)
      .subscribe((res: any) => this.arrClasses = res);
  }

  ChangeValue(event: any) {
    this.classos = event.target.value;
  }
  getAllData() {
    this.getJson.getData(this.url).subscribe(resJson => {
      this.arrStudents = resJson;
      console.log(resJson);
    });
  }
  AddStudent(formAddStudent) {
    if (this.statusaddstudent === true) {
      this.getJson.sendPostForm(this.url, formAddStudent.value).then(()=> this.getAllData());
      alert("Thêm Thành Công!");
    }
  }

  CannelAddStudent() {
    this.statusaddstudent = false;
  }
  DeleteStudent(student: any) {
    let cf = confirm("Bạn có muốn xóa sinh viên " + student.student_Name)
    if (cf == true) {
      this.getJson.sendDeleteForm(this.url + student.studentID).then(() => this.getAllData());
    }
  }
  ReSetInput(formAddStudent: any) {
    this.idos = '';
    this.nameos = '';
    this.classos = '';
    this.dobos = null;
  }
  UpdateStudent(formUpdateStudent: any) {
    if (this.statusupdatestudent === true) {
      this.getJson.sendPutForm(this.url + this.idos, formUpdateStudent.value)
      .then(() => this.getAllData());
      alert("Cập Nhật Thành Công!");
      this.statusupdatestudent= false;
      this.statusstudenttable = true;
    }
  }
  UpdateStudentIn(student: any) {
    this.statusupdatestudent = true;
    this.statusstudenttable = false;
    this.idos = student.studentID;
    this.nameos = student.student_Name;
    this.classos = student.student_classid;
    this.dobos = student.date_of_birth;
  }

  CannelUpdateStudent() {
    this.statusupdatestudent = false;
    this.statusstudenttable = true;
  }

  ngOnInit() {
    this.getAllData();
    this.getAllDataClasses();
  }

}
