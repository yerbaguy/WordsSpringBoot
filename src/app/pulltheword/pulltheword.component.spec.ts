import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullthewordComponent } from './pulltheword.component';

describe('PullthewordComponent', () => {
  let component: PullthewordComponent;
  let fixture: ComponentFixture<PullthewordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullthewordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullthewordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
