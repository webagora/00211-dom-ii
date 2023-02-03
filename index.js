function listener(event) {
    console.log(`
    event passing through ${event.currentTarget.nodeName || 'Window'}
    target --> ${event.target.nodeName}
    `);
}


window.addEventListener('click', listener);
theDiv.addEventListener('click', listener);
document.addEventListener('click', listener);

document.body.addEventListener('click', e => e.stopImmediatePropagation());
//document.body.addEventListener('click', e => e.stopPropagation());

document.body.addEventListener('click', listener);

//document.body.addEventListener('click', listener, {capture: true});

theButton.addEventListener('click', e => console.log('click!'));
theButton.addEventListener('click', listener);
