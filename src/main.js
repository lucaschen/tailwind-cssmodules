import './main.scss'; // includes tailwind

const debugPre = document.createElement('pre');
debugPre.style.fontSize = '12px';
document.body.appendChild(debugPre);

// get contents of style tag for debugging tailwind
const tailwindStyles = document.getElementsByTagName('style')[0];
debugPre.innerText = tailwindStyles.innerText;
// notice the .main_ prefix in front of all the classNames, even though I've applied :global
