import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Deber4Component } from './Deber4.component';

describe('Deber4Component', () => {
  let component: Deber4Component;
  let fixture: ComponentFixture<Deber4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deber4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deber4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
