import { test, expect } from "@playwright/test";

test("el usuario puede iniciar sesión y crear una tarea", async ({ page }) => {
  // Ir al login
  await page.goto("/login");

  // Iniciar sesión
  await page.getByPlaceholder("Email").fill("admin@test.com");
  await page.getByPlaceholder("Password").fill("123456");

  await page.getByRole("button", { name: "Ingresar" }).click();

  // Verificar que redirige a la aplicación
  await expect(page).toHaveURL(/\/$/);

  // Crear una tarea
  const taskName = `Prueba Playwright ${Date.now()}`;

  await page.getByLabel("Nueva tarea").fill(taskName);

  await page.getByRole("button", { name: "Agregar tarea" }).click();

  // Verificar que la tarea aparece
  await expect(page.getByText(taskName)).toBeVisible();
});