import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shoppings } from './shoppings';

describe('Shoppings', () => {
  let component: Shoppings;
  let fixture: ComponentFixture<Shoppings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shoppings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shoppings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
