var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function lf() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all([figma.loadFontAsync({ family: "Roboto", style: "Regular" }), figma.loadFontAsync({ family: "Sansita", style: "Bold" }), figma.loadFontAsync({ family: "Prompt", style: "Regular" })]);
        let Heading = figma.createText();
        let Sub = figma.createText();
        let Frame = figma.createFrame();
        Heading.characters = "The Zomato";
        Heading.fontSize = 32;
        Heading.fontName = { family: "Sansita", style: "Bold" };
        Sub.characters = "Food for everyone";
        Sub.letterSpacing = { value: 15, unit: "PERCENT" };
        Sub.fontName = { family: "Prompt", style: "Regular" };
        Sub.textCase = "UPPER";
        Frame.appendChild(Heading);
        Frame.appendChild(Sub);
        Frame.layoutMode = "VERTICAL";
        Frame.layoutAlign = "CENTER";
        Frame.primaryAxisAlignItems = "CENTER";
        Frame.counterAxisAlignItems = "CENTER";
        Frame.counterAxisSizingMode = "AUTO";
        Frame.fills = [];
        figma.closePlugin();
    });
}
lf();
