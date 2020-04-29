import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PimpMyCouchComponent } from './pimp-my-couch.component';

describe('PimpMyCouchComponent', () => {
  let component: PimpMyCouchComponent;
  let fixture: ComponentFixture<PimpMyCouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PimpMyCouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PimpMyCouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
