import React from 'react';
import './Hero.scss'

export default ({headline, buttonColor, buttonText}) => (
<div class="hero">
    <div class="hero__wrapper">
        <h2 class="hero__headline">
           { headline }
        </h2>
        <br />
        <button class={`hero__btn btn btn--${buttonColor}`}>
        <a class="btn__a" href="#">{buttonText}</a>
        </button>
    </div>
</div>

)