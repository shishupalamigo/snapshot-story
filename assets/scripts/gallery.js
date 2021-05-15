let Imagedata = [
   {
    name: "pic1",
    caption: "Figure Caption is Good",
    story: `Lorem ipsum dolor sit amet consectetur adipisicing elit Commodi tempore asperiores 
            totam modi harum, rerum animi ex maiores ut! 
            Sequi non voluptates eligendi. Quisquam facere commodi veniam eaque, provident rem.`
  }
]
const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");
const caption = document.querySelector(".caption");
const story = document.querySelector(".story");

function genrateHTML([h, v]) {
  return `
    <div class="item h${h} v${v}">
      <img src="assets/media/Gallery-images/${randomNumber(17)}.jpg">
        <div class="item__overlay">   
            <button>View →</button>   
        </div>
    </div>
    `;
} 

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    caption.innerText = Imagedata[0].caption;
    story.innerText = Imagedata[0].story;
    overlay.classList.add('open');
  }

  function close() {
    overlay.classList.remove('open');
  }

const digits = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4),
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]);

const html = digits.map(genrateHTML).join("");
gallery.innerHTML = html;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);
