import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesModalComponent } from './categories-modal.component';

describe('CategoriesCreateUpdateVeiwModalComponent', () => {
  let component: CategoriesModalComponent;
  let fixture: ComponentFixture<CategoriesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
