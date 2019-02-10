import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Com} from '../com'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() a:string;
  @Input() b:string;
  @Output() c=new EventEmitter();
  ab:Com;
  ind:number;
  constructor() {
    this.ind=0;
    
  
   }

  ngOnInit() {
  }
  sub(){
    if(this.a!=null){
      this.ab=new Com(this.a,this.b);
      this.c.emit(this.ab);
      
    }
  }

}