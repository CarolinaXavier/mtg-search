import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterCardComponent } from './booster-card.component';

describe('BoosterCardComponent', () => {
  let component: BoosterCardComponent;
  let fixture: ComponentFixture<BoosterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoosterCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoosterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
