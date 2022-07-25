import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesComponent } from './votes.component';

describe('VotesComponent', () => {
  let component: VotesComponent;
  let fixture: ComponentFixture<VotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//Vote TestCases
describe('Testing VoteCount', () => {
  //Apply
  let vote: VotesComponent;
  beforeEach(() => {
    vote = new VotesComponent();
  });
  it('Test downVote', () => {
    //Act
    let downvote = vote.downVote();
    //Assert
    expect(downvote).toEqual(44);
  });
  it('Test upVote', () => {
    //Act
    let upvote = vote.upVote();
    //Assert
    expect(upvote).toEqual(46);
  });
  // afterEach(() => {
  //   vote=null ;
  // });
});