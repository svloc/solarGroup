import { Component, OnInit } from '@angular/core';
import { userService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 data=[];
 article=[];
  constructor(private dataService:userService) { }

  ngOnInit(): void {
    this.dataService.getData().forEach((Element)=>{
      this.article.push(Element);
      this.data =this.article[0].data;
      console.log(this.data)
    })
  }

}
