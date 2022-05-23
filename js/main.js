if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('sw.js')
			.then(reg => console.log('Service Worker: Registered'))
			.catch(err => console.log(`Service Worker: Error: ${err}`));
	});
}

var installPrompt

window.addEventListener('beforeinstallprompt', (e) => {
	bInstall = document.getElementById('bInstall');
	installPrompt = e;
	e.preventDefault();
	bInstall.removeAttribute('disabled');
	bInstall.classList.remove('hidden');
});

bInstall.addEventListener('click', () => {
	bInstall = document.getElementById('bInstall');
	bInstall.setAttribute('disabled', true);
	bInstall.classList.add('hidden');
	installPrompt.prompt();
});
