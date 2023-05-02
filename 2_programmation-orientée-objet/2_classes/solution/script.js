class Forme {
	nom;
	cotesNombre;
	cotesLongueur;

	// Ajoutez un constructeur à cette classe. Le constructeur reçoit des
	// arguments pour les propriétés nom, cotesNombre et cotesLongueur, et
	// initialise celles-ci.

	constructor(nom, cotesNombre, cotesLongueur) {
		this.nom = nom;
		this.cotesNombre = cotesNombre;
		this.cotesLongueur = cotesLongueur;
	}

	// Ajoutez une nouvelle méthode calcPerimetre() qui calcule le périmètre de
	// la forme (c'est-à-dire la longueur développée de son contour), et affiche
	// le résultat dans la console.

	calcPerimetre() {
		const perimetre = this.cotesNombre * this.cotesLongueur;
		console.log(perimetre);
	}
}

// À partir de la classe Forme, instanciez un nouvel objet appelée carre ayant
// comme nom « carré » et 4 côtés, chacun d'une longueur de 5.

const carre = new Forme("carré", 4, 5);

// Testez la méthode calcPerimetre() sur le nouvel object pour vérifier qu'elle
// affiche le résultat attendu (20).

carre.calcPerimetre();

// Répétez les deux étapes précédentes, mais pour un triangle.

const triangle = new Forme("triangle", 3, 5);
triangle.calcPerimetre();

// Ensuite, créez une classe Carre qui hérite de Forme.

class Carre extends Forme {
	// Configurez également le constructeur de sorte que la propriété nom des
	// instances de Carre soit automatiquement « carré », et que la propriété
	// cotesNombre soit automatiquement 4. Lors de l'instanciation, seule la
	// propriété cotesLongueur devrait être nécessaire.

	constructor(cotesLongueur) {
		super("carré", 4, cotesLongueur);
	}

	// Ajoutez-y une méthode calcAire() qui calcule l'aire du carré, et affiche
	// le résultat dans la console.

	calcAire() {
		const aire = this.cotesLongueur * this.cotesLongueur;
		console.log(aire);
	}
}

// Créez une instance de la classe Carre appelée carre2 et vérifiez que les
// méthodes calcPerimetre() et calcAire() fonctionnent correctement.

const carre2 = new Carre(10);
carre2.calcPerimetre();
carre2.calcAire();
