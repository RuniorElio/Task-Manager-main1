require("dotenv").config();

const bcrypt = require("bcrypt");
const prisma = require("../src/lib/prisma");

async function main() {
  const email = "admin@test.com";
  const password = "123456";

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    console.log("Usuario de prueba ya existe.");
    return;
  }

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      password: hashed,
    },
  });

  console.log("Usuario de prueba creado.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });