import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deber3Component } from './Deber3.component';

describe('Deber3Component', () => {
  let component: Deber3Component;
  let fixture: ComponentFixture<Deber3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deber3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deber3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
