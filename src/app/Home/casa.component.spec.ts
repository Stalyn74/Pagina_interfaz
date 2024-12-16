import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CASAComponent } from './casa.component';

describe('CASAComponent', () => {
  let component: CASAComponent;
  let fixture: ComponentFixture<CASAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CASAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CASAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
