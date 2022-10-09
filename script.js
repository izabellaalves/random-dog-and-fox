var fox_result = document.getElementById('fox_result')
var dog_result= document.getElementById('dog_result')
var fox_btn= document.getElementById('fox_btn')
var dog_btn= document.getElementById('dog_btn')

fox_btn.addEventListener('click', getRandomFox)
dog_btn.addEventListener('click', getRandomDog)

function getRandomFox() {
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data => {
        fox_result.innerHTML = `<img src="${data.image}"/>`
    })
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}