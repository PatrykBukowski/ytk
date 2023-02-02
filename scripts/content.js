const article = document.querySelector("article");
const player = document.querySelector('#main-panel');
const scrollTimer = [];
const textTimer = [];

/* I będę w stanie, przykuć uwagę nie tylko moich braci, To dla słuchaczy jest, to dla słuchaczy Bo dzięki nim każdy rym, nie idzie próżnie A interpretowany różnie ma znaczenie swoje i swój cel Żebym na scenie później, powtórzę wiem, Że oni wiedzą, że ja tu jestem dla nich, Nie dla tych, którzy przy stolikach siedzą I obserwują sfrustrowani, nie doceniając naszej pracy, To dla słuchaczy jest, to dla słuchaczy Którzy przychodzą na koncerty w całym kraju, Którzy nas znają i szanują za muzykę, której słuchają W zamian energię dając, tworząc publikę doskonałą, Dzięki której mamy jeszcze większą motywację, Żeby współtworzyć tę kulturę, za to szacunek To wiele dla nas znaczy, to dla słuchaczy. */

const createText = () => {
	const json = {
		name: "Dla słuchaczy",
		author: "Mor W.A.",
		links: [
			{
				url: "f-XYkH74Js4&list=RDCLAK5uy_lV2-eH6KyJD2DH1BFcwnmiZzpRnbkhUqk",
				offset: 0
			},
			{
				url: "3n5O3DCKDd0",
				offset: 23
			}
		],
		text: [
			[
				{
					stamp: 3.794563, value: "To"
				},
				{
					stamp: 3.95, value: "dla "
				},
				{
					stamp: 4.20, value: "słuchaczy"
				},
			],
			[
				{
					stamp: 4.786291, value: "A kiedyś tylko dla najbliższych"
				}
			],
			[
				{
					stamp: 6.526633, value: "Jak zaczynałem"
				}
			],
			[
				{
					stamp: 7.0, value: "nie myślałem"
				}
			],
			[
				{
					stamp: 7.832552, value: "że się kiedyś ziści"
				}
			],
			[
				{
					stamp: 8.811793, value: "Chociaż ułamek moich wizji"
				}
			],
			[
				{
					stamp: 10.300044, value: "nie przepuszczałem"
				}
			],
			[
				{
					stamp: 11.158383, value: "Że ktoś podchwyci i"
				}
			],
			[
				{
					stamp: 12.056699, value: "moje słowa będzie znał na pamięć"
				}
			],
			[
				{
					stamp: 13.603092, value: "Że przed publiką stanę"
				}
			],
			[
				{
					stamp: 14.383201, value: "z nią ramię w ramię"
				}
			],
		]
	};

	const parentElement = document.createElement('div');
	parentElement.style.display = 'flex';
	parentElement.style.flexDirection = 'column';
	parentElement.style.alignItems = 'center';
	parentElement.style.transitionProperty = "translate";
	parentElement.style.transitionDuration = '0.1s';
	parentElement.style.fontSize = '1em';
	parentElement.classList.add('yt-karaoke-slider')


	json.text.forEach(el => {
		const childElement = document.createElement('p');
		scrollTimer.push(el[0].stamp);

		el.forEach(em => {
			const childChildElement = document.createElement('span');
			childChildElement.style.color = 'gray';
			childChildElement.textContent = em.value + ' ';
			childChildElement.classList.add('yt-karaoke-element');
			childChildElement.dataset.time = '' + em.stamp;
			textTimer.push(em.stamp);
			childElement.insertAdjacentElement('beforeend', childChildElement);
		})

		parentElement.insertAdjacentElement('beforeend', childElement);
	})

	return parentElement;
}

if (player) {
	const element = document.createElement('div');
	element.style.position = "absolute";
	element.style.bottom = '20px';
	element.style.left = '0';
	element.style.width = '100%';
	element.style.fontSize = "32px";
	element.style.lineHeight = "1";
	element.style.fontWeight = "600";
	element.style.background = "rgba(0,0,0,0.8)";
	element.style.height = '50%';
	element.style.overflow = 'hidden';
	element.insertAdjacentElement('beforeend', createText())
	player.style.position = "relative";
	player.insertAdjacentElement('beforeend', element);
}

const slider = document.querySelector("div.yt-karaoke-slider");

const elements = document.querySelectorAll("span.yt-karaoke-element");
const offset = 0;
const choose = (e) => {
	try {
		const stamp = e.target.currentTime + offset;
		for (let i = 0; i < scrollTimer.length; i++) {
			if ((scrollTimer[i] <= stamp && scrollTimer[i + 1] > stamp) || (i == scrollTimer.length - 1 && scrollTimer[i] <= stamp))
				slider.style.translate = `0% -${i}em`;
		}

		for (let i = 0; i < elements.length; i++) {
			if ((i == elements.length - 1 && elements[i].dataset.time <= stamp) || (elements[i].dataset.time <= stamp && elements[i + 1].dataset.time > stamp))
				elements[i].style.color = `white`;
			else
				elements[i].style.color = 'gray';
		}
	} catch (error) {
		console.error(error);
	}
}

addEventListener("load", (event) => {
	var vid = document.querySelector('video');

	vid.addEventListener('timeupdate', e => choose(e));
});


