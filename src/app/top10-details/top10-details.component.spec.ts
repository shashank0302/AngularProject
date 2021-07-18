import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10DetailsComponent } from './top10-details.component';

describe('Top10DetailsComponent', () => {
  let component: Top10DetailsComponent;
  let fixture: ComponentFixture<Top10DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
