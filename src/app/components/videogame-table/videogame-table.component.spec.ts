import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameTableComponent } from './videogame-table.component';

describe('VideogameTableComponent', () => {
  let component: VideogameTableComponent;
  let fixture: ComponentFixture<VideogameTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogameTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideogameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
