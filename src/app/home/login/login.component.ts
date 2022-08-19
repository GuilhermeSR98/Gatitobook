import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService) {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert('Usuário ou senha inválidos');
      }
    );
  }

  ngOnInit(): void {}
}
