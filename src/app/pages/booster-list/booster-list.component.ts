import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { MtgService } from '../../services/mtg.service';
import { BoosterCardComponent } from './components/booster-card/booster-card.component';
import { IBoosterItem } from '../home/interface/booster-item.interface';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { UtilIdentificadorImage } from '../../sources/identicador-imageutil';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificacaoService } from '../../core/services/notificacao.service';
import { AlertaComponent } from '../../core/components/notificacao/alerta/alerta.component';
import { NotificacaoModel } from '../../core/model/notificacao.model';
import { IInputsNotificacao } from '../../core/interface/inputs-notificacao.interface';

@Component({
  selector: 'app-booster-list',
  standalone: true,
  imports: [BoosterCardComponent, LoadingComponent],
  templateUrl: './booster-list.component.html',
  styleUrl: './booster-list.component.css'
})
export class BoosterListComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  code: string = '';
  booster: IBoosterItem[] = []
  erro:boolean = false;
  constructor(private mtgService: MtgService,
  ) {

    this.route.queryParamMap
      .subscribe((p: any) => {
        this.code = p['params']['code'];
        if (this.code !== '') {
          this.getBooster();
        }
      }
      );
  }

  ngOnInit(): void {

  }

  getBooster() {
    this.mtgService.getBooster(this.code).subscribe({
      next: (booster: IBoosterItem[]) => {
        this.booster = booster;
      },
      error: (erro: HttpErrorResponse) => {
        this.erro = true
      //  this.router.navigate(['/'])
      },
      complete: () => { },
    });

  }

  getImage(item: IBoosterItem) {
    const ident = UtilIdentificadorImage.find((img) => item.manaCost.includes(img.id));
    item.urlImageIdent = ident?.url as string;
    item.isImageIdent = true;
  }

}
