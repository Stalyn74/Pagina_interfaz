import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Deber5Component } from './Deber5.component';
describe('Deber5Component', () => {
  let component: Deber5Component;
  let fixture: ComponentFixture<Deber5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deber5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deber5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
