import React from 'react';
import './Footer.scss';
import FooterNavigation from '../FooterNavigation/FooterNavigation';

export default () => (
	<footer className="footer">
		<div className="footer__wrapper">
			<div className="footer__section">
				<p className="p p--white">© Alex Mayer 2018</p>
				<FooterNavigation />
			</div>
			<div className="footer__section">
				<p className="p p--white">
					Demo-Wordpress-Seite im Rahmen der LV‚Content Mangagement Systeme‘
					an der FH Salzburg von Thomas Steiner und Tobias Franek
            </p>
				<p className="p p--white">Alle Inhalte frei erfunden</p>
			</div>
			<div className="footer__section">
				<p className="h4 p p--white">Bildnachweis:</p>
				<p className="h5 p p--white">Fotos</p>
				<ul className="ul">
					<li className="li p--white">
						Herofoto Tastatur: Aman Anderson,
                    <a className="a a--white" href="http://de.freeimages.com/photo/illuminated-keyboard-124228">
							http://de.freeimages.com/photo/illuminated-keyboard-124228
                    </a>
					</li>
					<li className="li p--white">
						Foto Dina Meyer by Dreifachaxel [CC BY-SA 4.0 (<a className="a a--white"
							href="https://creativecommons.org/licenses/by-sa/4.0">
							https://creativecommons.org/licenses/by-sa/4.0 </a>)], from Wikimedia Commons
                </li>
					<li className="li p--white">
						Foto Thomas Meyer-Hermann By Thomas Meyer-Hermann (Thomas
                    Meyer-Hermann) [GFDL (<a className="a a--white" href="http://www.gnu.org/copyleft/fdl.html">
							http://www.gnu.org/copyleft/fdl.html</a>), CC BY-SA 3.0 (<a className="a a--white"
								href="https://creativecommons.org/licenses/by-sa/3.0">
							https://creativecommons.org/licenses/by-sa/3.0 </a>) or CC BY-SA 3.0 de (<a className="a a--white"
								href="https://creativecommons.org/licenses/by-sa/3.0/de/deed.en">
							https://creativecommons.org/licenses/by-sa/3.0/de/deed.en </a>)], via Wikimedia Commons
                    <a className="a a--white"
							href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Thomas_Meyer-Hermann_1.jpg/407px-Thomas_Meyer-Hermann_1.jpg">
							https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Thomas_Meyer-Hermann_1.jpg/407px-Thomas_Meyer-Hermann_1.jpg
                    </a>
					</li>
					<li className="li p--white">
						Foto Vorstand Sparkasse Ülzen [[File:SKUelzen Vorstand
						2015.jpg|SKUelzen Vorstand 2015]]
                    <a className="a a--white"
							href="https://upload.wikimedia.org/wikipedia/commons/3/3e/SKUelzen_Vorstand_2015.jpg">
							https://upload.wikimedia.org/wikipedia/commons/3/3e/SKUelzen_Vorstand_2015.jpg
                    </a>
					</li>
				</ul>
				<p className="h5 p p--white">Icons</p>
				<ul className="ul">
					<li className="li p--white">
						Freepik (<a className="a a--white" href="http://www.freepik.com">http://www.freepik.com</a>) /
                    <a className="a a--white" href="http://www.freepik.com">
							http://www.freepik.com
                    </a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
)