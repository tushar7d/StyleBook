


async function lf() {
    await Promise.all([figma.loadFontAsync({ family: "Roboto", style: "Regular" }), figma.loadFontAsync({ family: "Sansita", style: "Bold" }), figma.loadFontAsync({ family: "Prompt", style: "Regular" })]);

    let Heading = figma.createText()
    let Sub = figma.createText()
    let Frame = figma.createFrame()

    Heading.characters = "The Zomato"
    Heading.fontSize=32
    Heading.fontName = { family: "Sansita", style: "Bold" }

    Sub.characters = "Food for everyone"
    Sub.letterSpacing={ value:15 ,unit:"PERCENT"}
    Sub.fontName = { family: "Prompt", style: "Regular" }
    Sub.textCase="UPPER"

    
    Frame.appendChild(Heading)
    Frame.appendChild(Sub)
    Frame.layoutMode= "VERTICAL"
    Frame.layoutAlign = "CENTER"
    Frame.primaryAxisAlignItems ="CENTER"
    Frame.counterAxisAlignItems="CENTER"
    Frame.counterAxisSizingMode="AUTO"
    Frame.fills = []
    
    


    figma.closePlugin();
}

lf()







