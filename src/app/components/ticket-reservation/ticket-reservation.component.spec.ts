import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketReservationComponent } from './ticket-reservation.component';

xdescribe('TicketReservationComponent', () => {
  let component: TicketReservationComponent;
  let fixture: ComponentFixture<TicketReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketReservationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

xdescribe('Ticket Reservation', () => {
  it('Testing Reservation is Done Or Not', () => {
    //Arrange
    let Reservation = new TicketReservationComponent;
    //Act
    let isReserved = Reservation.reserveSeat();
    //Assert
    expect(isReserved).toBeTruthy();
  });
});
