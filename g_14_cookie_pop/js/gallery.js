const wrap = document.querySelector('.gallery .wrap');
const loading = document.querySelector('.gallery .loading');
const api_key = '034beefa27c4791e6e792d0e7e8d6873870907dlwhdghks';
const num = 500;
const myId = '191030940@N02';
const baseURL = `https://www.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key=${api_key}&per_page=${num}&method=`;
const method_interest = 'flickr.interestingness.getList';
const method_user = 'flickr.people.getPhotos';
const interest_url = `${baseURL}${method_interest}`;
const user_url = `${baseURL}${method_user}&user_id=${myId}`;

fetch(user_url)
	.then((res) => res.json())
	.then((json) => {
		const items = json.photos.photo;
		let tags = '';

		items.forEach((item) => {
			tags += `
        <li class='item'>
          <div>
            <a href='https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg'>
              <img class='pic' src='https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg' />
            </a>
            <p>${item.title === '' ? 'Have a good day!!' : item.title}</p>
          </div>
        </li>
      `;
		});

		wrap.innerHTML = tags;

		const imgs = wrap.querySelectorAll('img');
		let count = 0;

		for (const el of imgs) {
			el.onload = () => {
				count++;
				count === imgs.length && isoLayout();
			};
		}
	});

document.body.addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.className === 'pic') createPop();
	if (e.target.className === 'close') removePop();
});

function isoLayout() {
	new Isotope(wrap, {
		itemSelector: '.item',
		transitionDuration: '0.5s',
	});
	wrap.classList.add('on');
	loading.classList.add('off');
}

function createPop() {
	const tags = `	
		<div class='con'>
		</div>
		<span class='close'>close</span>
	`;
	const aside = document.createElement('aside');
	aside.classList.add('pop');
	aside.innerHTML = tags;
	document.body.append(aside);
	setTimeout(() => aside.classList.add('on'));
}

function removePop() {
	const pop = document.querySelector('.pop');
	pop.remove();
}