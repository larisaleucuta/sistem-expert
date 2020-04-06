const question1 = { id: 1, question: "Asculti muzica de actualitate?" };
const question2 = { id: 2, question: "Iti place muzica fara versuri?" };
const question3 = { id: 3, question: "Asculti muzica la maxim?" };
const question4 = { id: 4, question: "Iti place muzica cu bass?" };
const question5 = { id: 5, question: "Iti plac trupele muzicale?" };
const question6 = { id: 6, question: "Iti place muzica cu instrumente clasice?" };
const question7 = { id: 7, question: "Esti la curent cu topurile muzicale?" };
const question8 = { id: 8, question: "Iti plac melodiile care transmit un mesaj?" };
const question9 = { id: 9, question: "Iti plac artistii care transmit un mesaj romantic?" };
const question10 = { id: 10, question: "Iti plac trupele muzicale?" };
const question11 = { id: 11, question: "Iti plac trupele muzicale?" };
const question12 = { id: 12, question: "Iti plac trupele muzicale?" };
const question13 = { id: 13, question: "Iti place muzica fara versuri?" };
const question14 = { id: 14, question: "Asculti muzica la maxim?" };
const question15 = { id: 15, question: "Iti place muzica cu bass?" };
const question16 = { id: 16, question: "Iti plac trupele muzicale?" };
const question17 = { id: 17, question: "Iti place muzica cu instrumente clasice?" };
const question18 = { id: 18, question: "Esti la curent cu topurile muzicale?" };
const question19 = { id: 19, question: "Iti plac melodiile care transmit un mesaj?" };
const question20 = { id: 20, question: "Iti plac artistii care transmit un mesaj romantic?" };
const question21 = { id: 21, question: "Iti plac trupele muzicale?" };
const question22 = { id: 22, question: "Iti plac trupele muzicale?" };
const question23 = { id: 23, question: "Iti plac trupele muzicale?" };


function rule1()  {
  if(this.question1 === true)
    return question2;
}

function rule2()  {
  if(this.question1 === false)
    return question13;
}
function rule3()  {
  if(this.question2 === true)
    return question3;
}

function rule4()  {
  if(this.question2 === false)
    return question17;
}
function rule5()  {
  if(this.question3 === true)
    return question4;
}

function rule6()  {
  if(this.question3 === false)
    return question6;
}

function rule7()  {
  if(this.question4 === true)
    return question5;
}

function rule8()  {
  if(this.question4 === false)
    return question6;
}

function rule9()  {
  if(this.question5 === true)
    return "NOISIA";
}

function rule10()  {
  if(this.question5 === false)
    return "ARMIN VAN BUUREN";
}

function rule11()  {
  if(this.question6 === true)
    return "DAVID GARETT";
}

function rule12()  {
  if(this.question6 === false)
    return "ETHERWOOD";
}

function rule13()  {
  if(this.question7 === true)
    return question8;
}

function rule14()  {
  if(this.question7 === false)
    return question8;
}

function rule15()  {
  if(this.question8 === true)
    return question9;
}

function rule16()  {
  if(this.question8 === false)
    return question12;
}

function rule17()  {
  if(this.question9 === true)
    return question10;
}

function rule18()  {
  if(this.question9 === false)
    return question11;
}

function rule19()  {
  if(this.question10 === true)
    return "MAROON 5";
}

function rule20()  {
  if(this.question10 === false)
    return "RITA ORA";
}

function rule21()  {
  if(this.question11 === true)
    return "MUSE";
}

function rule22()  {
  if(this.question11 === false)
    return "NICKY MINAJ";
}

function rule23()  {
  if(this.question12 === true)
    return "YLVIS";
}

function rule24()  {
  if(this.question12 === false)
    return "NICKY MINAJ";
}

function rule25()  {
  if(this.question13 === true)
    return question14;
}

function rule26()  {
  if(this.question13 === false)
    return question18;
}

function rule27()  {
  if(this.question14 === true)
    return question15;
}

function rule28()  {
  if(this.question14 === false)
    return question17;
}

function rule29()  {
  if(this.question15 === true)
    return question16;
}

function rule30()  {
  if(this.question15 === false)
    return question17;
}

function rule31()  {
  if(this.question16 === true)
    return "FAITHLESS";
}

function rule32()  {
  if(this.question16 === false)
    return 'PAUL VAN DIK';
}

function rule33()  {
  if(this.question17 === true)
    return "MOZART";
}

function rule34()  {
  if(this.question17 === false)
    return "THE PRODIGY";
}

function rule35()  {
  if(this.question18 === true)
    return question19;
}

function rule36()  {
  if(this.question18 === false)
    return question19;
}

function rule37()  {
  if(this.question19 === true)
    return question20;
}

function rule38()  {
  if(this.question19 === false)
    return question23;
}

function rule39()  {
  if(this.question20 === true)
    return question21;
}

function rule40()  {
  if(this.question20 === false)
    return question22;
}

function rule41()  {
  if(this.question21 === true)
    return "HOLOGRAF";
}

function rule42()  {
  if(this.question21 === false)
    return "JULIO IGLESIAS";
}

function rule43()  {
  if(this.question22 === true)
    return "METALLICA";
}

function rule44()  {
  if(this.question22 === false)
    return "MICK JAGGER";
}

function rule45()  {
  if(this.question23 === true)
    return "... SORRY, NO SUCH THING :(";
}

function rule46()  {
  if(this.question23 === false)
    return "... SORRY, NO SUCH THING :(";
}

export const data = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
  question16,
  question17,
  question18,
  question19,
  question20,
  question21,
  question22,
  question23

];

export const rules = [
  rule1,
  rule2,
  rule3,
  rule4,
  rule5,
  rule6,
  rule7,
  rule8,
  rule9,
  rule10,
  rule11,
  rule12,
  rule13,
  rule14,
  rule15,
  rule16,
  rule17,
  rule18,
  rule19,
  rule20,
  rule21,
  rule22,
  rule23,
  rule24,
  rule25,
  rule26,
  rule27,
  rule28,
  rule29,
  rule30,
  rule31,
  rule32,
  rule33,
  rule34,
  rule35,
  rule36,
  rule37,
  rule38,
  rule39,
  rule40,
  rule41,
  rule42,
  rule43,
  rule44,
  rule45,
  rule46
];
