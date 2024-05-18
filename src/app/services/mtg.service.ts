import { Injectable } from "@angular/core";
import { AuthHttpService } from "../core/services/auth-http.service";
import { ApiUrlsMtgService } from "./ApiUrlmtg.service";
import { EMPTY, Observable, concatMap, empty, expand, filter, map, pipe, reduce, takeWhile, tap } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class MtgService {
    constructor(private authHttp: AuthHttpService, private apiUrlsMtgService: ApiUrlsMtgService) { }
    cartas: any[] = [];
    _LIMIT = 30;
    _CREATURE = "Creature";
    pesquisarSets(name: string, block: string) {
        return this.authHttp.get(

            this.apiUrlsMtgService.PESQUISAR_SETS(name, block)
        ).pipe(
            map((response: any) => {
                return response.sets || [];

            }))
    }

    getByURL(url: string) {
        return this.authHttp.get(this.apiUrlsMtgService.OBTER_SET_BOOSTER(url));
    }

    getBooster(code: string): Observable<any> {
        return this.getByURL(code).pipe(
            expand((res: any) => {
                if (this.cartas.length < this._LIMIT) {
                    res.cards.forEach(element => {
                        if (this.cartas.length < this._LIMIT && element.types.includes(this._CREATURE)) {
                            this.cartas.push(element)
                        }
                    });

                    return this.getByURL(code);
                } else {
                    return EMPTY;
                }
            }),
            map((items: any) => items['cards'].filter((item: any) => item.types.includes(this._CREATURE))),
            reduce((acc, x: any) => acc.length < this._LIMIT ? acc.concat(x) : acc)
        );
    }

}
