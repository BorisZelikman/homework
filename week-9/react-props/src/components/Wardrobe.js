import Article from "./Article.js";

function Wardrobe() {
  let wardrobe = [
    { type: "shirt", color: "red", size: "Medium" },
    { type: "shirt", color: "blue", size: "Medium" },
    { type: "pants", color: "blue", size: "Medium" },
    { type: "accessory", color: "sapphire", size: "" },
    { type: "accessory", color: "lilac", size: "" },
  ];
  return wardrobe
    .filter((a) => a.color === "blue")
    .map((a) => <Article info={a} key={a.type + a.color + a.size} />);
}
export default Wardrobe;
