let str = "Click the button to convert to camelCase";
function camelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}
function gfg_Run() {
  console.log(camelCase(str));
}
gfg_Run();
