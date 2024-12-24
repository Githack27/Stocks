import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsandiconsComponent } from './fontsandicons.component';

describe('FontsandiconsComponent', () => {
  let component: FontsandiconsComponent;
  let fixture: ComponentFixture<FontsandiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontsandiconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FontsandiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
