

export default function clearInnerContainer() {
    const innerContainer = document.querySelector('.inner-container');
    while (innerContainer.firstChild) {
        innerContainer.removeChild(innerContainer.firstChild);
    }
}

