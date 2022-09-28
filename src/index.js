import {initialPageLoad} from './initial-page-load';
import {menuPage} from './menu';

initialPageLoad()

let tabSwitchingModule  = (function(){
    const homeTab = document.getElementById('home');
    homeTab.addEventListener('click', initialPageLoad);

    const menuTab = document.getElementById('menu');
    menuTab.addEventListener('click', menuPage);

})()
