import React from "react";
import Header from "../include/Header"
import Contents from "../include/Contents"
import Footer from "../include/Footer"
import { Link } from "react-router-dom";

function Anispan(props){
    return (
        <div className="ani">   
            <span>{props.item} &nbsp;</span>
            <span>{props.item} &nbsp;</span>
            <span>{props.item} &nbsp;</span>
            <span>{props.item} &nbsp;</span>
        </div>
    )
}

const aniInfo = [
    {span: "JavaScript"}
]

function ScriptInfo(props){
    return(
        <div className="project">
            <p className="num">{props.num}</p>
            <div className="left">
                <div className="line"></div>
                <p className="desc">{props.desc}</p>
            </div>
            <div className="right">
                <h2>{props.h2}</h2>
                <div className="btn-wrap">
                    <a href={props.url} className="btn">{props.btn}</a>
                    <span className="line"></span>
                </div>
                <div className="imgwrap">
                    <img src={props.img.src} alt={props.img.alt} />
                </div>
            </div>
        </div>
    )
}

const scriptInfo =[
    {
        num : "01",
        desc : "스크롤 값에 따라 다양한 PARALLAX EFFECT를 주는 스크립트입니다.",
        h2 : "PARALLAX EFFECT",
        url : "http://yoooon.dothome.co.kr/port_react/js-work/parallaxEffect/01",
        btn :"view site",
        img :{
            src : "/img/script01.png",
            alt : "스크립트1"
        }
    },
    {
        num : "02",
        desc : "마우스 커서의 움직임에 따라 다양한 mouse effect를 주는 스크립트입니다.",
        h2 : "MOUSE EFFECT",
        url : "http://yoooon.dothome.co.kr/port_react/js-work/mouseEffect/01",
        btn :"view site",
        img :{
            src : "/img/script02.png",
            alt : "스크립트2"
        }
    },
    {
        num : "03",
        desc : "스크립트를 이용하여 보여주는 다양한 slide입니다.",
        h2 : "SLIDER EFFECT",
        url : "http://yoooon.dothome.co.kr/port_react/js-work/mouseEffect/01",
        btn :"view site",
        img :{
            src : "/img/script03.png",
            alt : "스크립트3"
        }
    },
    {
        num : "04",
        desc : "순수 100% Vanilla JavaScript로 만들었으며 키보드 입력으로 악기를 연주하는 작업물입니다.",
        h2 : "BAND SCRIPT",
        url : "http://yoooon.dothome.co.kr/port_react/js-work/band/index.html",
        btn :"view site",
        img :{
            src : "/img/script04.png",
            alt : "스크립트4"
        }
    },
    {
        num : "05",
        desc : "canvas와 javascript를 이용하여 만든 그림판입니다.",
        h2 : "PAINT JS",
        url : "http://yoooon.dothome.co.kr/port_react/js-work/mouseEffect/01",
        btn :"view site",
        img :{
            src : "/img/script05.png",
            alt : "스크립트5"
        }
    },
    {
        num : "06",
        desc : "javascript를 이용하여 chrome의 momentum앱을 clone하였습니다. TODO LIST, 랜덤 배경화면, 시계,날씨 정보를 알 수 있습니다",
        h2 : "MOMENTUM CLONE",
        url : "http://yoooon.dothome.co.kr/port_react/js-work/momentum/index.html",
        btn :"view site",
        img :{
            src : "/img/script06.png",
            alt : "스크립트6"
        }
    }

]


function Script(){
    return(
        <div>
            <Header/>
            <Contents>
                <section id="section1">
                    <div className="sec1">
                        <h1 className="ir_su">프로젝트 부분</h1>
                        {
                            aniInfo.map((item)=>(
                                <Anispan item={item.span} key={item.span}/>
                            ))
                        }
                        <div className="title-wrap">
                            <div className="title">
                                <em><span>O</span><span>n</span><span>e</span><span>-</span><span>o</span><span>f</span><span>-</span><span>t</span><span>h</span><span>e</span><span>-</span><span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span></em><br/>
                                <strong><span>i</span><span>s</span> <span>C</span><span>r</span><span>e</span><span>a</span><span>t</span><span>i</span><span>v</span><span>e</span> <span>J</span><span>a</span><span>v</span><span>a</span><span>S</span><span>c</span><span>r</span><span>i</span><span>p</span><span>t</span></strong>  
                            </div>
                            <div className="desc">
                                <div className="scroll">Scroll down <span></span></div>
                                <p>아직은 많이 서툴지만 열심히 만들어 봤습니다. 자바스크립트에 대해 더 열심히 공부해서 멋지고 완벽한 작업물들을 만들어내고 싶습니다!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //section1 */}
                <section id="section2">
                    <div className="sec2 script">
                        <h1 className="ir_su">웹 프로젝트</h1>
                        {
                            scriptInfo.map((item)=>(
                                <ScriptInfo num={item.num} desc={item.desc} h2={item.h2} url={item.url} btn={item.btn} img={item.img} key={item.num}/>
                            ))
                        }
                    </div>
                </section>
                <div className="page">
                    <h1 className="ir_su">footer</h1>
                    <div className="f_top">
                        <div className="btn">
                            <nav>
                                <Link to="/project" className="nav__link page__click">
                                    <span className="nav__link--text" data-splitting>Project</span>
                                    <span className="nav__link--text" data-splitting>Project</span>
                                </Link>
                                <Link to="/ani" className="nav__link page__click">
                                    <span className="nav__link--text" data-splitting>Animation</span>
                                    <span className="nav__link--text" data-splitting>Animation</span>
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
export default Script;