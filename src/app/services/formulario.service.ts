import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DadosCadastro } from '../interfaces/formInterface';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }

  enviarDados(dados: DadosCadastro): Observable<string>{
    return of('sucesso')
  }

  TestaCPF(cpf: string) {
    var Soma;
    var Resto;
    Soma = 0;
    if (cpf == "00000000000") return false;

    for (let i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
     Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
  }
}
