import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./Characterscollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([10000, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data)

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);

// linkedList.sort();
// linkedList.print();