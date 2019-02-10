import { Component, OnInit,Input } from '@angular/core';
import {Com} from '../com'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() ab:Com[];
  constructor() { }

  ngOnInit() {
  }

}