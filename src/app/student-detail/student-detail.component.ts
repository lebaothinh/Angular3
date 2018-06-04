import { Component, OnInit } from '@angular/core';
import { StudentsmanagementService } from '../studentsmanagement.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  statusupdatemarkdt: boolean = true;
  //Trả về tất cả điểm của một sinh viên (Mã Sinh Viên)
  url = "";
  arrStudentMark = [];
  constructor(private http: Http, private getJson: StudentsmanagementService) { }

  getAllDaTa(){
    //this.getJson.sendPostForm(this.url,this.idStudent)
  }
  ngOnInit() {
    
  }

}
