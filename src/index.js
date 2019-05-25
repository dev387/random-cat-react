import React from 'react';
import ReactDOM from 'react-dom';
import Cat from './Cat';
import './cat.css';

let getRandomCatImage = () => {
    props.loading = true;
    render();
    const api = 'https://aws.random.cat/meow';
    return fetch(api).then(response => {
        const promise = response.json();

        promise.then((data) => {
            props.imgSrc = data.file;
            props.loading = false;
            render();
        });
        return response;
    });
};

let props = {
    imgSrc: '',
    getRandomCatImage,
    loading: false
};

const CatWrapper = () => {
    return (
        <div className="cat-container">
            <Cat {...props}/>
        </div>
    );
}

const render = () => {
    ReactDOM.render(<CatWrapper {...props}/>, document.getElementById('root'));
}

render();
getRandomCatImage();
