# Exercice : Liste de course dynamique

Le but de cet exercice est de créer une liste de courses simple à laquelle il est possible d'ajouter des articles de façon dynamique grâce à un champ de formulaire et un bouton.

## Consignes

Lorsque vous ajoutez une valeur au champ et appuyez sur le bouton :

-   L'article doit être ajouté à la liste.
-   Chaque article de la liste doit avoir un bouton qui, quand on le presse, supprime cet élément de la liste.
-   Le champ doit être vidé et reprendre le focus pour que vous puissiez entrer directement un nouvel article.

## Bonus

-   Validez la valeur du champs afin qu'il soit impossible d'ajouter un article vide. (Voir les [bonnes et mauvaises pratiques de validation](https://adamsilver.io/blog/9-reasons-live-validation-is-problematic-and-what-to-do-instead/).)
-   Ajoutez des boutons `↑` et `↓` qui permettent de changer la position de chaque article. (Voir les propriétés [element.previousSibling](https://developer.mozilla.org/fr/docs/Web/API/Node/previousSibling) et [element.nextSibling](https://developer.mozilla.org/fr/docs/Web/API/Node/nextSibling).)

## Ressources

-   https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
-   https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
-   https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
-   https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
-   https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
-   https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value
-   https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/focus
-   https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
