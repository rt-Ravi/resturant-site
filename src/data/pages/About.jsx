import owner from "../images/ravi.jpg";
import parter1 from "../images/p1.png";
import parter2 from "../images/p2.png";
import parter3 from "../images/p3.png";
import "../css/about.css";

function About() {
    return (
        <>
            <main>
                <div className="main-con-about">
                    <div className="sub-con-about">
                        <div className="owner">
                            <h1>Owner</h1>
                            <div>
                            <img src={owner} alt="" />
                            </div>
                            <h2>Ravi</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolores perspiciatis odio tempore quibusdam veritatis optio amet? Obcaecati beatae expedita, pariatur itaque accusamus non qui quas cumque nemo provident eveniet architecto animi delectus. Excepturi omnis quia ab eveniet dignissimos voluptatem, fuga explicabo, impedit sequi laborum est temporibus provident, modi possimus.</p>
                        </div>
                        <div className="partner">
                            <h1>Partners</h1>
                            <div className="partners">
                                <div>
                                    <div className="about-img-con"><img src={parter1} alt="" /></div>
                                    <h3>Soo Nam - Manager</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde maxime aperiam adipisci. Non, placeat! Esse distinctio reprehenderit fugiat eaque excepturi, ducimus quod odit error nam inventore porro. Aliquid libero cumque maxime eveniet deserunt quisquam. Alias earum doloremque at assumenda eligendi.</p>
                                </div>
                                <div>
                                    <div className="about-img-con"><img src={parter2} alt="" /></div>
                                    <h3>Sik choo - CEO</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo inventore fugit, fuga quam excepturi perspiciatis molestiae exercitationem reiciendis asperiores odit accusantium dolores porro provident non distinctio repellendus a quidem fugiat sapiente totam. Perspiciatis, ex! Optio aspernatur placeat nobis! Totam, iure.</p>
                                </div>
                                <div>
                                    <div className="about-img-con"><img src={parter3} alt="" /></div>
                                    <h3>Nan Boo - Director</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae tenetur ex ullam nobis architecto dolores natus nesciunt veritatis id molestias modi ipsum velit repellendus ad porro ducimus voluptatem, eum, iste reprehenderit. Iste reiciendis reprehenderit nihil similique praesentium, nesciunt itaque blanditiis?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About;