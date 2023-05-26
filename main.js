 /* In una ricetta di cucina, tutti gli ingredienti che utilizziamo fanno parte di diverse tipologie come acqua, burro, farina, zucchero ecc.
 In JavaScript i datatype sono una tipologia di dati che comprendono i valori con cui abbiamo a che fare durante la nostra programmazione e si dividono in primitivi e strutturali.
 I datatype primitivi sono: Number, String, Boolean, undefined, null, BigInt, Symbol.
 Mentre i principali dati strutturali sono: Oggetti, Array, Funzioni.  */


var numero1 = 12;
var numero2 = 20;

let risultato = numero1 + numero2;

console.log("RISULTATO ADDIZIONE:" ,risultato)

var x = 12;
var name = `Gabriele`

let result = 4 - x;

console.log("RISULTATO SOTTRAZIONE:" ,result)

/* crea un oggetto che ti rappresenti */

let naso = {
    nome: "Gabriele",
    cognome: "D'Onofrio",
    hobby: "sport",
}

/* crea due variabili name1(john) e name2(John) e verifica la diversità*/


var name1 = "john"
var name2 = "John"

console.log("NAME1 è UGUALE A NAME2?" ,name1 === name2)

console.log("NAME1 è DIVERSO DA NAME2?" ,name1 !== name2)

/* verifica che l'uguaglianza di name1 e name2 diventi true in lowercase*/

console.log("NAME1 è UGUALE A NAME2 IN LOWERCASE?" ,name1.toLowerCase === name2.toLowerCase)

