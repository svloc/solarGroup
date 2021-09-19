import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {

  data=[];
  users =[];
  constructor(private dataService:adminService) {}

  ngOnInit(): void { 
    this.dataService.getData().forEach((Element)=>{
      this.users.push(Element);
      this.data =this.users[0].data;
     // console.log(this.data)
    })
   }

}
