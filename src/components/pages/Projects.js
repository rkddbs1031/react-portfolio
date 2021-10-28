import React from "react";
import Header from "../include/Header"
import Contents from "../include/Contents"
import Footer from "../include/Footer"
import { Link } from "react-router-dom";

//tab
// $('.tab li').click(function(){
//     $(this).addClass('active');
//     $(this).siblings().removeClass('active');
//     let data = $(this).attr('data-alt');
//     $('.section_menu .menu').removeClass('active');
//     $('#'+data).addClass('active');
// })
document.querySelectorAll(".tab li").forEach((li,index)=>{
    console.log({li,index})
    li.classList.remove("active");

    // li.addEventListener("click",function(index){
    //     document.querySelector(".tab li:nth-child("+ (index+1) +")").classList.add("active");
    // })
})


function Projects(){
    return(
        <div>
            <Header/>
            <Contents>
                <section id="section1">
                    <div className="sec1 projects">
                        <h1 className="ir_su">프로젝트 부분</h1>
                        <ul className="tab">
                            <li className="active" data-alt="tab1"><Link to="#" >WEB PROJECT</Link></li>
                            <li data-alt="tab2"><Link to="#" >SCRIPT</Link></li>
                            <li data-alt="tab3"><Link to="#">ANIMATION</Link></li>
                        </ul>
                        <div className="section_menu">
                            <ul className="menu active" id="tab1">
                                <li data-image="img/bg01.png">
                                    <Link to="/project" className="nav__link page__click" >
                                        <span className="nav__link--text" data-splitting>Portfolio</span>
                                        {/* <span className="nav__link--text" data-splitting>Portfolio</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg02.jpg">
                                    <Link to="/project" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>PHP Website</span>
                                        {/* <span className="nav__link--text" data-splitting>PHP Website</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg03.png">
                                    <Link to="/project" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Web Standard</span>
                                        {/* <span className="nav__link--text" data-splitting>Web Standard</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg04.png">
                                    <Link to="project" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Resonsive</span>
                                        {/* <span className="nav__link--text" data-splitting>Resonsive</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg05.png">
                                    <Link to="/project" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Megabox</span>
                                        {/* <span className="nav__link--text" data-splitting>Megabox</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg06.jpg">
                                    <Link to="/project" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Jaju</span>
                                        {/* <span className="nav__link--text" data-splitting>Jaju</span> */}
                                    </Link>
                                </li>
                            </ul>
                            <ul className="menu" id="tab2">
                                <li data-image="img/bg.png">
                                    <Link to="/script" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Parallax Effect</span>
                                        {/* <span className="nav__link--text" data-splitting>Parallax Effect</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg.png">
                                    <Link to="/script" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Mouse Effect</span>
                                        {/* <span className="nav__link--text" data-splitting>Mouse Effect</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg.png">
                                    <Link to="/script" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Slide Effect</span>
                                        {/* <span className="nav__link--text" data-splitting>Slide Effect</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg.png">
                                    <Link to="/script" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Band</span>
                                        {/* <span className="nav__link--text" data-splitting>Band</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg.png">
                                    <Link to="/script" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Paint JS</span>
                                        {/* <span className="nav__link--text" data-splitting>Paint JS</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg.png">
                                    <Link to="/script" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Momentum</span>
                                        {/* <span className="nav__link--text" data-splitting>Momentum</span> */}
                                    </Link>
                                </li>
                            </ul>
                            <ul className="menu" id="tab3">
                                <li data-image="img/bg.png">
                                    <Link to="/ani" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Cube</span>
                                        {/* <span className="nav__link--text" data-splitting>Cube</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg.png">
                                    <Link to="/ani" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Wave</span>
                                        {/* <span className="nav__link--text" data-splitting>Wave</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg.png">
                                    <Link to="/ani" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Tail</span>
                                        {/* <span className="nav__link--text" data-splitting>Tail</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg.png">
                                    <Link to="/ani" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>3D Card</span>
                                        {/* <span className="nav__link--text" data-splitting>3D Card</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg.png">
                                    <Link to="/ani" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Loading</span>
                                        {/* <span className="nav__link--text" data-splitting>Loading</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg.png">
                                    <Link to="/ani" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>Bar</span>
                                        {/* <span className="nav__link--text" data-splitting>Bar</span> */}
                                    </Link>
                                </li>
                                <li data-image="img/bg.png">
                                    <Link to="/ani" className="nav__link page__click">
                                        <span className="nav__link--text" data-splitting>SVG</span>
                                        {/* <span className="nav__link--text" data-splitting>SVG</span> */}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="bg"></div>
                    </div>
                </section>
                <div className="page">
                    <h1 className="ir_su">footer</h1>
                    <div className="f_top">
                        <div className="btn">
                            <nav>
                                <Link to="/" className="nav__link page__click">
                                    <span className="nav__link--text" data-splitting>Home</span>
                                    <span className="nav__link--text" data-splitting>Home</span>
                                </Link>
                                <Link to="/about" className="nav__link page__click">
                                    <span className="nav__link--text" data-splitting>About</span>
                                    <span className="nav__link--text" data-splitting>About</span>
                                </Link>
                            </nav>
                            <div className="line"></div>
                        </div>
                        <div className="arrow prev">
                            <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 120 180" xmlSpace="preserve">
                            <line className="st0" x1="61" y1="17" x2="61" y2="165"/>
                            <path className="st1" d="M15.47,117.52c0,0,45.53,0,45.53,47.48"/>
                            <path className="st1" d="M106.53,117.52c0,0-45.53,0-45.53,47.48"/>
                            </svg>
                        </div>
                        <div className="arrow next">
                            <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 120 180" xmlSpace="preserve">
                            <line className="st0" x1="61" y1="17" x2="61" y2="165"/>
                            <path className="st1" d="M15.47,117.52c0,0,45.53,0,45.53,47.48"/>
                            <path className="st1" d="M106.53,117.52c0,0-45.53,0-45.53,47.48"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </Contents>
            <Footer/>
        </div>
    )
}
export default Projects;