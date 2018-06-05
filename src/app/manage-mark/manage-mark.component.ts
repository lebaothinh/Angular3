import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsmanagementService } from '../studentsmanagement.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FormsModule } from '@angular/forms';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
@Component({
  selector: 'app-manage-mark',
  templateUrl: './manage-mark.component.html',
  styleUrls: ['./manage-mark.component.css']
})
export class ManageMarkComponent implements OnInit {

  @ViewChild(StudentDetailComponent)
  studentDetail: StudentDetailComponent;

  urlAvergeMarkTable = "http://5b1104db3ffdad0014dacd97.mockapi.io/managestudents/AverageMarkTable";
  urlSubjects = "http://5b14c0c7c17fa9001477102f.mockapi.io/marktable/Subjects";

  statusupdatemark: boolean = true;
  statusaddmark: boolean = false;
  
  searchText: string = '';
  
  arrStudentsMark = [];
  arrSubjects = [
    { id: 'D15PM01' },
    { id: 'D15PM02' }
  ];
  arrStudentAverage = [];
  nameos: string;
  classos: string = '';
  dobos: string;

  constructor(private http: Http, private getJson: StudentsmanagementService) { 
    this.getJson.getData(this.urlSubjects).subscribe(resJson => this.arrSubjects = resJson);
  }

  getAllData()
  {
    this.getJson.getData(this.urlAvergeMarkTable).subscribe(resJson => this.arrStudentsMark = resJson);
  }
  ChangeValue(event: any)
  {

  }
  UpdateStudentMark(idStudent: string)
  {
    //this.studentDetail.idStudent = idStudent;
  }
  ngOnInit() {
    this.getAllData();
  }

}
