import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const name = process.env.ADMIN_NAME ?? 'Sam Admin';
  const email = process.env.ADMIN_EMAIL ?? 'admin@cybereyeintelitech.com';
  const password = process.env.ADMIN_PASSWORD ?? 'ChangeMe123!';

  const passwordHash = await argon2.hash(password);

  await prisma.adminUser.upsert({
    where: { email },
    update: { name, passwordHash, isActive: true },
    create: { name, email, passwordHash, role: 'ADMIN', isActive: true },
  });

  await prisma.service.upsert({
    where: { slug: 'iso-27001' },
    update: {},
    create: {
      name: 'ISO 27001',
      slug: 'iso-27001',
      shortDescription: 'Information security management and risk control for resilient operating models.',
      description: 'Support for security governance, evidence preparation, and certification planning.',
      category: 'Information Security',
      isPublished: true,
    },
  });

  console.log(`Seeded admin account for ${email}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
