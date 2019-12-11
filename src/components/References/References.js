import React from 'react';
import './References.scss';

export default () => (
    <div className="grid">
        <div className="grid__area grid__area--1"></div>
        <div className="grid__picture grid__picture--1"></div>
        <div className="grid__picture__description grid__picture__description--1">
            <p className="p">Tina Ubuntu</p>
            <p className="p">CEO headless Ltd.</p>
        </div>
        <blockquote className="gird__picture__blockquote grid__picture__blockquote--1 p">
            Alex‘ Redesign hat maßgeblich mitgeholfen, unseren Umsatz um 20% in
            die Hohe zu trei- ben!
        </blockquote>

        <div className="grid__area grid__area--2"></div>
        <div className="grid__picture grid__picture--2"></div>
        <div className="grid__picture__description grid__picture__description--2">
            <p className="p">Tom Herzog</p>
            <p className="p">Cutter's Finest</p>
        </div>
        <blockquote className="gird__picture__blockquote grid__picture__blockquote--2 p">
            Große Webkunst – keine Kunst mit Alex Mayer!
        </blockquote>

        <div className="grid__area grid__area--3"></div>
        <p className="special-quotes">&rdquo;</p>
        <div className="grid__picture grid__picture--3"></div>
        <div className="grid__picture__description grid__picture__description--3">
            <p className="p">Vorstand Müller AG</p>
            <p className="p">KR Ernst Anker, Dr. Florian Eisner</p>
        </div>
        <blockquote className="gird__picture__blockquote grid__picture__blockquote--3 p">
            Das Store-Konzept von Alex Mayer hat unsere größten Erwartungen
            übertroffen.
        </blockquote>
    </div>
)