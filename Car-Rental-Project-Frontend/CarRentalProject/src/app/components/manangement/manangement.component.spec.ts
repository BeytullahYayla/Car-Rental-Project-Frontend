import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManangementComponent } from './manangement.component';

describe('ManangementComponent', () => {
  let component: ManangementComponent;
  let fixture: ComponentFixture<ManangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManangementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
