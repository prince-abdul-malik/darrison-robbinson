import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddPropertyForm } from "./add-property-form";

export default function AddPropertyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow container mx-auto px-6 md:px-10 py-12">
        <div className="max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Add a New Property</CardTitle>
                </CardHeader>
                <CardContent>
                    <AddPropertyForm />
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
