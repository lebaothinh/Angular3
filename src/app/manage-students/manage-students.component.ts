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

  statusupdatestudent: boolean = true;
  statusaddstudent: boolean = false;
  statusstudenttable = true;
  searchText: string = '';
  url: string = "http://192.168.101.129:8080/student/";

  arrStudents = [];
  arrClasses = [
    { id: 'D15PM01' },
    { id: 'D15PM02' }
  ];
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
      this.statusupdatestudent = true;
      this.searchText = '';
    }
  }

  clickAddStudent() {
    if (this.statusaddstudent == false) {
      this.statusstudenttable = false;
      this.statusaddstudent = true;
      this.statusupdatestudent = true;
      this.searchText = '';
    }
  }

  ChangeValue(event: any) {
    this.classos = event.target.value;
  }
  getAllData() {
    this.arrStudents = [];
    this.getJson.getData(this.url).subscribe(resJson => this.arrStudents = resJson);
  }
  AddStudent(formAddStudent) {
    if (this.statusaddstudent === false) {
      this.getJson.sendPostForm(this.url, formAddStudent.value);
      this.getAllData();
      alert("Thêm Thành Công!");
    }
  }

  CannelAddStudent() {
    this.statusaddstudent = false;
  }
  DeleteStudent(student: any) {
    let cf = confirm("Bạn có muốn xóa sinh viên " + student.name)
    if (cf == true) {
      console.log(this.getJson.sendDeleteForm(this.url + student.id));
      const index = this.arrStudents.findIndex(std => std.id = student.id);
      this.arrStudents.splice(index, 1);
    }

  }
  ReSetInput(formAddStudent: any) {
    this.idos = '';
    this.nameos = '';
    this.classos = '';
    this.dobos = null;
  }
  UpdateStudent(formUpdateStudent: any) {
    if (this.statusupdatestudent === false) {
      this.getJson.sendPutForm(this.url + this.idos, formUpdateStudent.value);
      this.getAllData();
      alert("Cập Nhật Thành Công!");
      this.statusupdatestudent = !this.statusupdatestudent;
    }
  }
  UpdateStudentIn(student: any) {
    this.statusupdatestudent = false;
    this.idos = student.id;
    this.nameos = student.name;
    this.classos = student.studentClass;
    this.dobos = student.dateOfBirth;
    alert(this.classos);
  }

  CannelUpdateStudent() {
    this.statusupdatestudent = true;
  }

  ngOnInit() {
    this.getAllData();
  }

}
