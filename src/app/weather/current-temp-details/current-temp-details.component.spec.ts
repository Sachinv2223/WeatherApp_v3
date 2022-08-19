import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTempDetailsComponent } from './current-temp-details.component';

describe('CurrentTempDetailsComponent', () => {
  let component: CurrentTempDetailsComponent;
  let fixture: ComponentFixture<CurrentTempDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTempDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTempDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
