// import { Garden } from './garden';
export class Garden {
  id: number = 0;
  name: string = '';
  image: string = '';
  price: string = '';
  link: string = '';
  description: string = '';
}

export const GARDENS: Garden[] = [
  { id: 1, name: 'Begonia', image: "assets/images/img1.jpg", price: "10", link:"", description: "Begonia surrounded by moss." },
  { id: 2, name: 'White Flowers', image: "assets/images/img4.jpg", price: "15", link:"", description: "White flowers in tall jar with white pebbles." },
  { id: 3, name: 'Palm and Begonias', image: "assets/images/img6.jpg", price: "15", link:"", description: "Two pink flower begonias and small palm in wodden spice rack." },
  { id: 4, name: 'Small Aspargus Fern', image: "assets/images/img3.jpg", price: "5", link:"", description: "Aspargus fern in small spice bottle." },
  { id: 5, name: 'Beaker Terrarium', image: "assets/images/img7.jpg", price: "30", link:"", description: "Science beaker terrarium." },
  { id: 6, name: 'Moss and Pines Terrarium', image: "assets/images/img2.jpg", price: "15", link:"", description: "Moss and pine cone terrarium in small jar." },
  { id: 7, name: 'Aspargus Fern', image: "assets/images/img5.jpg", price: "10", link:"", description: "Aspargus fern in mason jar." }
];