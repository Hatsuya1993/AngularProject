import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancetypeComponent } from './insurancetype.component';

describe('InsurancetypeComponent', () => {
  let component: InsurancetypeComponent;
  let fixture: ComponentFixture<InsurancetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
