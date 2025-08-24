import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DescriptionGeneratorForm } from "./description-generator-form";

export default function AiDescriptionGeneratorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-6 md:px-10 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">AI Property Description Generator</h1>
            <p className="text-lg text-muted-foreground">
              Craft compelling property listings in seconds. Just provide the details, choose a tone, and let our AI do the writing.
            </p>
          </div>
          <DescriptionGeneratorForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
