import "./Hero.css";


export const Hero = () => {
    return (
           <section className="hero container">
                <div className="container-hero">
                <h1 className="hero__title">Эффективные решения для вашего бизнеса</h1>
                <button className="modal-btn" type="button" data-modal-open>
                    Заказать услугу
                </button>
                </div>
            </section>
     )
} 