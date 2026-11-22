import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassesCard } from './glasses-card';

describe('GlassesCard', () => {
  let component: GlassesCard;
  let fixture: ComponentFixture<GlassesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassesCard],
    }).compileComponents();

    fixture = TestBed.createComponent(GlassesCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
