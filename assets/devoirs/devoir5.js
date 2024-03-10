let poem = `LA VILLE

Tous les chemins vont vers la ville.

Du fond des brumes, Là-bas, avec tous ses étages
Et ses grands escaliers et leurs voyages
Jusques au ciel, vers de plus hauts étages,
Comme d’un rêve, elle s’exhume.
Là-bas,
Ce sont des ponts tressés en fer
Jetés, par bonds, à travers l’air;
Ce sont des blocs et des colonnes
Que dominent des faces de gorgones;
Ce sont des tours sur des faubourgs,
Ce sont des toits et des pignons,
En vols pliés, sur les maisons;
C’est la ville tentaculaire,
Debout,
Au bout des plaines et des domaines.

Des clartés rouges
Qui bougent
Sur des poteaux et des grands mâts,
Même à midi, brûlent encor
Comme des œufs monstrueux d’or,
Le soleil clair ne se voit pas:
Bouche qu’il est de lumière, fermée
Par le charbon et la fumée,

Un fleuve de naphte et de poix
Bat les môles de pierre et les pontons de bois;
Les sifflets crus des navires qui passent
Hurlent la peur dans le brouillard:
Un fanal vert est leur regard
Vers l’océan et les espaces.

Des quais sonnent aux entrechocs de leurs fourgons,
Des tombereaux grincent comme des gonds,
Des balances de fer font choir des cubes d’ombre
Et les glissent soudain en des sous-sols de feu;
Des ponts s’ouvrant par le milieu,
Entre les mâts touffus dressent un gibet sombre
Et des lettres de cuivre inscrivent l’univers,
Immensément, par à travers
Les toits, les corniches et les murailles,
Face à face, comme en bataille.

Par au-dessus, passent les cabs, filent les roues,
Roulent les trains, vole l’effort,
Jusqu’aux gares, dressant, telles des proues
Immobiles, de mille en mille, un fronton d’or.
Les rails ramifiés rampent sous terre
En des tunnels et des cratères
Pour reparaître en réseaux clairs d’éclairs
Dans le vacarme et la poussière.
C’est la ville tentaculaire.
La rue – et ses remous comme des câbles
Noués autour des monuments –
Fuit et revient en longs enlacements;
Et ses foules inextricables
Les mains folles, les pas fiévreux,
La haine aux yeux,
Happent des dents le temps qui les devance.
A l’aube, au soir, la nuit,
Dans le tumulte et la querelle, ou dans l’ennui,
Elles jettent vers le hasard l’âpre semence
De leur labeur que l’heure emporte.
Et les comptoirs mornes et noirs
Et les bureaux louches et faux
Et les banques battent des portes
Aux coups de vent de leur démence.

Dehors, une lumière ouatée,
Trouble et rouge, comme un haillon qui brûle,
De réverbère en réverbère se recule.
La vie, avec des flots d’alcool est fermentée.

Les bars ouvrent sur les trottoirs
Leurs tabernacles de miroirs
Où se mirent l’ivresse et la bataille;
Une aveugle s’appuie à la muraille
Et vend de la lumière, en des boîtes d’un sou;
La débauche et la faim s’accouplent en leur trou
Et le choc noir des détresses charnelles
Danse et bondit à mort dans les ruelles.
Et coup sur coup, le rut grandit encore
Et la rage devient tempête:
On s’écrase sans plus se voir, en quête
Du plaisir d’or et de phosphore;
Des femmes s’avancent, pâles idoles,
Avec, en leurs cheveux, les sexuels symboles.
L’atmosphère fuligineuse et rousse
Parfois loin du soleil recule et se retrousse
Et c’est alors comme un grand cri jeté
Du tumulte total vers la clarté:
Places, hôtels, maisons, marchés,
Ronflent et s’enflamment si fort de violence
Que les mourants cherchent en vain le moment de silence
Qu’il faut aux yeux pour se fermer.
Telle, le jour – pourtant, lorsque les soirs
Sculptent le firmament, de leurs marteaux d’ébène,
La ville au loin s’étale et domine la plaine
Comme un nocturne et colossal espoir;
Elle surgit: désir, splendeur, hantise;
Sa clarté se projette en lueurs jusqu’aux cieux,
Son gaz myriadaire en buissons d’or s’attise,
Ses rails sont des chemins audacieux
Vers le bonheur fallacieux
Que la fortune et la force accompagnent;
Ses murs se dessinent pareils à une armée
Et ce qui vient d’elle encore de brume et de fumée
Arrive en appels clairs vers les campagnes.

C’est la ville tentaculaire,
La pieuvre ardente et l’ossuaire
Et la carcasse solennelle.

Et les chemins d’ici s’en vont à l’infini
Vers elle.`;

/*2. Quels sont les cinq mots les plus fréquents de votre poème ?
Calculez la richesse lexicale de votre poème (nombre de mots uniques/ nombre total de mots).*/

// tokenisation
let tokens = poem.split(/[\s+’(:\s*?)(;\s*?)(,\s*?)(\.\s*)(\s–\s)]/igm);

// filtrer les espaces hors de la variable tokens à l'aide d'une boucle
for(let item of tokens) { 
	if(item == ''){
		tokens.splice(tokens.indexOf(item),1);
	};
};
// nb d'apparitions de chaque mot unique / total de mots : / array.length;
// créer variable qui va contenir ts les mots uniques du poème
// diviser length mots uniques par length tokens

//console.log(tokens);
