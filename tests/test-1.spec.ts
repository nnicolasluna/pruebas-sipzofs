import { test, expect } from '@playwright/test';

test('Administracion de responsables - Agregar Responsable', async ({ page }) => {
  await page.goto('https://sipzofs.bits.bo/auth/login');
  await page.getByRole('textbox', { name: 'Nombre usuario/correo' }).click();
  await page.getByRole('textbox', { name: 'Nombre usuario/correo' }).fill('admin');
  await page.getByRole('textbox', { name: 'Nombre usuario/correo' }).press('Tab');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('sample');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await page.locator('a').filter({ hasText: /^Usuarios$/ }).click();
  await page.getByRole('link', { name: ' Administración de responsables' }).click();
  await page.getByRole('button', { name: ' Agregar Responsable' }).click();
  await page.locator('#pn_id_17').getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'test' }).click();
  await page.getByRole('combobox', { name: 'Seleccione un usuario' }).click();
  await page.getByRole('option', { name: 'juana' }).click();
  await page.getByRole('button', { name: ' Guardar' }).click();
  await page.locator('div').filter({ hasText: 'Éxito Registro guardado' }).nth(2).click();
});