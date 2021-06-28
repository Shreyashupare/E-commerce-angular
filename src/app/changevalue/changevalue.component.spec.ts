import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangevalueComponent } from './changevalue.component';

describe('ChangevalueComponent', () => {
  let component: ChangevalueComponent;
  let fixture: ComponentFixture<ChangevalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangevalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangevalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
