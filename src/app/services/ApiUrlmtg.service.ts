import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })

export class ApiUrlsMtgService {

    /**
     * GET
     * Obtenha todos os conjuntos
     * /sets?name=khans|origins
     * @returns 
     */
    public PESQUISAR_SETS = (name?: string, block?: string) => {
        return `sets?name=${name}|${block}`;
    }
    /**
     * GET
     * OBTER SETS BOOSTER
     * /sets/:id/booster
     * @returns 
     */
    public OBTER_SET_BOOSTER = (id: string) => {
          return `sets/${id}/booster`; 
    }

  
}
