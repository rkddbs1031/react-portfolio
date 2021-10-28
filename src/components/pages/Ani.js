import React from "react";
import Header from "../include/Header"
import Contents from "../include/Contents"
import Footer from "../include/Footer"
import { Link } from "react-router-dom";


// back text
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
    {span: "Animation"}
]

function Wave(){
    return(
        <div className="row">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    )
}

function Ani(){
    return(
        <div>
            <Header/>
            <Contents>
                <section id="section1">
                    <div className="sec1 ani">
                        <h1 className="ir_su">애니메이션 부분</h1>
                        {
                            aniInfo.map((item)=>(
                                <Anispan item={item.span} key={item.span}/>
                            ))
                        }
                        <div className="title-wrap">
                            <div className="title">
                                <em><span>O</span><span>n</span><span>e</span><span>-</span><span>o</span><span>f</span><span>-</span><span>t</span><span>h</span><span>e</span><span>-</span><span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span></em><br/>
                                <strong><span>i</span><span>s</span> <span>D</span><span>y</span><span>n</span><span>a</span><span>m</span><span>i</span><span>c</span> <span>A</span><span>n</span><span>i</span><span>m</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span></strong>  
                            </div>
                            <div className="desc">
                                <div className="scroll">Scroll down <span></span></div>
                                <p>Transform과 KEYFRAME, SVG를 이용하여 만든 애니메이션 작업물입니다. 더욱더 역동적이고 재밌는 요소가 담긴 애니메이션을 만들어내고 싶습니다!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //section1 */}
                <section id="section2_ani">
                    <div className="sec2 ani">
                        <h1 className="ir_su">애니메이션</h1>
                        <div className="ani ani1">
                            <p className="num">01</p>
                            <h2>CUBE</h2>
                            <div className="box">
                                <div className="cube">
                                    <div></div> 
                                    <div></div>    
                                    <div></div>    
                                    <div></div>   
                                    <div></div>  
                                    <div></div>    
                                </div>
                            </div>
                            <p className="desc">
                                → 3D CUBE 애니메이션 입니다. cube안에 6개의 div를 넣고 perspective와 z축 활용으로 3D 도형을 연출했으며 여기에 keyframes를 이용해 스스로 회전하고 크기 변화를 갖도록 하였습니다.     
                            </p>
                        </div>
                        {/* ani1 */}
                        <div className="ani ani2">
                            <p className="num">02</p>
                            <h2>WAVE</h2>
                            <div className="box">
                                <div className="circles">
                                    <Wave />
                                    <Wave />
                                    <Wave />
                                    <Wave />
                                    <Wave />
                                    <Wave />
                                    <Wave />
                                    <Wave />
                                    <Wave />
                                    <Wave />
                                </div>
                            </div>
                            <p className="desc">
                                → Wave 애니메이션입니다. row라는 div 박스 안에 10개의 circle이라는 div를 만든 뒤 이 row를 10개 더 만들어 10x10의 배열이 될 수 있도록 정렬시켜줍니다. transform의 rotate각도와 scale크기를 조절하여 spin효과를 주고 circle에 animation-delay를 주어 물결 효과를 주었습니다.
                            </p>
                        </div>
                        {/* ani2 */}
                        <div className="ani ani3">
                            <p className="num">03</p>
                            <h2>TAIL</h2>
                            <div className="box">
                                <div className="circle">
                                    <div></div>
                                </div>
                                <div className="circle">
                                    <div></div>
                                </div>
                                <div className="circle">
                                <div></div>
                                </div>
                                <div className="circle">
                                    <div></div>
                                </div>
                                <div className="circle">
                                    <div></div>
                                </div>
                            </div>
                            <p className="desc">
                                → Tail효과를 주는 애니메이션입니다. 5개의 div를 만든 뒤 translateY의 변화를 주어 y축으로 움직이게 만들었으며 각 div에 animation-delay를 활용하여 따라다니는 효과를 주었습니다. 또한, div를 감싸고 있는 circle에 translateX의 변화를 주어 X축으로 움직이는 애니메이션을 추가하여 좌우로 움직이게 효과를 주었습니다.
                            </p>
                        </div>
                        {/* ani3 */}
                        <div className="ani ani4">
                            <p className="num">04</p>
                            <h2>3D CARD</h2>
                            <div className="box">
                                <div className="container">
                                    <div className="app-ui">
                                        <div className="img"></div>
                                        <div className="img"></div>
                                        <div className="img"></div>
                                        <div className="img"></div>
                                    </div>
                                </div>
                            </div>
                            <p className="desc">
                                → 3D CARD 애니메이션입니다. 4개의 div를 만들어 position absolute를 이용해 같은 위치에 배치를 합니다. 그리고 transform을 이용해 모양을 변형한 뒤 키프레임을 이용해 각 translateY의 값을 다르게 주어 효과를 주었습니다. 마우스 오버시 효과를 주는 등에 응용할 수 있습니다.
                            </p>
                        </div>
                        {/* ani4 */}
                        <div className="ani ani5">
                            <p className="num">05</p>
                            <h2>LOADING</h2>
                            <div className="box">
                                <div className="container">
                                    <div className="color">
                                    <div className="red"></div>
                                    </div>
                                    <div className="color">
                                    <div className="orange"></div>
                                    </div>
                                    <div className="color">
                                    <div className="yellow"></div>
                                    </div>
                                    <div className="color">
                                    <div className="green"></div>
                                    </div>
                                    <div className="color">
                                    <div className="blue"></div>
                                    </div>
                                    <div className="color">
                                    <div className="purple"></div>
                                    </div>
                                </div>
                            </div>
                            <p className="desc">
                                → Loading 애니메이션입니다. 각 div의 width와 float을 조정하여 키프레임을 통해 애니메이션을 만들었으며 각 animation-delay를 주어 차례대로 나타났다가 없어지는 효과를 주었습니다.
                            </p>
                        </div>
                        {/* ani5 */}
                        <div className="ani ani6">
                            <p className="num">06</p>
                            <h2>BAR</h2>
                            <div className="box">
                                <div className="bar"></div>
                            </div>
                            <p className="desc">
                                → Bar 애니메이션입니다. line의 height 크기를 다르게 주어 키프레임을 사용해 무한 반복의 rotate 애니메이션 효과를 주었습니다.
                            </p>
                        </div>
                        {/* ani6 */}
                        <div className="ani ani7">
                            <p className="num">07</p>
                            <h2>SVG TEXT</h2>
                            <div className="box">
                                <svg id="logo" width="412" height="114" viewBox="0 0 412 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M89.7006 7.79066L91.6143 4.13198H87.4853H72.9413H71.3785L70.6939 5.53693L48.1733 51.7565L25.6527 5.53693L24.9682 4.13198H23.4053H8.86133H4.72397L6.64815 7.79467L39.1933 69.7447V107V109.5H41.6933H54.7973H57.2973V107V69.7423L89.7006 7.79066ZM120.077 103.695L120.087 103.701L120.097 103.707C128.173 108.249 137.095 110.508 146.811 110.508C156.618 110.508 165.589 108.252 173.669 103.707L173.679 103.701L173.689 103.695C181.76 99.0546 188.127 92.6349 192.761 84.4746C197.413 76.2834 199.711 67.0179 199.711 56.744C199.711 46.47 197.413 37.2045 192.761 29.0134C188.126 20.8522 181.757 14.4771 173.68 9.93123C165.599 5.2873 156.624 2.97998 146.811 2.97998C137.089 2.97998 128.163 5.28944 120.087 9.93079C112.007 14.4784 105.593 20.9012 100.866 29.1488L100.861 29.1574C96.2115 37.3449 93.9111 46.5614 93.9111 56.744C93.9111 66.9269 96.2116 76.1862 100.855 84.4631L100.864 84.479L100.873 84.4947C105.601 92.6441 112.011 99.0573 120.077 103.695ZM164.427 89.5699L164.419 89.5745L164.411 89.5792C159.259 92.5994 153.414 94.132 146.811 94.132C140.212 94.132 134.314 92.6009 129.059 89.5745C123.92 86.5596 119.821 82.257 116.762 76.594C113.816 70.9625 112.303 64.3692 112.303 56.744C112.303 49.013 113.819 42.4261 116.758 36.9017C119.819 31.232 123.922 26.9252 129.067 23.9087C134.214 20.8917 140.105 19.356 146.811 19.356C153.517 19.356 159.408 20.8917 164.555 23.9087C169.695 26.9221 173.745 31.2216 176.709 36.88L176.72 36.9011L176.731 36.9221C179.758 42.4421 181.319 49.0212 181.319 56.744C181.319 64.3639 179.761 70.9518 176.723 76.5807L176.716 76.5943L176.709 76.608C173.75 82.2553 169.661 86.5536 164.427 89.5699ZM214.058 84.4631L214.067 84.479L214.076 84.4947C218.805 92.6441 225.214 99.0573 233.28 103.695L233.29 103.701L233.301 103.707C241.376 108.249 250.298 110.508 260.014 110.508C269.822 110.508 278.792 108.252 286.872 103.707L286.882 103.701L286.892 103.695C294.963 99.0546 301.33 92.6349 305.964 84.4746C310.616 76.2834 312.914 67.0179 312.914 56.744C312.914 46.47 310.616 37.2045 305.964 29.0134C301.329 20.8522 294.96 14.4771 286.883 9.93123C278.803 5.2873 269.828 2.97998 260.014 2.97998C250.292 2.97998 241.366 5.28958 233.29 9.93121C225.21 14.4788 218.796 20.9014 214.069 29.1488L214.064 29.1574C209.415 37.3449 207.114 46.5614 207.114 56.744C207.114 66.9269 209.415 76.1862 214.058 84.4631ZM277.63 89.5699L277.622 89.5745L277.614 89.5792C272.462 92.5994 266.617 94.132 260.014 94.132C253.415 94.132 247.517 92.601 242.262 89.5745C237.123 86.5597 233.025 82.2571 229.966 76.5945C227.019 70.9628 225.506 64.3694 225.506 56.744C225.506 49.013 227.023 42.4261 229.961 36.9017C233.022 31.232 237.125 26.9252 242.27 23.9087C247.417 20.8917 253.309 19.356 260.014 19.356C266.72 19.356 272.611 20.8917 277.758 23.9087C282.898 26.9221 286.948 31.2216 289.912 36.88L289.923 36.9011L289.934 36.9221C292.961 42.4421 294.522 49.0212 294.522 56.744C294.522 64.3639 292.964 70.9518 289.926 76.5807L289.919 76.5943L289.912 76.608C286.953 82.2553 282.864 86.5536 277.63 89.5699ZM406.625 109.5H409.125V107V6.48798V3.98798H406.625H393.521H391.021V6.48798V77.9444L342.903 5.10993L342.162 3.98798H340.817H327.713H325.213V6.48798V107V109.5H327.713H340.817H343.317V107V35.4121L391.434 108.376L392.175 109.5H393.521H406.625Z" stroke="white" strokeWidth="3"/>
                                </svg>
                            </div>
                            <p className="desc">
                                → CSS와 SVG를 이용하여 만든 애니메이션입니다. stroke-dasharray는 path를 점선으로 만들어주는데 stroke-dashoffset로 시작간격을 주어 텍스트가 그려지도록 애니메이션을 주었으며, fill을 이용해서 채워지도록 하였습니다.
                            </p>
                        </div>
                        {/* ani7 */}
                    </div>
                </section>
                {/* section2 */}
                <div className="page">
                    <h1 className="ir_su">footer</h1>
                    <div className="f_top">
                        <div className="btn">
                            <nav>
                                <Link to="/script" className="nav__link page__click">
                                    <span className="nav__link--text" data-splitting>Script</span>
                                    <span className="nav__link--text" data-splitting>Script</span>
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
export default Ani;