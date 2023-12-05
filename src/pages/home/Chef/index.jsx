import './chef.scss';
import Slider from 'react-slick';

function Chef() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <>
            <section id="chef">
                <div className='section-specialty'>
                    <div className='specialty-container'>
                        <div className='specialty-header'>
                            <div className='edit-title'>Đầu bếp kinh nghiệm</div>
                            <span>-------------------------------------</span>
                        </div>
                        <Slider {...settings}>
                            <div class="card">
                                <div class="img"><img src='src/assets/chef/c1.jpg'></img></div>
                                <span>About Me 1</span>
                                <p class="info">I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
                                <div class="share">
                                    <a href=""><i class="fab fa-youtube"></i></a>
                                    <a href=""><i class="fab fa-facebook"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                                {/* <button>Resume</button> */}
                            </div>

                            <div class="card">
                                <div class="img"><img src='src/assets/chef/c2.jpg'></img></div>
                                <span>About Me 1</span>
                                <p class="info">I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
                                <div class="share">
                                    <a href=""><i class="fab fa-youtube"></i></a>
                                    <a href=""><i class="fab fa-facebook"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                                {/* <button>Resume</button> */}
                            </div>

                            <div class="card">
                                <div class="img"><img src='src/assets/chef/c3.jpg'></img></div>
                                <span>About Me 1</span>
                                <p class="info">I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
                                <div class="share">
                                    <a href=""><i class="fab fa-youtube"></i></a>
                                    <a href=""><i class="fab fa-facebook"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                                {/* <button>Resume</button> */}
                            </div>

                            <div class="card">
                                <div class="img"><img src='src/assets/chef/c4.jpg'></img></div>
                                <span>About Me 1</span>
                                <p class="info">I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
                                <div class="share">
                                    <a href=""><i class="fab fa-youtube"></i></a>
                                    <a href=""><i class="fab fa-facebook"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                                {/* <button>Resume</button> */}
                            </div>

                            <div class="card">
                                <div class="img"><img src='src/assets/chef/c5.jpg'></img></div>
                                <span>About Me 1</span>
                                <p class="info">I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
                                <div class="share">
                                    <a href=""><i class="fab fa-youtube"></i></a>
                                    <a href=""><i class="fab fa-facebook"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                                {/* <button>Resume</button> */}
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Chef;