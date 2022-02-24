import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receieve name value', ()=>{
    const inputValue: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#nomeInput')
    inputValue.value = 'LucasCosta';
    inputValue.dispatchEvent(new Event('input'))
    expect(component.formCadastro.get('nome')?.value).toEqual(inputValue.value);
  });

  it('should receieve cpf value', ()=>{
    const inputValue: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cpfInput')
    inputValue.value = '00000000000';
    inputValue.dispatchEvent(new Event('input'))
    expect(component.formCadastro.get('cpf')?.value).toEqual(inputValue.value);
  });

  it('should receieve celular value', ()=>{
    const inputValue: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#celularInput')
    inputValue.value = '11 854465368';
    inputValue.dispatchEvent(new Event('input'))
    expect(component.formCadastro.get('celular')?.value).toEqual(inputValue.value);
  });

  it('should receieve celular value', ()=>{
    const inputValue: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailInput')
    inputValue.value = 'email@teste.com';
    inputValue.dispatchEvent(new Event('input'))
    expect(component.formCadastro.get('email')?.value).toEqual(inputValue.value);
  });
});
