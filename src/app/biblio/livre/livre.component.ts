import { Component, Input, OnInit } from '@angular/core';
import { Livre } from 'src/app/mymodel/livre';

@Component({
  selector: 'Nour-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input() l: Livre;
  prixFinal(): number {
      return (this.l).prix = (this.l).prix * (100 - (this.l).red) / 100;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
