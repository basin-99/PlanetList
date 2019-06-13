import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetContainerComponent } from './planet-container.component';

describe('PlanetContainerComponent', () => {
  let component: PlanetContainerComponent;
  let fixture: ComponentFixture<PlanetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
