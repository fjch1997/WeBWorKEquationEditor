Guppy.init({
    "path": chrome.runtime.getURL("lib/guppy"), "symbols": ["https://daniel3735928559.github.io/guppy/sym/symbols.json"], "settings": { "buttons": [] } });
// Get all inputs.
var codeshards = document.getElementsByClassName('codeshard');
for (var i = 0; i < codeshards.length; i++) {
    var codeshard = codeshards[i];
    var guppyElement = document.createElement("span");
    guppyElement.id = "guppy" + i;
    codeshard.parentElement.insertBefore(guppyElement, codeshard);
    codeshard.type = "hidden";
    var guppy = new Guppy(guppyElement.id, {
        "events": {
            "change": function (e) {
                codeshard.value = guppy.engine.get_content('asciimath');
            }
        }
    });
    guppyElement.style.width = codeshard.style.width;
    setTimeout(function () { guppy.import_text(codeshard.value) }, 500);
}