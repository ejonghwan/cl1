const wrap = document.querySelector('.department .wrap');
/*
fetchDepart();
async function fetchDepart() {
	const result = await fetch('/DB/department.json');
	const data = await result.json();
	console.log(data);
}
*/
let tags = '';

fetch('/DB/department.json')
	.then((res) => {
		return res.json(); //promise객체 반환
	})
	.then((data) => {
		const memberData = data.members;

		memberData.map((data) => {
			tags += `
        <article>
          <div class='pic'>
            <img src='img/${data.pic}' />
          </div>
          <h2>${data.name}</h2>
          <p>${data.position}</p>
        </article>
      `;
		});
		wrap.innerHTML = tags;
	})
	.catch((err) => {
		console.log(err);
	});

const abc = {
	a: 'test',
	b: () => {
		console.log('test');
	},
};

abc.b();
