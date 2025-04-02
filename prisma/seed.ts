import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient();

console.log("HERROR");
async function main() {
  await prisma.contactInfo.upsert({
    where: { id: "1" },
    update: {},
    create: {
      id: "1",
      address: "123 Main Street, City, Country",
      email: "contact@example.com",
      phone: "+1234567890",
      officeHours: "Mon-Fri: 9 AM - 5 PM",
      mapEmbedded: "https://www.google.com/maps/embed?pb=...",
    },
  });

  await prisma.socialMedia.createMany({
    data: [
      { title: "instagram", text: "https://instagram.com/example" },
      { title: "pinterest", text: "https://pinterest.com/example" },
      { title: "linkedin", text: "https://linkedin.com/in/example" },
      { title: "whatsapp", text: "https://wa.me/123456789" },
    ],
    skipDuplicates: true, // Prevents errors if data already exists
  });
  await prisma.about.upsert({
    where: { id: "1" },
    update: {},
    create: {
      studio: "Studio Name",
      year: "2025",
      description: "We create beautiful, functional spaces that inspire.",
      mission: "To innovate and transform spaces with elegance.",
      vision: "Becoming a global leader in interior design.",
      quote: "Design is intelligence made visible.",
      quoteAuthor: "Alina Wheeler",
      image: "https://example.com/about-image.jpg",
    },
  });

  console.log("Seed data inserted!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
