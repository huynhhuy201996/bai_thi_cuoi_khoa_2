import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineReload } from 'react-icons/ai';

function HomeScreens() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [authorQuotes, setAuthorQuotes] = useState([]);

    const fetchRandomQuote = async () => {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data.content);
        setAuthor(response.data.author);
    };

    const fetchAuthorQuotes = async (author) => {
        const response = await axios.get(`https://api.quotable.io/quotes?author=${author}`);
        setAuthorQuotes(response.data.results);
    };

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    return (
        <div className="container ">
            <div className='col-8 offset-2 mb-10'>
                <h1>Random Quote</h1>
                <p>{quote}</p>
                <button style={{ marginRight: '40px' }} onClick={fetchRandomQuote}>
                    <AiOutlineReload /> Random
                </button>
                <button onClick={() => fetchAuthorQuotes(author)}>{author}</button>
                {authorQuotes.map((quote, index) => (
                    <div key={index}>
                        <p>{quote.content}</p>
                        <p>Tags: {quote.tags.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeScreens;