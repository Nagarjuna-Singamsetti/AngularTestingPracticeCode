import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public totalvotes = 100;
  public peoplevoted = 45;

  upVote() {
    return ++this.peoplevoted;
  }
  downVote() {
    return --this.peoplevoted;
  }
}
