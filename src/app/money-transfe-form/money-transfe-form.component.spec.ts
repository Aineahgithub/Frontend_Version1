import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransfeFormComponent } from './money-transfe-form.component';

describe('MoneyTransfeFormComponent', () => {
  let component: MoneyTransfeFormComponent;
  let fixture: ComponentFixture<MoneyTransfeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyTransfeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyTransfeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
