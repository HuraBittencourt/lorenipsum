import './phrase-generator.css';

import { Button, Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';

import axios from 'axios';
import logo from './logo.svg';

const componentClassName = 'phrase-generator';
const apiKey = 'e5693481ef000bfdd855a0f21ad39631';

const imageSource = 'http://image.tmdb.org/t/p/w500/';

class PhraseGenerator extends Component {

    state = {
        posts: []
    }


    handleGeneratePhraseClick = () => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(results => {
        //     return results.json();
        // }).then(data => this.setState({ posts: data }))
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({ posts: data.results })
        })
    }

    // showImageOfMovie = (sourceImage) => {
    //     fetch('')
    //     .then(results => {
    //         return results.json();
    //     }).then(data => {
    //         return 
    //     })
    // }

    render() {

        const { posts } = this.state;

        console.log(posts);

        return (
            <div className={componentClassName}>
                <Row>
                    <Col md={6} className={`${componentClassName}__button`}>
                        <Button onClick={this.handleGeneratePhraseClick}variant="primary">Filmes</Button>
                    </Col>
                    <Col md={6} className={`${componentClassName}__logo`}>
                        <img className={`${componentClassName}__img`} src={logo} alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col className={`${componentClassName}__text`}>
                        <ul className={`${componentClassName}__card`}>
                            {posts.map(post => (
                                <li key={post.id} className={`${componentClassName}__item`}>
                                    <img src={`${imageSource}${post.backdrop_path}`} alt=""/>
                                    <div className={`${componentClassName}__description_content`}>
                                        <h3 className={`${componentClassName}__title`}>{post.title}</h3>
                                        <p className={`${componentClassName}__phrase`}>{post.overview}</p>
                                    </div>
                                </li> 
                            ))}    
                        </ul>
                        {posts.length <= 0 && (
                            <p> Clique no botao para mostar alguns filmes :) </p>
                        )}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PhraseGenerator;