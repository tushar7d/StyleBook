


async function lf() {
    
    let TextA = "The Zomato"
    let TextB = "Food for everyone"
    let FontA = { family: "Sansita", style: "Bold" }
    let FontB = { family: "Prompt", style: "Regular" }


    await Promise.all(
        [
            figma.loadFontAsync({ family: "Roboto", style: "Regular" }),
            figma.loadFontAsync(FontA),
            figma.loadFontAsync(FontB)
        ]);


    let Heading = figma.createText()
    let Sub = figma.createText()
    let Frame = figma.createFrame()

    Heading.characters = TextA
    Heading.fontSize = 32
    Heading.fontName = FontA

    Sub.characters = TextB
    Sub.letterSpacing = { value: 15, unit: "PERCENT" }
    Sub.fontName = FontB
    Sub.textCase = "UPPER"


    Frame.appendChild(Heading)
    Frame.appendChild(Sub)
    Frame.layoutMode = "VERTICAL"
    Frame.layoutAlign = "CENTER"
    Frame.primaryAxisAlignItems = "CENTER"
    Frame.counterAxisAlignItems = "CENTER"
    Frame.counterAxisSizingMode = "AUTO"
    Frame.fills = []




    figma.closePlugin();
}

lf()







