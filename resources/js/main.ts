import { handleFocusStyles } from "./utils/functions";
import "flowbite";
import PWAInstaller from "./components/PWAInstaller";

// fonction pour activer le comportement lorsqu'un élément est focus avec la touche Tab
handleFocusStyles();

// fonction pour activer le comportement de l'installation de l'application PWA via notre bouton custom
document.addEventListener("DOMContentLoaded", () => {
	new PWAInstaller("installPWAButton");
});
