import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Larrytech } from './larrytech';

describe('Larrytech', () => {
  let component: Larrytech;
  let fixture: ComponentFixture<Larrytech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Larrytech]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Larrytech);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
