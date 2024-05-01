import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillboardPage } from './billboard.page';

describe('BillboardPage', () => {
  let component: BillboardPage;
  let fixture: ComponentFixture<BillboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
