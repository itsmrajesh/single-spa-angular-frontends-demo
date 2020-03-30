import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'ipl-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  labels = [];
  playerDetails = [];
  teamName="";
  public pieChart: GoogleChartInterface;
  constructor(private iplService:IplService) { }

  ngOnInit() {
    this.iplService.featchLabels()
    .subscribe(result=>{
        console.log(result.labels);
        this.labels = result.labels;
    })
  }

  showTeamDetails(event){
     this.teamName = event.target.value;
      if(this.teamName !== ""){
          this.iplService.getPlayerDetails(this.teamName).subscribe(result=>{
              this.playerDetails = result;
          })
          this.iplService.getTeamRoleCount(this.teamName).subscribe(res=>{
              let data = [["Role","Count"]];
              res.forEach(ele=>{
                data.push([ele.roleName,ele.count]);
              })
              this.drawChart(data);
          })
      }
  }

  drawChart(data:any){
   this.pieChart = {
      chartType: 'PieChart',
      dataTable:data,
      options: {'title': `Player Count by Role : ${this.teamName}`,
      'width':600,
      'height':400},
    };
  }

}
