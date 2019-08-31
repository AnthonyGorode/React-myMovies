import React from 'react';

const TitleDefault = (props) => {
    const title = props.movieDefault ? <h1 className="text-center">Les Tops du Moment</h1> : null
    return title;
}

export default TitleDefault;