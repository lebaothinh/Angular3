import { Component, OnInit } from '@angular/core';
import { Http, Headers, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentsmanagementService } from '../studentsmanagement.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: [StudentsmanagementService]
})
export class StatisticsComponent implements OnInit {

  statusupdateclass: boolean = false;
  statusaddclass: boolean = false;
  statusclasstable = true;
  searchText: string = '';
 
  url: string = "http://192.168.101.129:8080/score/filter/";

  arrStatistics = [];

  min = 0;
  max = 0;

  constructor(private getJson: StudentsmanagementService, private http: Http) {}

  onSubmit(form: any)
  {
    console.log(form.value);
    this.getJson.sendPostForm(this.url,form.value)
    .then(res => this.arrStatistics = res);

  }
  ngOnInit() {
    
  }

}
