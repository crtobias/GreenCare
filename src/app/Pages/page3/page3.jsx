"use client";
import { useState } from 'react';
import styles from "./page3.module.css";

const species = [
    {
        name: "Mono dorado de nariz chata",
        description: "Ha sido cazado durante mucho tiempo por su hermoso pelaje, pero desde principios de la década de 1990, la caza furtiva se ha reducido gracias a una mayor protección del gobierno. No obstante, su número ha seguido disminuyendo a medida que se despejaron sus bosques para la obtención de madera y la creación de tierras de cultivo.",
        image: "https://content.nationalgeographic.com.es/medio/2018/03/23/resistencia-dorada_98d55654_1016x648.jpg"
    },
    {
        name: "ajolote",
        description: "Hoy, solo queda una fracción de este sistema acuático, y está siendo contaminado por los fertilizantes, pesticidas, heces y basura de la Ciudad de México.",
        image: "https://content.nationalgeographic.com.es/medio/2018/03/23/axolotl_e8b57e0b_940x1199.jpg"
    },
    {
        name: "oso polar",
        description: "¿Imaginas el polo Norte sin hielo?Puede que un día lleguemos a ver un verano sin hielo en el polo Norte. El hielo refleja la radiación solar, y si desaparece, las nuevas aguas al descubierto del mar absorberán más calor y el calentamiento global se acelerará en todo el planeta.",
        image: "https://content.nationalgeographic.com.es/medio/2018/03/23/slipping-away_31ed6866.jpg"
    },
    {
        name: "Lémures",
        description: "Solo queda el 10% de los bosques históricos de Madagascar, los cuales sustentan a estos lémures en peligro crítico.",
        image: "https://content.nationalgeographic.com.es/medio/2018/03/23/un-grito-de-ayuda_d8e6aca3.jpg"
    },
    {
        name: "Olm",
        description: "Hace 66 millones de años, cuando el impacto de un meteorito destruyó la mayoría de las formas de vida en la Tierra, el olm siguió nadando. Sin embargo, a pesar de su resistencia, esta especie necesita agua limpia para sobrevivir.",
        image: "https://content.nationalgeographic.com.es/medio/2018/03/23/olm_42273c92.png"
    }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % species.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + species.length) % species.length);
    };




    return (
        <div className={styles.carousel}>
            <button onClick={prevSlide} className={styles.carouselButton}>{"<"}</button>
            <div className={styles.carouselSlide}>
                <img  src={species[currentIndex].image} alt={species[currentIndex].name} />
                <div className={styles.carouselCaption}>
                    <h3>{species[currentIndex].name}</h3>
                    <p>{species[currentIndex].description}</p>
                </div>
            </div>
            <button onClick={nextSlide} className={styles.carouselButton}>{">"}</button>
        </div>
    );
};

export default function Page3() {
    return (
        <main className={styles.main}>
            <h2>Especies en Peligro de Extinción</h2>
            <p>La actividad humana ha llevado a muchas especies al borde de la extinción. La caza furtiva, la destrucción de hábitats, la contaminación y el cambio climático, causados en gran medida por nuestras acciones, han puesto en riesgo la biodiversidad de nuestro planeta. Cada especie que desaparece rompe el equilibrio de nuestro ecosistema, afectando no solo a la naturaleza, sino también a nosotros mismos. Es nuestra responsabilidad tomar conciencia y actuar para proteger y preservar la vida silvestre, antes de que sea demasiado tarde.</p>
            <Carousel />
        </main>
    );
}
