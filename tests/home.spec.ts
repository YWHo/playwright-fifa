import { test, expect } from "@playwright/test";

test("Open home page and verify title", async ({ page }) => {
  await page.goto("https://www.fifa.com/en");

  await expect(page).toHaveTitle("FIFA | The Home of Football");
});

test("Verify logo is visible and has the alt title", async ({ page }) => {
  await page.goto("https://www.fifa.com/en");

  const logo = page.locator('[href="/en/home"] img');
  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute("title", "FIFA");
  await expect(logo).toHaveAttribute("alt", "FIFA");
});

test("Verify navigation links", async ({ page }) => {
  const expectedLinks = [
    "OVERVIEW",
    "FIFA WORLD CUP 26™",
    "FIFA CLUB WORLD CUP 2025™",
    "FIFA WOMEN'S WORLD CUP 2027™",
    "MATCH CENTRE",
    "NEWS",
    "RANKINGS",
    "HOME",
    "FIFA WORLD CUP 26™ QUALIFIERS",
    "LIVE",
    "ORIGINALS",
    "ARCHIVE",
    "PLAY ZONE",
    "FIVES",
    "GLOBAL GOALSCORER",
    "WHO AM I?",
    "TRIVIA",
    "ROBLOX FIFA WORLD",
    "MORE GAMES",
    "FIFA STORE",
    "TICKETS & HOSPITALITY",
    "FIFA COLLECT",
    "OVERVIEW",
    "ABOUT FIFA",
    "WOMEN'S FOOTBALL",
    "SOCIAL IMPACT",
    "FOOTBALL DEVELOPMENT",
    "TECHNICAL",
    "LEGAL",
    "FIFA RANKINGS",
  ];

  await page.goto("https://www.fifa.com/en");
  const navLinks = page.locator("#mainLinksID a");

  // await page.waitForTimeout(3000);   // hard coded wait, not recommended
  await expect(navLinks.first()).toBeAttached();

  expect(await navLinks.allInnerTexts()).toEqual(expectedLinks);
});