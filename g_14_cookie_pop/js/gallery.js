const wrap = document.querySelector('.gallery .wrap');
const api_key = '034beefa27c4791e6e792d0e7e8d6873123dlwhdghks';
const method_interest = 'flickr.interestingness.getList';
const num = 5;
const baseURL = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${api_key}&format=json&nojsoncallback=1&per_page=${num}`;
fetch(baseURL)
	.then((res) => res.json())
	.then((json) => {
		console.log(json.photos.photo);
		const items = json.photos.photo;

		let tags = '';

		items.forEach((item) => {
			tags += `
        <li>
          <div>
            <a href='https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg'>
              <img src='https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg' />
            </a>
            <p>${item.title}</p>
          </div>
        </li>
      `;
		});

		wrap.innerHTML = tags;
	});