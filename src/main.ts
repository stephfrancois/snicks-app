const brandName: string = "Snicks";
const launchYear: number = 2026;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<h1>${brandName}</h1>
<p>Depuis ${launchYear}</p>
`;
