import ControlKit from '../../../index';

window.addEventListener('load',()=>{
    const settings = {number:0};

    const panel = new ControlKit().addPanel();
    for(let i = 0; i < 100; ++i){
        panel.addNumber(settings,'number');
    }
});