import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosCadastro } from 'src/app/interfaces/formInterface';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formCadastro: FormGroup;
  dadosEnviados: boolean = false;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private formServ: FormularioService
  ) { 
    this.formCadastro = this.criarFormulario();
  }

  ngOnInit(): void {
    console.log(this.formServ.TestaCPF('44466050899'))
  }

  criarFormulario(): FormGroup{
    return this.builder.group({
      nome:[null, [Validators.required]],
      cpf:[null, [Validators.required]],
      celular:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]]
    })
  }

  enviarDados(){
    if(this.formCadastro.valid){
      const dados : DadosCadastro = this.receberValoresForm();

      this.formServ.TestaCPF(dados.cpf) ? this.formServ.enviarDados(dados).subscribe(retorno=>{
        this.dadosEnviados = true;
      }) : this.erroCPF()

    }
  }

  receberValoresForm(){
    return {
      nome: this.formCadastro.get('nome')?.value,
      cpf: this.formCadastro.get('cpf')?.value,
      celular: this.formCadastro.get('celular')?.value,
      email: this.formCadastro.get('email')?.value
    }
  }


  erroCPF(){
    this.formCadastro.controls['cpf'].setErrors({cpf: true})

    console.log(this.formCadastro.controls)
  }

  voltar(){
    this.router.navigate([''])
  }
}
