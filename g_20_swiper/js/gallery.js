const wrap = document.querySelector('.gallery .wrap');
const loading = document.querySelector('.gallery .loading');
const api_key = 'ae5dbef0587895ed38171fcda4afb648';
const num = 500;
const myId = '164021883@N04';
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
						<img class='pic' src='https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg' alt='https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg' />           
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
	if (e.target.className === 'pic') {
		const imgSrc = e.target.getAttribute('alt');
		console.log(imgSrc);
		createPop(imgSrc);
	}
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

function createPop(imgSrc) {
	const tags = `	
		<div class='con'>
			<img src='${imgSrc}' />
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
