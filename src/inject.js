import { htmlToFigma } from "@builder.io/html-to-figma";

if (!document.getElementById("etf-box")) {
  const hoverBox = document.createElement("div");
  console.log("hoverBox: ", hoverBox);
  hoverBox.id = "etf-box";

  hoverBox.style.position = "absolute";
  hoverBox.style.background = "rgba(0,0,0,0.4)";
  hoverBox.style.transition = "all 300ms ease";
  hoverBox.style.zIndex = "9999";
  hoverBox.style.borderRadius = "5px";
  hoverBox.style.pointerEvents = "none";
  document.body.appendChild(hoverBox);
  document.body.focus();

  document.addEventListener("mouseover", e => {
    const target = e.target;
    const targetOffset = target.getBoundingClientRect();
    const targetHeight = targetOffset.height;
    const targetWidth = targetOffset.width;
    const boxBorder = 5;

    hoverBox.style.width = targetWidth + boxBorder * 2 + "px";
    hoverBox.style.height = targetHeight + boxBorder * 2 + "px";
    hoverBox.style.top = targetOffset.top + window.scrollY - boxBorder + "px";
    hoverBox.style.left = targetOffset.left + window.scrollX - boxBorder + "px";
  });

  document.addEventListener("click", async function(e) {
    // e.stopPropagation();
    e.preventDefault();

    if (!e.target.id) {
      e.target.id = "etf-element";
    }
    const element = e.target.id;

    const layers = await htmlToFigma(
      `#${element}`,
      location.hash.includes("useFrames=true")
    );
    console.log(layers);

    if (e.target.id === "etf-element") {
      e.target.removeAttribute("id");
    }
    const json = JSON.stringify({ layers });
    const data = json;

    chrome.runtime.sendMessage({ download: data }, response => {
      console.log(response);
      // this.loading = false;
      // this.done = true;
    });
    // link.click();
    // document.body.removeChild(link);
  });
}
