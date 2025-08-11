import OpenAI from 'openai';
import { AIGenerationRequest, AIGenerationResponse } from '@karasu/shared';

export class RingDesignAI {
  private openai: OpenAI;

  constructor(apiKey?: string) {
    this.openai = new OpenAI({
      apiKey: apiKey || process.env.OPENAI_API_KEY,
    });
  }

  async generateRingDesign(request: AIGenerationRequest): Promise<AIGenerationResponse> {
    try {
      // Generate design description using GPT
      const designPrompt = this.buildDesignPrompt(request);
      const completion = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a professional jewelry designer. Create detailed, elegant ring designs based on user preferences."
          },
          {
            role: "user",
            content: designPrompt
          }
        ],
        max_tokens: 200,
        temperature: 0.8,
      });

      const description = completion.choices[0]?.message?.content || "Custom ring design";

      // Generate ring image using DALL-E
      const imageResponse = await this.openai.images.generate({
        model: "dall-e-3",
        prompt: this.buildImagePrompt(request, description),
        size: "1024x1024",
        quality: "hd",
        n: 1,
      });

      const imageUrl = imageResponse.data[0]?.url || "";

      // Calculate suggested price based on materials and complexity
      const suggestedPrice = this.calculatePrice(request);

      return {
        imageUrl,
        description,
        suggestedPrice,
        confidence: 0.85, // AI confidence score
      };
    } catch (error) {
      console.error('AI generation error:', error);
      throw new Error('Failed to generate ring design');
    }
  }

  private buildDesignPrompt(request: AIGenerationRequest): string {
    return `Design a ${request.style || 'elegant'} ring with the following specifications:
    - Material: ${request.material || 'gold'}
    - Size: ${request.size || 'standard'}
    - Description: ${request.prompt}
    
    Provide a detailed description of the ring's design, including:
    - Overall aesthetic and style
    - Specific design elements
    - How the material enhances the design
    - Unique features that make it special`;
  }

  private buildImagePrompt(request: AIGenerationRequest, description: string): string {
    return `Professional jewelry photography of a ${request.style || 'elegant'} ${request.material || 'gold'} ring. ${description}. High-quality studio lighting, white background, macro lens detail, luxury jewelry aesthetic, photorealistic, 4K quality.`;
  }

  private calculatePrice(request: AIGenerationRequest): number {
    const basePrices: Record<string, number> = {
      'gold': 299,
      'silver': 99,
      'platinum': 599,
      'titanium': 149,
      'rose_gold': 329,
    };

    const styleMultipliers: Record<string, number> = {
      'classic': 1.0,
      'modern': 1.1,
      'vintage': 1.2,
      'minimalist': 0.9,
      'ornate': 1.4,
      'geometric': 1.1,
    };

    const basePrice = basePrices[request.material || 'gold'] || 299;
    const styleMultiplier = styleMultipliers[request.style || 'classic'] || 1.0;
    
    return Math.round(basePrice * styleMultiplier);
  }
}

export default RingDesignAI;
