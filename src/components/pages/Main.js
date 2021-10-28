import React from "react";
import Header from "../include/Header"
import Contents from "../include/Contents"
import { Link } from "react-router-dom";


function Info(props){
    return(
        <em>{props.em}</em>
    )
}
const info =[
    {em:"Front-end Developer"},
    {em:"ⓒ Yoon’s Portfolio 2021"}
]

function Social(props){
    return(
        <li><a href={props.link}>{props.name}</a></li>
    )
}

const socialInfo = [
    {  
        link : "https://github.com/rkddbs1031",
        name : "Git"

    },
    {
        link : "https://codepen.io/rkddbs1031",
        name : "Codepen"
    },
    {
        link : "https://www.instagram.com/kxun_ii/?hl=ko",
        name : "Instagram"
    },
]


function Main(){
    return(
        <div>
            <Header/>
            <Contents>
                <section id="section1">
                    <div className="sec1 main">
                        <div className="left">
                            <div className="leftWrapper">
                                <Link to="/projects" id="project" className="page__click">
                                    <img src="img/project_icon.png" alt="" />
                                </Link>
                                <svg id="project-circle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                                    <defs>
                                        <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_top">
                                            <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
                                        </path>
                                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_bottom">
                                            <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="195 250 250" to="555 250 250" repeatCount="indefinite" />
                                        </path>
                                    </defs>
                                    <text dy="70" textLength="1220">
                                        <textPath xlinkHref="#textcircle_top">• Web Project • JavaScript •</textPath>
                                        <textPath xlinkHref="#textcircle_bottom">Web project • JavaScript</textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="arrow">
                                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7.5H22M22 7.5L17.5 0.5M22 7.5L17.5 15.5" stroke="#F1F1F1" strokeLinecap="round"/>
                                </svg>    
                            </div>
                        </div>
                        <div className="right">
                            <div className="rightWrapper">
                                <Link to="/about" id="about" className="page__click">
                                    <img src="img/about_icon.png" alt="나의 아이콘" />
                                </Link>
                                <svg id="about-circle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                                    <defs>
                                        <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_top">
                                            <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
                                        </path>
                                        <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_bottom">
                                            <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="195 250 250" to="555 250 250" repeatCount="indefinite" />
                                        </path>
                                    </defs>
                                    <text dy="70" textLength="1220">
                                        <textPath xlinkHref="#textcircle_top"> • HELLO I'M KANG YOON • IF YOU WANT</textPath>
                                    <textPath xlinkHref="#textcircle_bottom">TO KNOW ABOUT ME • CLICK THIS </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="arrow">
                                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 7.5H1M1 7.5L5.5 0.5M1 7.5L5.5 15.5" stroke="#F1F1F1" strokeLinecap="round"/>
                                </svg>    
                            </div>
                        </div>
                        <div className="main_bottom">
                            <span>REACT.</span>
                            <div className="info">
                                {
                                    info.map((em)=>(
                                    <Info em={em.em} key={em.em}/>
                                    ))
                                }
                            </div>
                            <div className="social">
                                <ul>
                                    { 
                                        socialInfo.map((item)=>(
                                        <Social link={item.link} name={item.name} key={item.name}/>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Contents>
        </div>
    )
}



// script
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

// const left = document.getElementById("project");
// const leftWrap = document.querySelector(".sec1 .leftWrapper");
// const right = document.getElementById("about");
// const rightWrap = document.querySelector(".sec1 .rightWrapper");


// if(window.innerWidth > 480){
//     left.addEventListener("mouseover",function(){
//         rightWrap.style.WebkitFilter = "blur(4px)";
//         rightWrap.style.transform = "scale(0.8)";
//         leftWrap.style.transform = "scale(1.1)";
//         right.style.WebkitFilter = "grayscale(1)";
//         document.querySelector(".sec1 .left").classList.add("active");
//         document.querySelector(".sec1 .right .arrow").style.opacity = "0"
//     })
//     left.addEventListener("mouseleave",function(){
//         rightWrap.style.WebkitFilter = "blur(0px)";
//         rightWrap.style.transform = "scale(1)";
//         leftWrap.style.transform = "scale(1)";
//         right.style.WebkitFilter = "grayscale(0)";
//         document.querySelector(".sec1 .left").classList.remove("active");
//         document.querySelector(".sec1 .right .arrow").style.opacity = "1"
//     })
//     right.addEventListener("mouseover",function(){
//         leftWrap.style.WebkitFilter = "blur(4px)";
//         leftWrap.style.transform = "scale(0.8)";
//         rightWrap.style.transform = "scale(1.1)";
//         left.style.WebkitFilter = "grayscale(1)";
//         document.querySelector(".sec1 .right").classList.add("active");
//         document.querySelector(".sec1 .left .arrow").style.opacity = "0"
//     })
//     right.addEventListener("mouseleave",function(){
//         leftWrap.style.WebkitFilter = "blur(0px)";
//         leftWrap.style.transform = "scale(1)";
//         rightWrap.style.transform = "scale(1)";
//         left.style.WebkitFilter = "grayscale(0)";
//         document.querySelector(".sec1 .right").classList.remove("active");
//         document.querySelector(".sec1 .left .arrow").style.opacity = "1"
//     })
// }else if(window.innerWidth <= 480){
//     left.addEventListener("mouseover",function(){
//         rightWrap.style.WebkitFilter = "blur(4px)";
//         right.style.WebkitFilter = "grayscale(1)";
//         document.querySelector(".sec1 .right .arrow").style.opacity = "0"
//     })
//     left.addEventListener("mouseleave",function(){
//         rightWrap.style.WebkitFilter = "blur(0px)";
//         right.style.WebkitFilter = "grayscale(0)";
//         document.querySelector(".sec1 .right .arrow").style.opacity = "1"
//     })
//     right.addEventListener("mouseover",function(){
//         leftWrap.style.WebkitFilter = "blur(4px)";
//         left.style.WebkitFilter = "grayscale(1)";
//         document.querySelector(".sec1 .left .arrow").style.opacity = "0"
//     })
//     right.addEventListener("mouseleave",function(){
//         leftWrap.style.WebkitFilter = "blur(0px)";
//         left.style.WebkitFilter = "grayscale(0)";
//         document.querySelector(".sec1 .left .arrow").style.opacity = "1"
//     })
// };

export default Main;