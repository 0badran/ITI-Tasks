import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDailogComponent } from './home-dailog.component';

describe('HomeDailogComponent', () => {
  let component: HomeDailogComponent;
  let fixture: ComponentFixture<HomeDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDailogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
