import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deber2Component } from './Deber2.component';

describe('Deber2Component', () => {
  let component: Deber2Component;
  let fixture: ComponentFixture<Deber2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deber2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deber2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
