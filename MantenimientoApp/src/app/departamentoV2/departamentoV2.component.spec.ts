import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoV2Component } from './departamentoV2.component';

describe('DepartamentoV2Component', () => {
  let component: DepartamentoV2Component;
  let fixture: ComponentFixture<DepartamentoV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
