import React from "react";
// import Header from "../include/Header"
import Contents from "../include/Contents"
import Footer from "../include/Footer"
import { Link } from "react-router-dom";


//loading reveal effect
// window.onload = function () {
//     function start(callback) {
//         setTimeout(() => {
//         document.querySelector(".loader").classList.remove("loader--active");
//         }, 100);
//     };
//     start();

//     function pageClick() {
//         document.querySelectorAll(".page__click").forEach((elem) => {
//             elem.addEventListener("click", (e) => {
//                 e.preventDefault();
//                 const dataName = elem.getAttribute('href');
//                 document.querySelector(".loader").classList.add("loader--active");
//                 setTimeout(() => {
//                     window.location.href = dataName;
//                 }, 2000);
//             });
//         });
//     };
//     pageClick();
    
// };



//scroll
// window.addEventListener("scroll",function(){
    // let scroll = (window.scrollTop)*0.5;
    // gsap.to(".sec1 .o_span",{duration:0.4,  x:scroll, ease: "power3.out" })
    // gsap.to(".sec1 .t_span",{duration:0.4,  x:-scroll, ease: "power3.out" })
    // gsap.to(".sec1 .em",{duration:0.4,  x:scroll, ease: "power3.out" })
    // gsap.to(".sec1 .sub_text",{duration:0.4,  x:scroll, ease: "power3.out" })

    //section
    // let scrollTop = window.scrollTop;
    // for(let i = 1; i<=3; i++){
    //     if(scrollTop >= document.querySelector("#section"+i).offsetTop - window.innerHeight/3){
    //         document.querySelector("#section"+i).classList.add("show");
    //     }
    // }
    //section2 
    // if(scrollTop >= $("#section2 .desc_wrap").offset().top - $(window).height()/2){
    //     $(".sec2 .desc_wrap").addClass("active")
    // }
    // //section3 
    // if(scrollTop >= $("#section3 .keyword_wrap").offset().top - $(window).height()/1.5){
    //     $(".sec3 .keyword_wrap").addClass("active")
    // }

    //footer
    // if(scrollTop >= $("#footer").offset().top - $(window).height()){
    //     gsap.to(".footer .logo",{opacity:1, duration:0.6, y:0, ease: "power3.out"})
    //     gsap.to(".footer .info",{opacity:1, duration:0.6, y:0, ease: "power3.out"})
    //     gsap.to(".footer .right",{opacity:1 ,duration:0.6, y:0, ease: "power3.out"})
    // }
    
// })

//sec2 img filter effect
// $(".img_wrap").hover(function(){
//     $(this).css({"filter":"grayscale(0)"});
// },function(){
//     $(this).css({"filter":"grayscale(0.9)"})
// })

// //keywowrd img effect
// var myAnimation = new hoverEffect({
//     parent: document.querySelector('.keyword .library1'),
//     intensity: 0.2,
//     easing:Expo.easeOut,
//     image1: 'assets/img/profile2.jpg',
//     image2: 'assets/img/keyword_08.jpg',
//     displacementImage: 'https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/ramen.jpg'

// });



//footer nav
// Splitting();



function About(){
    return(
        <div>
            <header id="about_header">
                <h1>
                    <Link to="/" className="page__click">YOON.</Link>
                </h1>
                <div className="member">
                    <ul>
                        <li><Link to="board/board.html" className="">Board</Link></li>
                        <li><Link to="/login" className="page__click">Login</Link></li>
                        <li><Link to="/join" className="page__click">Join</Link></li>
                    </ul>
                </div>
            </header>
            <Contents>
                <section id="section1">
                    <div className="sec1 about">
                        <h1 className="ir_su">about me</h1>
                        <div className="main_text">
                            <span className="o_span">A STORY OF</span>
                            <span className="t_span">CREATIVE <em>FRONT-END</em></span>
                            <em className="em">DEVELOPER</em>
                            <div className="sub_text">
                                <span className="line"></span>
                                <span>about me</span>
                            </div>
                        </div>
                        <div className="about_img">
                            <img src="img/about2.jpg" alt="내 사진" />
                        </div>
                    </div> 
                </section>
                {/* //section1 */}
                <section id="section2_about">
                    <div className="sec2">
                        <h1>WHO AM I ?<br/></h1>
                        <div className="about_circle2">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                                <defs>
                                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_top">
                                        <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
                                    </path>
                                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_bottom">
                                        <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="195 250 250" to="555 250 250" repeatCount="indefinite" />
                                    </path>
                                </defs>
                                <text dy="70" textLength="1220">
                                    <textPath xlinkHref="#textcircle_top">Sweet ~ Coding</textPath>
                                <textPath xlinkHref="#textcircle_bottom">• aboue ~ me • </textPath>
                                </text>
                            </svg>
                        </div>
                        <div className="img_wrap">
                            <img src="img/keyword_02.png" alt="about me" />
                        </div>
                        <div className="text">
                            <h2>HELLO, I'M KANGYOON<span>FRONTEND DEVELOPER</span></h2>
                        </div>
                        <div className="desc_wrap">
                            <p className="desc desc1">
                                안녕하세요. 저는 신입 프론트엔드 개발자 이강윤 입니다. <br/>
                                <strong>“저는 시작한 일은 포기하지 않고 반드시 끝내는 성격을 가지고 있습니다.”</strong>
                            </p>
                            <p className="desc desc2">
                                미디어소프트웨어학과를 전공으로 졸업하고 뒤늦게 코딩에 흥미가 생겨 더 공부하고 싶은 마음에 수원의 국비지원 학원에서 웹퍼블리셔 과정을 수료하였습니다. 하지만, 학원 안내와 달리 원하는 수업과 공부를 하지 못하여 더 공부하며 멋진 포트폴리오를만들고 싶은 마음에 스터디와 강의를 참여하였으며 웹스 18기로 수료하였습니다. 
                            </p>
                            <div className="p_bt">
                                <p className="desc desc3">
                                    캔버스 같은 흰 화면이 코드를 통해 하나씩 채워지는 것을 직관적으로 확인할 수 있어 프론트엔드 라는 직업이 매력적으로 느껴졌고 원하는 것을 직접 이뤘을 때 너무나도 성취감이 있고 흥미롭게 다가왔습니다. 
                                </p>
                                <p className="desc desc4">
                                    아직은 서툴고 부족하기에 많이 배워야하고 더 많은 노력이 필요하다는 것을 알고 있습니다.  실패에 두려워하지 않고, 항상 노력하며 끊임없이 공부하고 센스있는 프론트엔드 개발자가 될 수 있도록 노력하겠습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //section2 */}
                <section id="section3">
                    <div className="sec3">
                        <h1>MY KEYWORD</h1>
                        <div className="keyword">
                            <div className="library1 library">
                                <img src="img/profile2.jpg" alt="내 사진" />
                            </div>
                            <div className="sub_text">
                                <p>WHO AM I?</p>
                                <span>I'M KANGYOON</span>
                            </div>
                            <div className="sub_text2">
                                <p>저를 소개할게요.</p>
                                <span>I'll tell you my keyword.</span>
                            </div>
                            <div className="keyword_wrap">
                                <div className="left">
                                    <h2>My Keyword <span>: I’LL TELL YOU ABOUT ME</span></h2>
                                </div>
                                <div className="right">
                                    <ul>
                                        <li  className="list1">
                                            <div className="title">
                                                <span>01</span>
                                                <p>Empathy and carefulness</p>
                                            </div>
                                            <p>
                                                상대방의 이야기를 들어주는 것을 좋아하고 진심을 다해 <strong>공감</strong>해주는 성격을 가졌으며  후회없는 선택과 삶을 살고싶기에 매순간 <strong>신중하고 열심히</strong> 사려고 노력하고 있습니다.
                                            </p>
                                        </li>
                                        <li className="list2">
                                            <div className="title">
                                                <span>02</span>
                                                <p>planned</p>
                                            </div>
                                            <p>
                                                하나를 시작하면 어떤 어려움이 있어도 <strong>최선을 다해</strong> 끝내는 성격을 가졌으며 <strong>계획</strong>을 세워 하루를 보내는 것이 마음이 편한 ENFJ입니다.
                                            </p>
                                        </li>
                                        <li className="list3">
                                            <div className="title">
                                                <span>03</span>
                                                <p>passionate</p>
                                            </div>
                                            <p>
                                                내성적인 것 같지만 알고보면 정말 활발하고 활동적인 것을 좋아하는 <strong>열정적인</strong> 성격을 가졌습니다.
                                                대학교다닐 때는 학생회 문체부를 맡았으며 춤추고 노래부르는 것을 즐기고 무대에 올라가는 것을 재미있어 했습니다.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                {/* //section3 */}
                <div className="page">
                    <h1 className="ir_su">footer</h1>
                    <div className="f_top">
                        <div className="btn">
                            <nav>
                                <Link to="/" className="nav__link page__click">
                                    <span className="nav__link--text" data-splitting>Home</span>
                                    <span className="nav__link--text" data-splitting>Home</span>
                                </Link>
                                <Link to="/contact" className="nav__link page__click">
                                    <span className="nav__link--text" data-splitting>Contact</span>
                                    <span className="nav__link--text" data-splitting>Contact</span>
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

export default About;