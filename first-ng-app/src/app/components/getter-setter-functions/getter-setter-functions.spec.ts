import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterSetterFunctions } from './getter-setter-functions';

describe('GetterSetterFunctions', () => {
  let component: GetterSetterFunctions;
  let fixture: ComponentFixture<GetterSetterFunctions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetterSetterFunctions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetterSetterFunctions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
