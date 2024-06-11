import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsGamesComponent } from './apps-games.component';

describe('AppsGamesComponent', () => {
  let component: AppsGamesComponent;
  let fixture: ComponentFixture<AppsGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
