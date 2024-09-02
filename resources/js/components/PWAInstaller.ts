import { BeforeInstallPromptEvent } from "../type/global";

export default class PWAInstaller {
	private deferredPrompt: BeforeInstallPromptEvent | null = null;
	private installBtnElement: HTMLButtonElement;

	constructor(buttonId: string) {
		this.installBtnElement = document.getElementById(buttonId) as HTMLButtonElement;

		if (!this.installBtnElement) throw new Error(`[PWAInstaller] Button with id ${buttonId} not found.`);

		this.installBtnElement.style.display = "none";
		this.setupEventListeners();
	}

	private setupEventListeners(): void {
		// Listen for the beforeinstallprompt event (dispatched by the browser when the PWA can be installed)
		window.addEventListener("beforeinstallprompt", (e: BeforeInstallPromptEvent) => {
			console.log("[PWAInstaller] beforeinstallprompt event fired");
			e.preventDefault();
			this.deferredPrompt = e;
			this.showInstallButton();
		});

		this.installBtnElement.addEventListener("click", () => {
			this.installPWA();
		});
	}

	private showInstallButton(): void {
		this.installBtnElement.style.display = "block";
	}

	private async installPWA(): Promise<void> {
		// If the deferredPrompt is null, it means the PWA installation is not available
		if (!this.deferredPrompt) return;

		// Show the installation prompt to the user and wait for their choice
		this.deferredPrompt.prompt();
		const choiceResult = await this.deferredPrompt.userChoice;

		console.log(
			choiceResult.outcome === "accepted"
				? "[PWAInstaller] User accepted the PWA installation prompt"
				: "[PWAInstaller] User dismissed the PWA installation prompt"
		);

		// Reset the deferredPrompt variable and hide the install button
		// If user rejected the installation, the `beforeinstallprompt` event will be fired again
		this.deferredPrompt = null;
		this.installBtnElement.style.display = "none";
	}
}
