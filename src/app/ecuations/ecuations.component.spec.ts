import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuationsComponent } from './ecuations.component';

describe('EcuationsComponent', () => {
  let component: EcuationsComponent;
  let fixture: ComponentFixture<EcuationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcuationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
