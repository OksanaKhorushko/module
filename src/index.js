import { items } from './media';
import './index.scss';
import itemTemplate from './templates/galleryItemTemplate';

const gallaryItems = items.map(item => {
    return itemTemplate[item.type](item);
}).join('');

document.getElementById('gallery').insertAdjacentHTML('beforeend', gallaryItems);
