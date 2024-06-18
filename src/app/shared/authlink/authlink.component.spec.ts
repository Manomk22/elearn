import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthlinkComponent } from './authlink.component';

describe('AuthlinkComponent', () => {
  let component: AuthlinkComponent;
  let fixture: ComponentFixture<AuthlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthlinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
