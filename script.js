// komment -> információ + archiválás

/* 
Többsoros komment
*/

// Egyszerű adattípusok/Primitív adattípusok

// String -> szöveg (karakterfüzér)

console.log("Hello");
console.log('Hello');

// Number

console.log(5);
console.log("5"); //nem Number

// Boolean (true/false)

console.log(true);
console.log(3 < 4);

// undefined

let kutya;
console.log(kutya);

// null -> üres

console.log(null);

// Összetett adattípusok

// Tömb -> Array<number> Array<type>/Array of something

console.log([1,2,3,4,5]);
tomb1 = [1,2,3,4];
console.log(tomb1);
let tomb2 = [];
console.log(tomb2);
console.log(tomb1[1]);
tomb1.push(5);
console.log(tomb1);
tomb1[5] = 6;
console.log(tomb1);

// Tömbök tömbje

tomb3 = [[1, 2], ["a", "b"], ["I", "II"]];

// logoljuk ki "b"-t
console.log(tomb3[1][1]);

// Objektum (Object) -> Kulcs érték párok

tesiJegyek = [["Aladár",3],["Béla",2],"C",4,5,3,4];

tesiObjektum = {
    Aladár: 3,
    Béla: 2,
    Cecil: 4,
}

console.log(tesiObjektum.Aladár);
tesiObjektum.Denes = 5;
console.log(tesiObjektum);

osztaly = {
    Aladár: {
        tesi: 5,
        tori: 5,
        webprogramozas: 1
    },
    Béla: {
        tesi: 4,
        tori: 3,
        webprogramozas: 5
    },
    Cecil: {
        tesi: 3,
        tori: 5,
        webprogramozas: 4
    }
}

console.log(osztaly.Cecil.tesi);

// Set

letters = new Set(["a", "b", "c"]);
console.log(letters);
letters.add("d");
console.log(letters);

let numbers = new Set();

while(numbers.size<10) {
    numbers.add(Math.floor(Math.random()*10+1));
    console.log(numbers);
}

// Map

jegyek = new Map([["Aladár", 3], ["Béla", 4], ["Cecil", 5]]);

console.log(jegyek);
console.log(jegyek.size);
jegyek.set("Laci", 5);
console.log(jegyek);
jegyek.set("Béla", 5);
console.log(jegyek);