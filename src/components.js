import React from 'react';
import './components.css';

const Title = () => {
    return(
    <div>
        <h1>Justin Timberlake</h1>
        <h3>Pop, RnB </h3>
        <p>Justin Randall Timberlake (born January 31, 1981) is an American singer, songwriter, record producer and actor. He is one of the world's best-selling music artists, with sales of over 88 million records worldwide. Timberlake is the recipient of numerous awards and accolades, including ten Grammy Awards, four Primetime Emmy Awards, three Brit Awards, nine Billboard Music Awards, the Contemporary Icon Award by the Songwriters Hall of Fame, and the Michael Jackson Video Vanguard Award. According to Billboard, he is the best performing male soloist in the history of the Mainstream Top 40.</p>
    </div>
    )
}


const SongList = () =>{
    return (
        <div>
            <h2>Notable Songs</h2>
            <ul>
                <li>SexyBack, 2006 <img src="https://upload.wikimedia.org/wikipedia/en/2/28/SexyBack.png" /></li>
                <li>Suit & Tie, 2013 <img src="https://upload.wikimedia.org/wikipedia/en/a/a1/Suit_%26_Tie.png" /></li>
                <li>Can't Stop the Feeling, 2016 <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Justin_Timberlake_-_Can%27t_Stop_the_Feeling.png" /></li>
                <li>Cry Me a River, 2002 <img src="https://upload.wikimedia.org/wikipedia/en/7/73/Cry_Me_a_River_cover.png" /></li>
                <li>Mirrors, 2009 <img src="https://upload.wikimedia.org/wikipedia/en/9/91/JTMirrorsCover.png" /></li>
            </ul>
        </div>
    )
}

export {Title, SongList};