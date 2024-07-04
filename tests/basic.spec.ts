import { test, expect } from "@playwright/test";

test.skip("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.locator("text=Get started").click();
});

test("basic test without POM", async ({ page }) => {
  await page.goto("https://toloka.ai");
  await page.getByTestId("cookieStartingForm-allowAllCookiesButton").click();
  await page.locator("css=.framer-1d0e9ni").click();
  await expect(page.locator("text=Choose your role")).toBeInViewport();
});
