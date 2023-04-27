# Exercice : Programmation orientée objet

Pour cet exercice, il vous est donné le début de la définition d'une classe `Forme`. La classe `Forme` a trois propriétés : `nom`, `cotesNombre` et `cotesLongueur`. Cette classe modélise des formes dont tous les côtés ont la même longueur, comme un carré ou un triangle équilatéral.

---

1. Ajoutez un constructeur à cette classe. Le constructeur reçoit des arguments pour les propriétés `nom`, `cotesNombre` et `cotesLongueur`, et initialise celles-ci.
2. Ajoutez une nouvelle méthode `calcPerimetre()` qui calcule le périmètre de la forme (c'est-à-dire la longueur développée de son contour), et affiche le résultat dans la console.

---

1. À partir de la classe `Forme`, instanciez un nouvel objet appelée `carre` ayant comme nom « carré » et 4 côtés, chacun d'une longueur de 5.
2. Testez la méthode `calcPerimetre()` sur le nouvel object pour vérifier qu'elle affiche le résultat attendu (20).
3. Répétez les deux étapes précédentes, mais pour un triangle.

---

1. Ensuite, créez une classe `Carre` qui étend `Forme`. Ajoutez-y une méthode `calcAire()` qui calcule l'aire du carré, et affiche le résultat dans la console.
2. Configurez également le constructeur de sorte que la propriété `nom` des instances de `Carre` soit automatiquement « carré », et que la propriété `cotesNombre` soit automatiquement 4. Lors de l'instanciation, seule la propriété `cotesLongueur` devrait être nécessaire.
3. Créez une instance de la classe `Carre` appelée `carre2` et vérifiez que les méthodes `calcPerimetre()` et `calcAire()` fonctionnent correctement.
