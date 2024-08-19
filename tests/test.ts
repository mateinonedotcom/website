import { expect, test } from '@playwright/test';

test('home page has expected board', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.board')).toBeVisible();
});
