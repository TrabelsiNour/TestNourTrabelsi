import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/mymodel/livre';

@Component({
  selector: 'Nour-listlivres',
  templateUrl: './listlivres.component.html',
  styleUrls: ['./listlivres.component.css']
})
export class ListlivresComponent implements OnInit {
  livres: Livre[] =  [
    {titre: 'Algorithmique', couverture: '../assets/Livres/algo.jpg', prix:15.3, dateEdition: new Date(2012,4,15), red:0},
    {titre: 'JAVA', couverture: '../assets/Livres/java.jpg', prix:38.4, dateEdition:new Date(2019,10,27), red:15},
    {titre: 'Réseaux', couverture: '../assets/Livres/reseau.jpg', prix:46.8, dateEdition:new Date(2018,9,7), red:0}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
