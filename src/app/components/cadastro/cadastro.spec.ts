import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cadastro } from './cadastro.component';

describe('Cadastro', () => {
  let component: cadastro;
  let fixture: ComponentFixture<cadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [cadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(cadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
