import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateUpdateComponent } from './cate-update.component';

describe('CateUpdateComponent', () => {
  let component: CateUpdateComponent;
  let fixture: ComponentFixture<CateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
