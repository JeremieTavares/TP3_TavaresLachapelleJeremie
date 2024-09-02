export interface BeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
	prompt(): Promise<void>;
}

// Extend the WindowEventMap interface to include the beforeinstallprompt event
declare global {
	interface WindowEventMap {
		beforeinstallprompt: BeforeInstallPromptEvent;
	}
}
