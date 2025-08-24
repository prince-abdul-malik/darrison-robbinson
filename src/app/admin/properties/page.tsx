import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getProperties, Property } from "@/lib/properties";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle } from "lucide-react";

export default async function AdminPropertiesPage() {
  const properties = await getProperties();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-6 md:px-10 py-12">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Manage Properties</CardTitle>
                <Button asChild>
                    <Link href="/admin/properties/add">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add New Property
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Beds</TableHead>
                            <TableHead>Baths</TableHead>
                            <TableHead>SqFt</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {properties.map((property: Property) => (
                            <TableRow key={property.id}>
                                <TableCell className="font-medium">{property.title}</TableCell>
                                <TableCell>{property.address}</TableCell>
                                <TableCell>${Number(property.price).toLocaleString()}</TableCell>
                                <TableCell>{property.bedrooms}</TableCell>
                                <TableCell>{property.bathrooms}</TableCell>
                                <TableCell>{property.sqft.toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
