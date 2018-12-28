import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCComponent } from './s-c.component';

describe('SCComponent', () => {
  let component: SCComponent;
  let fixture: ComponentFixture<SCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
