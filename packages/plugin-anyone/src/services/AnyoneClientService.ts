import { Anon } from "@anyone-protocol/anyone-client";

export class AnyoneClientService {
    private static instance: Anon | null = null;

    static getInstance(): Anon | null {
        return AnyoneClientService.instance;
    }

    static async initialize(): Promise<void> {
        if (!AnyoneClientService.instance) {
            AnyoneClientService.instance = new Anon({
                displayLog: true,
                socksPort: 9050,
                autoTermsAgreement: true,
            });
            await AnyoneClientService.instance.start();
        }
    }

    static async stop(): Promise<void> {
        if (AnyoneClientService.instance) {
            await AnyoneClientService.instance.stop();
            AnyoneClientService.instance = null;
        }
    }
}
