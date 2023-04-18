// Crée trois variables contenant des références aux éléments de liste <ul>,
// de champ <input> et de bouton <button>.
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Fonction qui sera déclenchée lorsqu'on clique sur le bouton
button.addEventListener("click", () => {
	// Stocke la valeur actuelle (propriété `value`) du champ dans une variable.
	const myItem = input.value;
	// Vide le champ en définissant sa valeur comme une chaîne vide.
	input.value = "";

	// Crée trois nouveaux éléments : un élément de liste <li>, un <span>,
	// et un bouton <button>, et stockez-les chacun dans des variables.
	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listBtn = document.createElement("button");

	// Attache le <span> et le <button> comme enfants de <li>.
	listItem.appendChild(listText);
	listItem.appendChild(listBtn);

	// Défini le contenu texte du <span> comme égal à la valeur du champ
	// récupéré précédemment, et le contenu du bouton à « Supprimer ».
	listText.textContent = myItem;
	listBtn.textContent = "Supprimer";

	// Attache l'article <li> comme enfant de la liste.
	list.appendChild(listItem);

	// Ajoute un gestionnaire d'événement au bouton « Supprimer », de façon à ce
	// que lorsqu'on le clique le <li> dans lequel il se situe soit supprimé.
	listBtn.addEventListener("click", () => {
		list.removeChild(listItem);
	});

	// Redonne le focus au champ.
	input.focus();
});
