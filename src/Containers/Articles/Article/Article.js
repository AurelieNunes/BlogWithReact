import React from 'react';

function Article(props) {
    
    return <h1>Ma page article({props.match.params.id})</h1>
}

export default Article;