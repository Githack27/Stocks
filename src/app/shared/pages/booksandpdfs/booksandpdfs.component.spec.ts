import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksandpdfsComponent } from './booksandpdfs.component';

describe('BooksandpdfsComponent', () => {
  let component: BooksandpdfsComponent;
  let fixture: ComponentFixture<BooksandpdfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksandpdfsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksandpdfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
