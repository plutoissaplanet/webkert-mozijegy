import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowreservedComponent } from './showreserved.component';

describe('ShowreservedComponent', () => {
  let component: ShowreservedComponent;
  let fixture: ComponentFixture<ShowreservedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowreservedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowreservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
