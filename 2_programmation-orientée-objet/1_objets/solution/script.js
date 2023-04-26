const chat = {
	nom: "Bertie",
	race: "Cymric",
	couleur: "white",
	salutation: function () {
		console.log("Meow!");
	},
};

////////////////////////////////////////////////////////////////////////////////
// ÉTAPE 1

// Stockez la valeur de la propriété nom dans la variable nomChat en utilisant
// la notation entre crochets.

const nomChat = chat["nom"];

// Exécuter la méthode salutation() en utilisant la notation avec un point (elle
// affichera la salutation dans la console du navigateur).

chat.salutation();

// Mettre à jour la valeur de la propriété couleur à "noir".

chat.couleur = "noir";

////////////////////////////////////////////////////////////////////////////////
// ÉTAPE 2

// Réécriviez la méthode salutation() de manière à ce qu'elle affiche « Bonjour,
// dit Bertie le Cymric. » dans la console du navigateur, mais de manière à ce
// qu'elle fonctionne pour tout objet de chat de la même structure, quel que
// soit son nom ou sa race.

chat.salutation = function () {
	return `Bonjour, dit ${this.nom} le ${this.race}.`;
};

// Lorsque vous avez terminé, écrivez votre propre objet appelé chat2 qui a la
// même structure, et la même méthode salutation(), mais un nom, une race et une
// couleur différents.

const chat2 = {
	nom: "Boule de neige",
	race: "Abyssin",
	couleur: "gris",
	salutation: function () {
		return `Bonjour, dit ${this.nom} le ${this.race}.`;
	},
};

// Appelez les deux méthodes salutation() pour vérifier qu'elles affichent des
// salutations appropriées dans la console.

chat.salutation();
chat2.salutation();

////////////////////////////////////////////////////////////////////////////////
// ÉTAPE 3

// Amélioriez le code de manière à ce que la méthode salutation() ne soit
// définie qu'une seule fois et que chaque instance de chat obtienne sa propre
// méthode salutation().

function Chat(nom, race, couleur) {
	this.nom = nom;
	this.race = race;
	this.couleur = couleur;
	this.salutation = function () {
		return `Bonjour, dit ${this.nom} le ${this.race}.`;
	};
}
