import {
    type Provider,
    type IAgentRuntime,
    type Memory,
    type State,
    elizaLogger,
} from "@elizaos/core";

export const sampleProvider: Provider = {
    get: async (_runtime: IAgentRuntime, _message: Memory, _state: State) => {
        // Data retrieval logic for the provider
        elizaLogger.log("Retrieving data in sampleProvider...");
    },
};
