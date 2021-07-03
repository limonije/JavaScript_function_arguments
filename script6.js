const paintWall = function (kleur, positie){
    console.log("Maak verfblik " + kleur + " open");
    console.log("Pak kwast");
    console.log("Stop kwast in verfblik");
    console.log("De " + positie + "muur is nu " + kleur + " geschilderd");
};

const positieMuur = "noord";
const kleurMuur = "oranje";

paintWall(positieMuur, kleurMuur);
paintWall(kleurMuur, positieMuur);

//Vul je niets in dan komt er undefined te staan op de plek waar in de functie item staat
//De volgorde is belangrijk wanneer je de functie called. De functie pakt nu de eerste variabele en ziet deze als positie
//Ook de volgorde in de functie definitie is belangrijk, als je die omdraait zal nu positieMuur aan kleur worden toegewezen
//Als je beide omdraait dan staat het weer op de juiste plek.




