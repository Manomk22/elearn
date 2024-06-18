import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointusComponent } from './jointus.component';

describe('JointusComponent', () => {
  let component: JointusComponent;
  let fixture: ComponentFixture<JointusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JointusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JointusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
