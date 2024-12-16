import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deber1Component } from './Deber1.component';

describe('Deber1Component', () => {
  let component: Deber1Component;
  let fixture: ComponentFixture<Deber1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deber1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deber1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
