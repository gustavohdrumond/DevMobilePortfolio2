import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { BebidasPage } from '../bebidas/bebidas';
import { LanchesPage } from '../lanches/lanches';
import { PratoEntradaPage } from '../prato-entrada/prato-entrada';
import { PratoRefeicaoPage } from '../prato-refeicao/prato-refeicao';
import { SobremesasPage } from '../sobremesas/sobremesas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  abreLanches(myEvent) {
    let popover = this.popoverCtrl.create(LanchesPage);
    popover.present({
      ev: myEvent
    });
  }

  abreEntrada(myEvent) {
    let popover = this.popoverCtrl.create(PratoEntradaPage);
    popover.present({
      ev: myEvent
    });
  }

  abreRefeicao(myEvent) {
    let popover = this.popoverCtrl.create(PratoRefeicaoPage);
    popover.present({
      ev: myEvent
    });
  }

  abreSobremesas(myEvent) {
    let popover = this.popoverCtrl.create(SobremesasPage);
    popover.present({
      ev: myEvent
    });
  }

  abreBebida(myEvent) {
    let popover = this.popoverCtrl.create(BebidasPage);
    popover.present({
      ev: myEvent
    });
  }
}
