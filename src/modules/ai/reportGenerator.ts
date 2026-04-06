// reportGenerator.ts

import { ClaudeAPI } from 'claude-api';

class ReportGenerator {
    private api: ClaudeAPI;
    
    constructor(apiKey: string) {
        this.api = new ClaudeAPI(apiKey);
    }
    
    async generateBaziReport(data: any): Promise<string> {
        const prompt = this.createPrompt(data);
        const report = await this.api.generate(prompt);
        return report;
    }
    
    private createPrompt(data: any): string {
        // Create a prompt based on the Bazi data
        // e.g. `Generate a Bazi analysis report based on the following data: ${data}`
        return `Generate a Bazi analysis report based on the following data: ${JSON.stringify(data)}`;
    }
}

export default ReportGenerator;
