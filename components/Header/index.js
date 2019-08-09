// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const topContainer = document.querySelector('.header-container');

function Header() {

    const headDiv = document.createElement('div');
    headDiv.classList.add('header');

    const spanTagA = document.createElement('span');
    spanTagA.classList.add('date');
    spanTagA.textContent = 'SMARCH 28, 2019';

    const h1Tag = document.createElement('h1');
    h1Tag.textContent = 'Lambda Times';

    const spanTagB = document.createElement('span');
    spanTagB.classList.add('temp');
    spanTagB.textContent = '98°';

    headDiv.appendChild(spanTagA);
    headDiv.appendChild(h1Tag);
    headDiv.appendChild(spanTagB);

    topContainer.appendChild(headDiv);
}

Header();
