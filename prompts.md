# FinomOtthon AI Content Generation Prompts

Use these prompts to generate content that fits perfectly into your `recipe-template.html`.

## Prompt 1: Full Recipe HTML Generator
**Goal:** Generate the main content block for a specific Hungarian dish.
**Usage:** Replace `[DISH NAME]` with your target keyword (e.g., "Klasszikus Halászlé").

```text
Act as a professional Hungarian food blogger and SEO expert. I need you to write the full HTML content for a recipe page about "[DISH NAME]".

Please generate ONLY the HTML code that goes inside the `<article>` tag of my template. Do not include the `<head>`, `<nav>`, or `<footer>`.

**Requirements:**
1. **Title:** Use a catchy, SEO-friendly H1 title.
2. **Meta Data:** Include prep time, cook time, calories, and servings in the specific div structure provided below.
3. **Ingredients:** Use an unordered list `<ul>` with checkboxes `<input type="checkbox">` for each item. Use metric measurements (g, dl, dkg).
4. **Instructions:** Use a step-by-step format with bold numbers, exactly as shown in the example structure.
5. **Tone:** Enthusiastic, professional, native Hungarian.
6. **JSON-LD:** Generate the full `<script type="application/ld+json">` block for this specific recipe at the end.

**HTML Structure to Follow:**
```html
<!-- Title & Meta -->
<h1 class="text-4xl font-serif font-bold mb-4 text-gray-900">[Insert Title Here]</h1>
<div class="flex items-center text-gray-600 text-sm mb-6 space-x-4">
    <span>👤 Kovács Anna</span>
    <span>📅 [Current Date]</span>
    <span>⭐ 5.0 (12 értékelés)</span>
</div>

<!-- Intro Placeholder -->
<div class="prose max-w-none text-gray-700 mb-8 leading-relaxed">
    [INSERT INTRO PLACEHOLDER]
</div>

<!-- Recipe Card -->
<div id="recept-kartya" class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
    <div class="bg-primary/5 p-6 border-b border-primary/10">
        <h2 class="text-2xl font-serif font-bold text-primary mb-4">Recept Elkészítése</h2>
        <div class="flex flex-wrap gap-4 text-sm font-bold text-gray-700">
             <!-- Fill in these details -->
            <div class="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center"><span class="mr-2">⏱️</span> Előkészület: [XX]p</div>
            <div class="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center"><span class="mr-2">🍳</span> Sütés/Főzés: [XX]p</div>
            <div class="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center"><span class="mr-2">🍽️</span> Adag: [XX] fő</div>
            <div class="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center"><span class="mr-2">🔥</span> Kalória: [XX] kcal</div>
        </div>
    </div>

    <div class="p-6 md:p-8">
        <!-- Ingredients -->
        <div class="mb-8">
            <h3 class="text-xl font-bold mb-4 flex items-center"><span class="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span> Hozzávalók</h3>
            <ul class="space-y-3">
                <!-- List ingredients here -->
                <li class="flex items-start"><input type="checkbox" class="mt-1.5 mr-3 accent-primary w-5 h-5"><span>[Ingredient 1]</span></li>
            </ul>
        </div>

        <!-- Instructions -->
        <div>
            <h3 class="text-xl font-bold mb-4 flex items-center"><span class="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span> Elkészítés Lépésről Lépésre</h3>
            <div class="space-y-6">
                <!-- List steps here -->
                <div class="flex"><div class="font-bold text-primary text-lg mr-4">1.</div><p class="text-gray-700">[Step 1 Description]</p></div>
            </div>
        </div>
    </div>
</div>

<!-- JSON-LD Script -->
<script type="application/ld+json">
[Insert Valid JSON-LD Schema Here]
</script>
```
```

## Prompt 2: The "Human Touch" Intro Writer
**Goal:** Write a 150-word personal story that Google loves (E-E-A-T).
**Usage:** Run this *after* generating the recipe, then paste the result into the `[INSERT INTRO PLACEHOLDER]` spot.

```text
Write a 150-word personal introduction in Hungarian for a recipe about "[DISH NAME]".

**Rules:**
1. **Tone:** Nostalgic, warm, personal. Use phrases like "Emlékszem..." (I remember) or "A nagymamám mindig..." (My grandmother always...).
2. **Content:** Mention a specific memory or a "secret tip" related to the dish.
3. **Structure:** 2 short paragraphs.
4. **Keywords:** Naturally include the keyword "[DISH NAME]" once in the first sentence.
5. **No Fluff:** Avoid generic AI phrases like "Ez az étel tökéletes választás..." (This dish is a perfect choice...). Go straight to the story.
```

## Prompt 3: Midjourney Image Generator
**Goal:** Create high-quality, consistent food photography.
**Usage:** Copy-paste this into Midjourney (Discord).

```text
/imagine prompt: food photography of [DISH NAME], overhead shot, festive Christmas table setting with pine branches and warm fairy lights in background, rustic wooden table, highly detailed texture, steam rising, professional lighting, 8k resolution, photorealistic, appetizing --ar 16:9 --v 6.0
```
