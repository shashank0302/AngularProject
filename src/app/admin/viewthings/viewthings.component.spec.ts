import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewthingsComponent } from './viewthings.component';

describe('ViewthingsComponent', () => {
  let component: ViewthingsComponent;
  let fixture: ComponentFixture<ViewthingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewthingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewthingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
