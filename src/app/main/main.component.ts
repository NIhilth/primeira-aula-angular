import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  name = ""
  surname = ""
  data = undefined

  lista = []

  ngOnInit() {
  }

  alertarNome() {
    let pessoa = {
      nome: this.name,
      sobrenome: this.surname,
      dataNasc: this.data
    }

    this.lista.push(pessoa)

    this.name = ""
    this.surname = ""
    this.data = undefined
  }

  selectPerson(pessoaData, indexPerson) {
    this.name = pessoaData.nome
    this.surname = pessoaData.sobrenome
    this.data = pessoaData.data

    this.lista.splice(indexPerson,1)
  }

  deletePerson(indexPerson){
    this.lista[indexPerson].deleted = true
  }

  restorePerson(indexPerson){
    delete this.lista[indexPerson].deleted
  }

}
