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
    {span: "Web Project"}
]

function ProjectInfo(props){
    return(
        <div className="project">
            <p className="num">{props.num}</p>
            <div className="left">
                <div className="line"></div>
                <p className="desc">{props.desc}</p>
            </div>
            <div className="right">
                <h2>{props.h2.text1}<br/>{props.h2.text2}</h2>
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

const projectInfo =[
    {
        num : "01",
        desc : "첫번째로 만든 저의 포트폴리오입니다.어떻게 하면 재미요소를 넣어 나라는 사람을 담을 수 있을 까? ”라는 고민을 많이 했습니다. 지루하지 않게 인터렉티브한 재미요소를 넣으려고 노력하였습니다. 제가 어떤 사람인지, 어떤 프로젝트와 어떤 기술, 어느정도의 능력치를 가지고 있는지 확인하실 수 있습니다.",
        h2 : {
            text1: "THE FIRS",
            text2: "PORTFOLIO",
        },
        url : "http://yoooon.dothome.co.kr/",
        btn :"view site",
        img :{
            src : "/img/port01.png",
            alt : "프로젝트1"
        }
    },
    {
        num : "02",
        desc : "두 번째로 만든 저의 포트폴리오입니다. html , REACT 두가지의 버전이 있습니다.",
        h2 : {
            text1: "REACT",
            text2: "WEBSITE",
        },
        url : "http://yoooon.dothome.co.kr/port_react",
        btn :"view site",
        img :{
            src : "/img/port02.png",
            alt : "프로젝트2"
        }
    },
    {
        num : "03",
        desc : "REACT를 이용하여 만든 웹사이트입니다. API를 이용하여 데이터를 나타낼 수 있으며 다양한 기능을 구현하였습니다.또한 계속적으로 업데이트 예정이 있습니다.",
        h2 : {
            text1: "REACT",
            text2: "WEBSITE",
        },
        url : "https://react-yoooon.web.app/",
        btn :"view site",
        img :{
            src : "/img/port03.png",
            alt : "프로젝트3"
        }
    },
    {
        num : "04",
        desc : "PHP를 이용하여 만든 사이트입니다. DB 생성 및 관리가 가능하며, 사이트는 로그인 및 회원가입, 댓글쓰기, 게시판, 검색 기능과 같은 기능을 구현하였습니다.",
        h2 : {
            text1: "PHP",
            text2: "RESPONSIVE",
        },
        url : "http://kxunii.dothome.co.kr/php8/pages/main.php",
        btn :"view site",
        img :{
            src : "/img/port04.png",
            alt : "프로젝트4"
        }
    },
    {
        num : "05",
        desc : "웹표준을 준수하여 만든 사이트입니다. skip 메뉴, IR효과 등을 통해 웹접근성을 높여 사용자가 이용에 불편이 없도록 고려하였습니다. 또한, slick.js를 이용하여 이미지 슬라이드를 구현하고 Lightgallery.js를 이용하여 lightbox 모달창을 구현하였습니다.",
        h2 : {
            text1: "WEB",
            text2: "STANDARD",
        },
        url : "http://yoooon.dothome.co.kr/website-work/01/",
        btn :"view site",
        img :{
            src : "/img/port05.png",
            alt : "프로젝트5"
        }
    },
    {
        num : "06",
        desc : "미디어 쿼리를 이용하여 디바이스 종류에 따라 유연하게 보여지는 반응형 웹 사이트입니다. 웹표준과 동일하게 Slick.js 플러그인을 이용하여 슬라이드를 구현하였으며, 탭, 해상도에 따른 이미지, 동영상 기능, 다양한 이펙트 효과와 마우스 오버효과를 추가적으로 진행하였습니다.",
        h2 : {
            text1: "WEB",
            text2: "RESPONSIVE",
        },
        url : "http://yoooon.dothome.co.kr/website-work/02/",
        btn :"view site",
        img :{
            src : "/img/port06.png",
            alt : "프로젝트6"
        }
    },
    {
        num : "07",
        desc : "메가박스 사이트를 리뉴얼하여 만든 반응형 사이트입니다. 다양한 기기의 해상도에 대응하기 위하여 해상도별 이미지를 작업하였습니다. Swiper.js 플러그인으로 상단 배너 이미지와 영화차트 슬라이드를 구현하였고 jQuery를 사용하여 공지사항과 영화차트의 탭메뉴, 헤더의 모바일 메뉴를 구현하였습니다.",
        h2 : {
            text1: "MEGABOX",
            text2: "",
        },
        url : "http://yoooon.dothome.co.kr/website-work/03/",
        btn :"view site",
        img :{
            src : "/img/port07.png",
            alt : "프로젝트7"
        }
    },
    {
        num : "08",
        desc : "JAJU 사이트를 리디자인 및 리뉴얼하였습니다. 미디어쿼리를 이용해 다양한 디바이스에 유연하게 보여지는 반응형 작업을 진행하였고, 각 섹션마다 스크립트로 애니메이션을 주어 화면에 보이게 하였습니다. main화면에 VIDEO autoplay기능을 넣어 구현하였고 text가 하나씩 나타날 수 있게 자바스크립트를 이용하여 구현하였습니다.",
        h2 : {
            text1: "JAJU",
            text2: "RENEWAL",
        },
        url : "http://yoooon.dothome.co.kr/website-work/04/",
        btn :"view site",
        img :{
            src : "/img/port08.png",
            alt : "프로젝트8"
        }
    }

]

function Project(){
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
                                <strong><span>i</span><span>s</span> <span>C</span><span>r</span><span>e</span><span>a</span><span>t</span><span>i</span><span>v</span><span>e</span> <span>W</span><span>e</span><span>b</span><span>s</span><span>i</span><span>t</span><span>e</span><span>s</span></strong>    
                            </div>
                            <div className="desc">
                                <div className="scroll">Scroll down <span></span></div>
                                <p>저의 웹사이트 작업물입니다. 직접 레이아웃을 잡고 포토샵작업을 하였으며 자바스크립트, 제이쿼리 , 플러그인을 사용하여 알맞은 기능 또한 구현하였습니다. 재밌게 봐주세요.
                                </p>
                            </div> 
                        </div>
                    </div>
                </section>
                {/* //section1 */}
                <section id="section2">
                    <div className="sec2">
                        <h1 className="ir_su">웹 프로젝트</h1>
                        {
                            projectInfo.map((item)=>(
                                <ProjectInfo num={item.num} desc={item.desc} h2={item.h2} url={item.url} btn={item.btn} img={item.img} key={item.num}/>
                            ))
                        }
                    </div>
                </section>
                {/* //contents */}
                <div className="page">
                    <h1 className="ir_su">footer</h1>
                    <div className="f_top">
                        <div className="btn">
                            <nav>
                                <Link to="/" className="nav__link page__click">
                                    <span className="nav__link--text" data-splitting>Home</span>
                                    <span className="nav__link--text" data-splitting>Home</span>
                                </Link>
                                <Link to="/script" className="nav__link page__click">
                                    <span className="nav__link--text" data-splitting>Script</span>
                                    <span className="nav__link--text" data-splitting>Script</span>
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



//text split
// let text = document.querySelector("#section1 em").innerText;
// let split = text.split("").join("</span><span aria-hidden='true'>");
//     split = "<span aria-hidden='true'>" + split + "</span>";
// document.querySelector("#section1 em").html(split).attr("aria-label", text);    

// let text2 = $("#section1 strong").text();
// let split2 = text2.split("").join("</span><span aria-hidden='true'>");
//     split2 = "<span aria-hidden='true'>" + split2 + "</span>";
// $("#section1 strong").html(split2).attr("aria-label", text2);   



export default Project;