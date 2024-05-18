import { Component, OnInit } from '@angular/core';
import { MtgService } from '../../services/mtg.service';
import { ColecaoCardComponent } from './components/colecao-card/colecao-card.component';
import { IColecao } from './interface/colecao.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ColecaoCardComponent, LoadingComponent, NgSelectModule, FormsModule,
    ReactiveFormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private mtgService: MtgService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      nome: ['',],
      bloco: ['', [Validators.required]],
    });

    this.form.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value: any) => {
      });

  }
  blocoList = [
    { value: 'Amonkhet' },
    { value: 'Ixalan' },
    { value: 'Zendikar' },
    { value: 'Ravnica' },
    { value: 'Onslaught' },
  ];
  colecoes: IColecao[] = []
  ngOnInit(): void {
  }

  searchColecao() {
    this.mtgService.pesquisarSets(this.extraiFiltros().nome, this.extraiFiltros().bloco).subscribe({
      next: (response: any) => {
        this.colecoes = response;
      },
      error: (erro: HttpErrorResponse) => {
        console.log(erro);
      },
      complete: () => { },
    });

  }

  getBooster(code: string) {
    this.router.navigate(['/booster'], { queryParams: { code: code } })
  }

  private extraiFiltros() {
    return {
      nome: this.form.value.nome,
      bloco: this.form.value.bloco,
    };
  }

}
