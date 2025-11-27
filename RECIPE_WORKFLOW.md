# Recipe Workflow & Content Guide

This guide explains how to generate, format, and add new recipes to your FinomOtthon blog.

## 1. Workflow Overview
1.  **Pick a Topic**: Choose a popular Hungarian dish (e.g., "Töltött Káposzta").
2.  **Generate Content**: Use the AI prompts below to get the text.
3.  **Generate Image**: Use Midjourney to get a photo.
4.  **Create File**: Duplicate `recipe-template.html` and fill it in.
5.  **Publish**: Upload to GitHub.

## 2. AI Prompts

### Step 1: Generate Recipe HTML
**Tool**: ChatGPT / Claude / Gemini
**Prompt**:
```text
Act as a professional Hungarian food blogger and SEO expert. I need you to write the full HTML content for a recipe page about "[DISH NAME]".

Please generate ONLY the HTML code that goes inside the `<article>` tag of my template. Do not include the `<head>`, `<nav>`, or `<footer>`.

**Requirements:**
1. **Title:** Use a catchy, SEO-friendly H1 title.
2. **Meta Data:** Include prep time, cook time, calories, and servings in the specific div structure provided below.
3. **Ingredients:** Use an unordered list `<ul>` with checkboxes `<input type="checkbox">` for each item. Use metric measurements (g, dl, dkg).
4. **Instructions:** Use a step-by-step format with bold numbers.
5. **Tone:** Enthusiastic, professional, native Hungarian.
6. **JSON-LD:** Generate the full `<script type="application/ld+json">` block for this specific recipe at the end.

**HTML Structure to Follow:**
[Copy the structure from prompts.md or recipe-template.html]
```

### Step 2: Generate "Human" Intro
**Tool**: ChatGPT / Claude / Gemini
**Prompt**:
```text
Write a 150-word personal introduction in Hungarian for a recipe about "[DISH NAME]".
**Rules:**
1. **Tone:** Nostalgic, warm, personal. Use phrases like "Emlékszem..." or "A nagymamám mindig...".
2. **Content:** Mention a specific memory or a "secret tip".
3. **Structure:** 2 short paragraphs.
4. **Keywords:** Include "[DISH NAME]" naturally.
```

### Step 3: Generate Image
**Tool**: Midjourney (Discord)
**Prompt**:
```text
/imagine prompt: food photography of [DISH NAME], overhead shot, festive Christmas table setting with pine branches and warm fairy lights in background, rustic wooden table, highly detailed texture, steam rising, professional lighting, 8k resolution, photorealistic, appetizing --ar 16:9 --v 6.0
```

## 3. How to Add a Recipe
1.  **Copy Template**: Duplicate `recipe-template.html` and rename it (e.g., `toltott-kaposzta.html`).
2.  **Edit HTML**:
    - Open the new file in a code editor.
    - Update the `<title>` and `<meta name="description">` in the `<head>`.
    - Paste the AI-generated content into the `<article>` section.
    - Update the `src` of the main image.
3.  **Link It**: Add a link to this new page in `index.html` (under "Latest Recipes" or "Christmas Favorites").

## 4. Formatting Rules
- **Images**: Use `.jpg` or `.webp` for better performance. Keep size under 200KB.
- **Headings**: Use `<h2>` for main sections (Ingredients, Instructions) and `<h3>` for subsections.
- **Bold Text**: Use `<strong>` for emphasis (e.g., **Tipp:**).
