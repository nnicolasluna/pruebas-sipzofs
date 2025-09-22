import { test, expect } from "@playwright/test";

test("Administracion de Instituciones - Agregar Entidad", async ({ page }) => {
    await page.goto("https://sipzofs.bits.bo/auth/login");
    await page.getByRole("textbox", { name: "Nombre usuario/correo" }).click();
    await page
        .getByRole("textbox", { name: "Nombre usuario/correo" })
        .fill("admin");
    await page
        .getByRole("textbox", { name: "Nombre usuario/correo" })
        .press("Tab");
    await page.getByRole("textbox", { name: "Contraseña" }).fill("sample");
    await page.getByRole("button", { name: "Acceder" }).click();
    await page
        .locator("a")
        .filter({ hasText: /^Usuarios$/ })
        .click();
    await page.getByRole("link", { name: " Administración de" }).click();
    await page.getByRole("button", { name: " Agregar Entidad" }).click();
    await page.getByText("Error en el servidor comuní").click();
    await page.getByText("Error al cargar los").click();
    await page
        .getByRole("textbox", { name: "Institución", exact: true })
        .click();
    await page
        .getByRole("textbox", { name: "Institución", exact: true })
        .fill("QQ");
    await page.getByRole("textbox", { name: "Sigla" }).click();
    await page
        .getByRole("textbox", { name: "Institución", exact: true })
        .click();
    await page
        .getByRole("textbox", { name: "Institución", exact: true })
        .fill("QQAAAA");
    await page.getByRole("textbox", { name: "Sigla" }).click();
    await page.getByRole("textbox", { name: "Sigla" }).fill("QQA");
    await page
        .getByRole("textbox", { name: "Persona de contacto", exact: true })
        .click();
    await page
        .getByRole("textbox", { name: "Persona de contacto", exact: true })
        .fill("JHON");
    await page
        .getByRole("textbox", { name: "Teléfono de la persona de" })
        .click();
    await page
        .getByRole("textbox", { name: "Teléfono de la persona de" })
        .fill("123123213");
    await page.getByRole("textbox", { name: "Dirección" }).click();
    await page.getByRole("textbox", { name: "Dirección" }).fill("Ceja");
    await page
        .getByRole("textbox", { name: "Teléfono de la institución" })
        .click();
    await page
        .getByRole("textbox", { name: "Teléfono de la institución" })
        .fill("123123123");
    await page.getByRole("textbox", { name: "Correo electrónico" }).click();
    await page
        .getByRole("textbox", { name: "Correo electrónico" })
        .fill("asdasd@daasdasd");
    await page.getByRole("textbox", { name: "Descripción" }).click();
    await page.getByRole("textbox", { name: "Descripción" }).fill("Hola mundo");
    await page.getByRole("checkbox", { name: "Entrega voluntaria" }).check();
    await page.getByRole("button", { name: " Siguiente" }).click();
    await page.getByRole("combobox", { name: "Provincia" }).click();
    await page.getByRole("option", { name: "Abuná" }).click();
    await page.getByRole("combobox", { name: "Municipio" }).click();
    await page.getByRole("option", { name: "Achocalla" }).click();
    await page.getByRole("combobox", { name: "Departamento" }).click();
    await page.getByRole("option", { name: "La Paz" }).click();
    //await page.getByRole('button', { name: ' Guardar' }).click();
});
test("Administracion de usuario - Agregar Usuario", async ({ page }) => {
    const randomUser = "user" + Date.now();
    await page.goto("https://sipzofs.bits.bo/auth/login");
    await page.getByRole("textbox", { name: "Nombre usuario/correo" }).click();
    await page
        .getByRole("textbox", { name: "Nombre usuario/correo" })
        .fill("admin");
    await page.getByRole("textbox", { name: "Contraseña" }).click();
    await page.getByRole("textbox", { name: "Contraseña" }).fill("sample");
    await page.getByRole("button", { name: "Acceder" }).click();
    await page
        .locator("a")
        .filter({ hasText: /^Usuarios$/ })
        .click();
    await page
        .getByRole("link", { name: " Administración de usuarios" })
        .click();
    await page.getByRole("button", { name: " Agregar Usuario" }).click();
    await page.getByRole("textbox", { name: "Nombres" }).fill(randomUser);
    await page.getByRole("textbox", { name: "Apllido paterno" }).click();
    await page
        .getByRole("textbox", { name: "Apllido paterno" })
        .fill(randomUser);
    await page.getByRole("textbox", { name: "Apellido materno" }).click();
    await page
        .getByRole("textbox", { name: "Apellido materno" })
        .fill(randomUser);
    await page.getByRole("textbox", { name: "Dirección" }).click();
    await page
        .getByRole("textbox", { name: "Dirección" })
        .fill("ceja" + randomUser);
    await page.getByRole("textbox", { name: "Cédula de identidad" }).click();
    await page
        .getByRole("textbox", { name: "Cédula de identidad" })
        .fill(randomUser);
    await page.getByRole("textbox", { name: "Correo electrónico" }).click();
    await page
        .getByRole("textbox", { name: "Correo electrónico" })
        .fill(randomUser + "kk@illubd.com");
    await page.getByRole("textbox", { name: "Teléfono" }).click();
    await page.getByRole("textbox", { name: "Teléfono" }).fill(randomUser);
    await page.locator("#idEntity").click();
    await page.getByRole("listbox").waitFor();
    await page.getByRole("option", { name: "POFOMA" }).click();
    await page.getByRole("textbox", { name: "Nombre de usuario" }).click();
    await page
        .getByRole("textbox", { name: "Nombre de usuario" })
        .fill(randomUser);
    await page.getByRole("textbox", { name: "Cargo" }).click();
    await page.getByRole("textbox", { name: "Cargo" }).fill("Encargado");
    await page.getByRole("combobox", { name: "Seleccione un rol" }).click();
    await page.getByRole("option", { name: "Administrador" }).click();
    //await page.getByRole('button', { name: ' Guardar' }).click();
});
test("Administracion de responsables - Agregar Responsable", async ({
    page,
}) => {
    await page.goto("https://sipzofs.bits.bo/auth/login");
    await page.getByRole("textbox", { name: "Nombre usuario/correo" }).click();
    await page
        .getByRole("textbox", { name: "Nombre usuario/correo" })
        .fill("admin");
    await page
        .getByRole("textbox", { name: "Nombre usuario/correo" })
        .press("Tab");
    await page.getByRole("textbox", { name: "Contraseña" }).fill("sample");
    await page.getByRole("button", { name: "Acceder" }).click();
    await page
        .locator("a")
        .filter({ hasText: /^Usuarios$/ })
        .click();
    await page
        .getByRole("link", { name: " Administración de responsables" })
        .click();
    await page.getByRole("button", { name: " Agregar Responsable" }).click();
    await page
        .locator("#pn_id_17")
        .getByRole("button", { name: "dropdown trigger" })
        .click();
    await page.getByRole("option", { name: "test" }).click();
    await page.getByRole("combobox", { name: "Seleccione un usuario" }).click();
    await page.getByRole("option", { name: "juana" }).click();
    await page.getByRole("button", { name: " Guardar" }).click();
    await page
        .locator("div")
        .filter({ hasText: "Éxito Registro guardado" })
        .nth(2)
        .click();
});
const randomRol = "Rol" + Date.now();
test("Administracion de Roles - Agregar Rol", async ({ page }) => {
    await page.goto("https://sipzofs.bits.bo/auth/login");
    await page.getByRole("textbox", { name: "Nombre usuario/correo" }).click();
    await page
        .getByRole("textbox", { name: "Nombre usuario/correo" })
        .fill("admin");
    await page.getByRole("textbox", { name: "Contraseña" }).click();
    await page.getByRole("textbox", { name: "Contraseña" }).fill("sample");
    await page.getByRole("button", { name: "Acceder" }).click();
    await page
        .locator("a")
        .filter({ hasText: /^Usuarios$/ })
        .click();
    await page.getByRole("link", { name: " Administración de roles" }).click();
    await page.getByRole("button", { name: " Agregar Rol" }).click();
    await page.getByRole("textbox", { name: "Nombre" }).click();
    await page.getByRole("textbox", { name: "Nombre" }).fill(randomRol);
    await page.getByRole("textbox", { name: "Descripción" }).click();
    await page.getByRole("textbox", { name: "Descripción" }).fill(randomRol);
    await page.getByRole("button", { name: " Guardar" }).click();
    await page
        .locator("div")
        .filter({ hasText: "Éxito Registro guardado" })
        .nth(2)
        .click();
});
test("Administracion de Roles - Agregar Permiso", async ({ page }) => {
    await page.goto("https://sipzofs.bits.bo/auth/login");
    await page.getByRole("textbox", { name: "Nombre usuario/correo" }).click();
    await page
        .getByRole("textbox", { name: "Nombre usuario/correo" })
        .fill("admin");
    await page
        .getByRole("textbox", { name: "Nombre usuario/correo" })
        .press("Tab");
    await page.getByRole("textbox", { name: "Contraseña" }).fill("sample");
    await page.getByRole("textbox", { name: "Contraseña" }).press("Enter");
    await page.getByRole("button", { name: "Acceder" }).click();
    await page
        .locator("a")
        .filter({ hasText: /^Usuarios$/ })
        .click();
    await page
        .getByRole("link", { name: " Administración de permisos" })
        .click();
    await page.getByRole("button", { name: " Agregar Permiso" }).click();
    await page.getByRole("combobox", { name: "Seleccione un rol" }).click();
    await page.getByRole("searchbox").click();
    await page.getByRole("searchbox").fill('rol');
    await page.getByRole("option").first().click();

    await page.getByRole("combobox", { name: "Seleccione un módulo" }).click();
    await page.getByRole("searchbox").fill("usuarios");
    await page.getByRole("option").first().click();
    await page.getByRole("checkbox", { name: "Administrador" }).check();
    await page.getByRole("button", { name: " Guardar" }).click();
    await page
        .locator("div")
        .filter({ hasText: "Éxito Permiso guardado" })
        .nth(2)
        .click();
});
