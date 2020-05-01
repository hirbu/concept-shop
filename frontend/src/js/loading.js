/**
 * Fancy Loading effect
 */
const loadingElm = document.getElementById("loading");
import startAnimation from "./startAnimation";

if (window.location.search.includes("noloading")) {
  startAnimation();
} else {
  setTimeout(() => {
    loadingElm.remove();
    startAnimation();
  }, 6400);
}
