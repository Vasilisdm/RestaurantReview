// When the initial HTML document has been completely loaded and parsed.
document.addEventListener('DOMContentLoaded', function(event){

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(function(registration){
            // the registration proccess worked
            console.log(`Service worker's registration succeeded.`);
        }).catch(function(error){
            //  the registration proccess failed
            console.log(`Service worker's registration failed with error: ${error}.`);
        });
    }

})