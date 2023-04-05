import React from 'react'
import key from '../../../assets/key.png'
import cup from '../../../assets/cup.png'
import calendar from '../../../assets/home.png'
import './AboutUs.css'


const AboutUs = () => {
    return (
        <section className='AboutUs'>
            <div className='firstColumn'>
                <h2 className='titleAbout'>O нас</h2>
                <p>Строительная компания Elite House была основана в 2013 году и является одним из лидеров строительной отрасли Кыргызстана. Компания Elite House не привлекает займы и работает исключительно на собственные средства.</p>
                <p>По итогам 2019 года компания Elite House была признана «Лучшей компанией по строительству многоэтажных домов премиум-класса в Кыргызстане».</p>

            </div>
            <div className='secondColumn'>
                <img className='key' src={key} alt="key" />
                <img className='cup' src={cup} alt="cup" />
                <img className='calendar ' src={calendar} alt="calendar " />

            </div>
            <div className='thirdColumn'>
                <h2>1000</h2>
                <h3>и более дольщиков</h3>
                <h2>#1</h2>
                <h3>выбор года 2019</h3>
                <h2>7</h2>
                <h3>лет на рынке</h3>
            </div>
        </section>
    )
}

export default AboutUs;