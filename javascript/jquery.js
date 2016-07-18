var $burguerButton = document.getElementById('burguer-button');
    var $menu = document.getElementById('menu');

    /*Media Query con Javascript*/
    var consulta = window.matchMedia('(max-width:520px)');

    consulta.addListener(mediaQuery);

    function mediaQuery() {
        if (consulta.matches) {
            // console.log("sipi");
            // Agregar interactividad a burguer button
            $burguerButton.addEventListener('touchstart', toggleMenu);

        } else {
            // console.log("nope");
            $burguerButton.removeEventListener('touchstart', toggleMenu);
        }
    }

    mediaQuery()

    // lazy loading
    var bLazy = new Blazy({
        selector: 'img'
    });

    //realizar activacion y desactivacion del burguer menu
    function toggleMenu() {
        $menu.classList.toggle('active');
    }

    function showMenu() {
        $menu.classList.add('active');
    }

    function hiddeMenu() {
        $menu.classList.remove('active');
    }

    // Gestos touch
    var $body = document.body;
    var gestos = new Hammer($body);
    gestos.on('swiperight', showMenu);
    gestos.on('swipeleft', hiddeMenu);