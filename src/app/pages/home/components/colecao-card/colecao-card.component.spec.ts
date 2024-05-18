import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoCardComponent } from './colecao-card.component';

describe('ColecaoCardComponent', () => {
  let component: ColecaoCardComponent;
  let fixture: ComponentFixture<ColecaoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColecaoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColecaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
