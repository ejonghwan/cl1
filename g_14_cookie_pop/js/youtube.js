//외부 api서비스 token값 발행
//외부 api 데이터를 가져오기 위해 url생성을 위한 api사용법 숙지
//해당 api요청 url로 fetch함수를 이용하여 데이터를 받은 뒤, 배열값만 출력
const wrap = document.querySelector('.youtube .wrap');
const key = 'AIzaSyChzicx_fRjO6YQhLL-C8tDxCq0E46sxtk'
const list = 'PLQytOX-GQNjpnWvXUwth7PTdoEA2kZX16'
const num = 10;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`

fetch(url)
	.then((data) => data.json())
	.then((json) => {
		console.log(json.items);
		let tags = '';

		json.items.forEach((item) => {
			tags += `
        <article>
          <h2>${item.snippet.title}</h2>
          <img src=${item.snippet.thumbnails.standard.url} />
          <p>${item.snippet.description}</p>
          <span>${item.snippet.publishedAt}</span>
        </article>
      `;
		});

		wrap.innerHTML = tags;
	});
