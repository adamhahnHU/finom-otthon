const fs = require('fs');
const path = require('path');

// Template content (reading from the file would be better, but hardcoding for simplicity in this script)
const template = fs.readFileSync('recipe-template.html', 'utf8');

const recipes = [
    // Top 10 - Fully Detailed
    {
        title: "Klasszikus Bajai Halászlé",
        slug: "bajai-halaszle",
        prepTime: "30", cookTime: "60", calories: "280",
        intro: "A bajai halászlé a magyar konyha egyik legikonikusabb étele. A titka a jó minőségű fűszerpaprika és a gyufatészta.",
        ingredients: ["1 kg Ponty", "2 fej Vöröshagyma", "3 ek Fűszerpaprika", "Só", "Víz", "Gyufatészta"],
        steps: ["A halat megtisztítjuk és felszeleteljük.", "A hagymát apróra vágjuk.", "Bográcsban feltesszük főni a halat a hagymával és a vízzel.", "Amikor forr, hozzáadjuk a paprikát.", "Erős lángon főzzük 30-40 percig.", "Tésztával tálaljuk."]
    },
    {
        title: "Mákos Bejgli",
        slug: "makos-bejgli",
        prepTime: "60", cookTime: "45", calories: "450",
        intro: "Nincs karácsony bejgli nélkül! Ez a mákos változat omlós tésztával és gazdag töltelékkel készül.",
        ingredients: ["500g Liszt", "250g Vaj", "2 Tojás", "20g Élesztő", "400g Darált mák", "200g Cukor", "Citromhéj"],
        steps: ["Az élesztőt felfuttatjuk.", "A tésztát begyúrjuk és pihentetjük.", "A tölteléket elkészítjük (főzzük a mákot a cukorral).", "A tésztát kinyújtjuk, megkenjük a töltelékkel.", "Feltekerjük, lekenjük tojással.", "Megszurkáljuk és kisütjük."]
    },
    {
        title: "Diós Bejgli",
        slug: "dios-bejgli",
        prepTime: "60", cookTime: "45", calories: "460",
        intro: "A mákos párja, a diós bejgli. Sok dióval, mazsolával és egy csipetnyi baracklekvárral az igazi.",
        ingredients: ["500g Liszt", "250g Vaj", "2 Tojás", "20g Élesztő", "400g Darált dió", "200g Cukor", "Mazsola"],
        steps: ["Az élesztőt felfuttatjuk.", "A tésztát begyúrjuk és pihentetjük.", "A tölteléket elkészítjük.", "A tésztát kinyújtjuk, megkenjük a töltelékkel.", "Feltekerjük, lekenjük tojással.", "Megszurkáljuk és kisütjük."]
    },
    {
        title: "Szabolcsi Töltött Káposzta",
        slug: "toltott-kaposzta",
        prepTime: "45", cookTime: "120", calories: "420",
        intro: "A szabolcsi töltött káposzta paradicsomos lében fő, és elmaradhatatlan része az ünnepi asztalnak.",
        ingredients: ["1 fej Savanyú káposzta", "1 kg Darált sertéshús", "200g Rizs", "1 fej Hagyma", "Fűszerpaprika", "Paradicsomlé", "Tejföl"],
        steps: ["A rizst félig megfőzzük.", "Összekeverjük a hússal és fűszerekkel.", "Betöltjük a káposztalevelekbe.", "Lábosba rétegezzük az aprókáposztával.", "Felöntjük vízzel és paradicsomlével.", "Puhára főzzük."]
    },
    {
        title: "Zserbó",
        slug: "zserbo",
        prepTime: "60", cookTime: "40", calories: "500",
        intro: "Gerbeaud Emil öröksége. Dió, baracklekvár és csokoládé tökéletes harmóniája.",
        ingredients: ["350g Liszt", "200g Vaj", "1 Tojás", "10g Élesztő", "Darált dió", "Baracklekvár", "Étcsokoládé"],
        steps: ["A tésztát begyúrjuk és 3 részre osztjuk.", "Kinyújtjuk az első lapot, megkenjük lekvárral és megszórjuk dióval.", "Rátesszük a második lapot, ismételjük.", "A harmadik lappal befedjük.", "Megsütjük, majd csokimázzal bevonjuk."]
    },
    {
        title: "Mézeskalács",
        slug: "mezeskalacs",
        prepTime: "40", cookTime: "10", calories: "350",
        intro: "Illatos, fűszeres és puha. A mézeskalács sütés igazi családi program.",
        ingredients: ["500g Liszt", "150g Méz", "100g Vaj", "2 Tojás", "Mézeskalács fűszerkeverék", "Szódabikarbóna"],
        steps: ["A mézet és vajat összemelegítjük.", "Összegyúrjuk a száraz hozzávalókkal.", "Pihentetjük (akár egy éjszakát).", "Kinyújtjuk, kiszaggatjuk.", "Rövid ideig sütjük (vigyázzunk, ne égjen meg!)."]
    },
    {
        title: "Hókifli",
        slug: "hokifli",
        prepTime: "40", cookTime: "15", calories: "380",
        intro: "Omlós, vaníliás porcukorba forgatott kiflik, dióval vagy mákkal töltve.",
        ingredients: ["400g Liszt", "200g Zsír vagy Vaj", "1 dl Tejföl", "Darált dió/mák", "Vaníliás porcukor"],
        steps: ["A tésztát összegyúrjuk.", "Kis gombócokat formázunk, kinyújtjuk.", "Megtöltjük, kifli alakúra formázzuk.", "Világosra sütjük.", "Még melegen vaníliás porcukorba forgatjuk."]
    },
    {
        title: "Kókuszgolyó",
        slug: "kokuszgolyo",
        prepTime: "20", cookTime: "0", calories: "300",
        intro: "A legegyszerűbb ünnepi édesség, amit sütni sem kell. A gyerekek kedvence.",
        ingredients: ["500g Darált keksz", "100g Porcukor", "2 ek Kakaópor", "Meggybefőtt leve", "Rumaroma", "Kókuszreszelék"],
        steps: ["A hozzávalókat összegyúrjuk.", "Golyókat formázunk.", "Kókuszreszelékbe forgatjuk.", "Hűtőben pihentetjük."]
    },
    {
        title: "Lencseleves",
        slug: "lencseleves",
        prepTime: "15", cookTime: "45", calories: "250",
        intro: "Újévkor kötelező, de karácsonykor is finom. Gazdagon, füstölt hússal.",
        ingredients: ["500g Lencse", "1 fej Hagyma", "2 gerezd Fokhagyma", "Füstölt hús/kolbász", "Babérlevél", "Tejföl", "Mustár"],
        steps: ["A lencsét beáztatjuk.", "Feltesszük főni a füstölt hússal.", "Fűszerezzük.", "Ha puha, rántást készítünk.", "Tejföllel és mustárral ízesítjük."]
    },
    {
        title: "Kocsonya",
        slug: "kocsonya",
        prepTime: "30", cookTime: "240", calories: "200",
        intro: "A téli időszak elmaradhatatlan étele. Rezgős, fokhagymás, tele hússal.",
        ingredients: ["1 kg Kocsonyahús (köröm, csülök, bőrke)", "1 fej Fokhagyma", "Só, Bors", "Víz"],
        steps: ["A húst hideg vízben feltesszük főni.", "Lassan gyöngyöztetjük 4-5 órán át.", "Fűszerezzük.", "Leszűrjük, tányérokba merjük a húsra.", "Hideg helyen dermesztjük."]
    },
    // Next 40 - Generated Placeholders
    { title: "Mákos Guba", slug: "makos-guba" },
    { title: "Somlói Galuska", slug: "somloi-galuska" },
    { title: "Eszterházy Torta", slug: "eszterhazy-torta" },
    { title: "Dobos Torta", slug: "dobos-torta" },
    { title: "Rákóczi Túrós", slug: "rakoczi-turos" },
    { title: "Képviselőfánk", slug: "kepviselofank" },
    { title: "Ekler Fánk", slug: "ekler-fank" },
    { title: "Lúdláb Torta", slug: "ludlab-torta" },
    { title: "Puncstorta", slug: "puncstorta" },
    { title: "Kossuth Kifli", slug: "kossuth-kifli" },
    { title: "Pozsonyi Kifli", slug: "pozsonyi-kifli" },
    { title: "Flódni", slug: "flodni" },
    { title: "Linzer Karika", slug: "linzer-karika" },
    { title: "Isler", slug: "isler" },
    { title: "Non-plus Ultra", slug: "non-plus-ultra" },
    { title: "Hartyáni Krémes", slug: "hartyani-kremes" },
    { title: "Krémes", slug: "kremes" },
    { title: "Rigójancsi", slug: "rigojancsi" },
    { title: "Gesztenyepüré", slug: "gesztenyepure" },
    { title: "Madártej", slug: "madartej" },
    { title: "Tejberizs", slug: "tejberizs" },
    { title: "Aranygaluska", slug: "aranygaluska" },
    { title: "Túrógombóc", slug: "turogomboc" },
    { title: "Szilvás Gombóc", slug: "szilvas-gomboc" },
    { title: "Csöröge Fánk", slug: "csoroge-fank" },
    { title: "Szalagos Fánk", slug: "szalagos-fank" },
    { title: "Kürtőskalács", slug: "kurtoskalacs" },
    { title: "Sajtos Pogácsa", slug: "sajtos-pogacsa" },
    { title: "Tepertős Pogácsa", slug: "tepertos-pogacsa" },
    { title: "Sós Rudacska", slug: "sos-rudacska" },
    { title: "Sajtos Roló", slug: "sajtos-rolo" },
    { title: "Kaszinótojás", slug: "kazinotojas" },
    { title: "Tormás Sonkatekercs", slug: "tormas-sonkatekercs" },
    { title: "Franciasaláta", slug: "franciasalata" },
    { title: "Majonézes Krumplisaláta", slug: "majonezes-krumplisalata" },
    { title: "Rántott Ponty", slug: "rantott-ponty" },
    { title: "Harcsapaprikás", slug: "harcsapaprikas" },
    { title: "Túrós Csusza", slug: "turos-csusza" },
    { title: "Vadas Marha", slug: "vadas-marha" },
    { title: "Stefánia Vagdalt", slug: "stefania-vagdalt" }
];

// Helper to generate content for placeholders
function generateContent(recipe) {
    if (recipe.ingredients) return recipe; // Already detailed

    return {
        ...recipe,
        prepTime: "30",
        cookTime: "45",
        calories: "350",
        intro: `A ${recipe.title} egy igazi klasszikus, amely nem hiányozhat az ünnepi asztalról. Készítése egyszerű, az eredmény pedig garantált siker.`,
        ingredients: [
            "500g Alapanyag (Liszt/Hús)",
            "200g Cukor vagy Fűszer",
            "2 Tojás",
            "Vaj vagy Zsír",
            "Ízesítők (Vanília, Fahéj, Só)"
        ],
        steps: [
            "Az alapanyagokat előkészítjük.",
            "Összekeverjük a hozzávalókat egy nagy tálban.",
            "A megfelelő formába öntjük vagy formázzuk.",
            "Előmelegített sütőben készre sütjük/főzzük.",
            "Tálalás előtt hagyjuk kicsit hűlni."
        ]
    };
}

// Generate Files
recipes.forEach(rawRecipe => {
    const recipe = generateContent(rawRecipe);
    let content = template;

    // Replace Title
    content = content.replace(/Recept Címe/g, recipe.title);
    content = content.replace(/\[Insert Title Here\]/g, recipe.title);
    content = content.replace(/A Legfinomabb Karácsonyi Recept Címe/g, recipe.title); // Fallback if template differs

    // Replace Meta
    content = content.replace(/Recept rövid leírása.../g, recipe.intro);
    content = content.replace(/\[INSERT INTRO PLACEHOLDER\]/g, `<p>${recipe.intro}</p>`);

    // Replace Time/Calories
    content = content.replace(/\[XX\]/g, "30"); // Generic fallback
    content = content.replace(/PT20M/g, `PT${recipe.prepTime}M`);
    content = content.replace(/PT30M/g, `PT${recipe.cookTime}M`);
    content = content.replace(/350 kcal/g, `${recipe.calories} kcal`);
    
    // Replace Ingredients
    const ingredientsHtml = recipe.ingredients.map(i => 
        `<li class="flex items-start"><input type="checkbox" class="mt-1.5 mr-3 accent-primary w-5 h-5"><span>${i}</span></li>`
    ).join('\n');
    
    // Regex to find the ingredients list area is tricky without markers.
    // I'll look for the specific placeholder I put in prompts.md or the template structure
    // In recipe-template.html, the ingredients are hardcoded. I need to replace the <ul> content.
    // Strategy: Replace the whole <ul> block if I can identify it, or just use a known marker.
    // The template has: <ul class="space-y-3">...</ul>
    // I will replace the inner HTML of the first <ul class="space-y-3">
    
    content = content.replace(
        /<ul class="space-y-3">[\s\S]*?<\/ul>/, 
        `<ul class="space-y-3">\n${ingredientsHtml}\n</ul>`
    );

    // Replace Steps
    const stepsHtml = recipe.steps.map((s, index) => 
        `<div class="flex"><div class="font-bold text-primary text-lg mr-4">${index + 1}.</div><p class="text-gray-700">${s}</p></div>`
    ).join('\n');

    // Replace Instructions div content
    // Looking for <div class="space-y-6">
    content = content.replace(
        /<div class="space-y-6">[\s\S]*?<\/div>/,
        `<div class="space-y-6">\n${stepsHtml}\n</div>`
    );

    // Write File
    fs.writeFileSync(`${recipe.slug}.html`, content);
    console.log(`Generated: ${recipe.slug}.html`);
});

// Generate Index List (Optional: Create a recipes.html or just log the list for index.html)
const listHtml = recipes.map(r => 
    `<li><a href="${r.slug}.html" class="text-primary hover:underline">${r.title}</a></li>`
).join('\n');

fs.writeFileSync('recipes-list.html', `<ul>${listHtml}</ul>`);
console.log('Generated recipes-list.html snippet');
