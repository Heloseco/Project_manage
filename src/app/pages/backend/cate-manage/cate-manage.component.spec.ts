import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateManageComponent } from './cate-manage.component';

describe('CateManageComponent', () => {
  let component: CateManageComponent;
  let fixture: ComponentFixture<CateManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
