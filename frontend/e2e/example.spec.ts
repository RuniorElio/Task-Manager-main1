import { test, expect } from "@playwright/test";

test("el usuario puede iniciar sesión y crear una tarea", async ({
  page,
  request,
}) => {
  // Crear el usuario de prueba (si ya existe, ignoramos el error)
  await request.post("http://localhost:3000/auth/register", {
    data: {
      email: "admin@test.com",
      password: "123456",
    },
  });

  // Ir al login
  await page.goto("/login");

  // Iniciar sesión
  await page.getByPlaceholder("Email").fill("admin@test.com");
  await page.getByPlaceholder("Password").fill("123456");

  await page.getByRole("button", { name: "Ingresar" }).click();

  // Verificar que redirige a la aplicación
  await expect(page).toHaveURL("http://localhost:5173/");

  // Crear una tarea
  const taskName = `Prueba Playwright ${Date.now()}`;

  await page
    .getByPlaceholder("Ej. Elaborar el proyecto final")
    .fill(taskName);

  await page.getByRole("button", { name: "Agregar tarea" }).click();

  // Verificar que la tarea aparece
  await expect(page.getByText(taskName)).toBeVisible();
});