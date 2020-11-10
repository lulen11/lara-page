import React, { useState } from 'react';
import Head from 'next/head'
import Carousel from '../../components/carousel';
import Layout from '../../components/layout'
import Title from '../../components/title'
import Paragraph from '../../components/paragraph'
// import PortfolioModal from '../../components/portfolioModal';
import styles from './portfolio.module.scss';

// const portfolioItems = {
//     bounds: {
//         image1: 'images/portfolio/bounds.jpg',
//         image2: 'images/portfolio/bounds2.jpg'
//     },
//     nachbarn: {
//         image1: 'images/portfolio/nachbarn.jpg'
    
//     }
// };

export default function Hello() {
    // const [showModal, setModal] = useState(false);
    // const toggleModal = () => setModal(!showModal);
    // const toggleModalBounds = () => setModal(!showModal);

//   render() { 
//     const portfolioItem = this.state.portfolioItem;
//     let button;
//     if (portfolioItem={nachbarn}) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

    return (
        <div>

        <Head>
            <title>Hello, I'm Lara</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon@2x.png" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,300;1,400&family=Source+Serif+Pro:wght@300;400&display=swap" rel="stylesheet" />

        </Head>

        <main>
            <Layout>
                <Title className={styles.portfolioIntro}>
                Hello! My name's Lara Salameh. 
                <br />
                I'm a frontend designer and I'm looking for new opportunities. 
                </Title>
                <Paragraph>
                Hey! I'm mid-build on this portfolio so I've adapted it a little to share with you here while I finish it off elsewhere. Please forgive the imperfections!
                </Paragraph>
                <Paragraph>
                
                For the past 10 years between marketing agencies, freelance, and a not-for-profit, I’ve worked in what I think is a pretty special middle-ground between design & development. 
                </Paragraph>
                <Paragraph>
                As a frontend designer, I spend my days collaborating with great teams to design user experiences and then bring those designs to life through frontend code. My specialities lay within UX design and frontend development, with lots of experience in web, app & product design, branding, seo and start-up consulting.
                </Paragraph>
                <Paragraph>
                I work remotely, based in Melbourne, Australia.
                </Paragraph>
                <Paragraph>Call <a href="tel:61424578459">+61 424 578 459</a>,&nbsp;&nbsp;or write to me at <a href="mailto:hello@larasalameh.com?subject=Hello Lara, let's talk">hello@larasalameh.com</a> anytime.</Paragraph>
            </Layout>
            {/* <PortfolioModal visible={showModal} toggleModalBounds={toggleModal}  >
                <img src="images/portfolio/bounds.jpg" alt="Preview of Bounds Logo"/>
            </PortfolioModal> */}
            {/* <PortfolioModal visible={showModal} toggleModal={toggleModal} /> */}

            <Carousel>

            <div className={styles.project}>
                    <div className={styles.imgWrap}>
                        <img src="images/portfolio/aime-preview2.jpg" alt="Preview of AIME"/>
                    </div>
                    <div className={styles.content}>
                        <h3>Frontend designer at AIME</h3>
                        <p>For the past 2 years I've worked full-time as a frontend designer with a great team at AIME. My role has been focused in frontend development though I've worked closely with our designer in a UX capacity too. Together with our international remote team, we've worked on a brand redesign, website redesigns and builds, campaign pages, a design system and a user portal for AIME mentors.</p>
                        <a href="https://v5.aimementoring.com/" target="_blank">Checkout the AIME website</a>
                        <a href="https://portal.aimementoring.com/" target="_blank">Or the AIME mentor portal</a>
                    </div>
                    <div className={`${styles.imgWrap} ${styles.projectExample}`}>
                        <img src="images/portfolio/aime-home.jpg" alt="AIME home"/>
                        <img src="images/portfolio/aime-intv-mockup.jpg" alt="AIME INTV"/>
                    </div>
                </div><div className={styles.project}>
                    <div className={styles.imgWrap}>
                        <img src="images/portfolio/bounds.jpg" alt="Preview of Bounds Logo"/>
                    </div>
                    <div className={styles.content}>
                        <h3>UX/UI + branding for Sydney startup</h3>
                        <p>This project is under wraps, so without giving too much away, here are some stills of the branding, and ux work I did for a new Sydney startup, Bounds.  </p>

                        {/* portfolioItems={bounds} */}
                        {/* <button onClick={toggleModal}  >
                            hey hey
                        </button> */}
                    </div>
                    <div className={`${styles.imgWrap} ${styles.projectExample}`}>
                        <img src="images/portfolio/boundsbrand2.jpg" alt="Bounds Brand"/>
                        <img src="images/portfolio/bounds2b.jpg" alt="Bounds Brand"/>
                        <img src="images/portfolio/bounds2.jpg" alt="Bounds Brand"/>
                        <img src="images/portfolio/boundsbrand1.jpg" alt="Bounds Brand"/>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.imgWrap}>
                        <img src="images/portfolio/nachbarn.png" alt="Preview of Nachbarn design"/>
                    </div>
                    <div className={styles.content}>
                        <h3>Designed UI for Berlin Hospitality Group</h3>
                        <p>Nachbarn, translating to Neighbours in English is a mobile restaurant opening in Berlin. Nachbarn contracted me to design their very first website, requesting a playful and abstract vibe.</p>
                        {/* portfolioItems={nachbarn} */}
                        {/* <button onClick={toggleModal} >
                        diff
                        </button> */}
                        {/* <a id="fancybox-nachbarn" href="javascript:;">View designs</a>  */}
                    </div>
                    <div className={`${styles.imgWrap} ${styles.projectExample}`}>
                        <img src="images/portfolio/1-Nachbarn---Home-Page.jpg" alt="Nachbarn Website"/>
                        <img src="images/portfolio/2-Nachbarn---Where-&-When.jpg" alt="Nachbarn Website"/>
                    </div>
                    
                </div>
                <div className={styles.project}>
                    <div className={styles.imgWrap}>
                        <img src="images/portfolio/pears.png" alt="Screenshot of Pears portal"/>
                    </div>
                    <div className={styles.content}>
                        <h3>Imagined, designed and built Pears</h3>
                        <p>I created Pears as a passion-project through Thinkdo at Orange Digital. I wanted an online community for young UXers to encourage self-directed learning as a group. I completely built the front-end of this project and a back-end developer helped turn it into a functioning live product with over 100 active users. I'm currently in the process of trying to restore this project.</p>
                    </div>
                    <div className={`${styles.imgWrap} ${styles.projectExample}`}>
                        <img src="images/portfolio/pearsFacebook-Ad-Pears.jpg" alt="Pears Website"/>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.imgWrap}>
                        <img src="images/portfolio/tinysite.png" alt="Redesigned Tiny Website"/>
                    </div>
                    <div className={styles.content}>
                        <h3>Redesigned Melbourne agency website and brand</h3>
                        <p>As the newest company in Customer Experience in Melbourne Tiny contacted me take on branding as well as UX/UI. The website design was nominated for an Awwward. The live site design has slightly changed since my work - original designs can be seen below.</p>
                    </div>
                    <div className={`${styles.imgWrap} ${styles.projectExample}`}>
                        <img src="images/portfolio/tiny2-Home-Contact-shelf-open@2x.jpg" alt="Tiny Website"/>
                        <img src="images/portfolio/tiny1-Home@2x.jpg" alt="Tiny Website"/>
                        <br />
                        <img src="images/portfolio/tiny5-About---spotify-shelf-open@2x.jpg" alt="Tiny Website"/>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.imgWrap}>
                        <img src="images/portfolio/buchanan2.png" alt="Rebranded  Melbourne law firm"/>
                    </div>
                    <div className={styles.content}>
                        <h3>Rebranded  Melbourne law firm</h3>
                        <p>Working alongside Melbourne studio, Tiny CX, I was contracted to design a new brand for Buchanan Law. Wanting something that stood out amongst competition, Buchanan's brand is simple, modern and versatile.</p>
                    </div>
                    <div className={`${styles.imgWrap} ${styles.projectExample}`}>
                        <img src="images/portfolio/buchananbrand.jpg" alt="Buchanan"/>
                        <img src="images/portfolio/buchananlogo.jpg" alt="Buchanan"/>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.imgWrap}>
                        <img src="images/portfolio/dailycrow.png" alt="Hold down to record in 10 secs or less"/>
                    </div>
                    <div className={styles.content}>
                        <h3>Co-started Daily Crow</h3>
                        <p>A venture from my innovation team at ThinkDo, Daily Crow is an app that allows anyone to deliver/listen to the news in 10 seconds or less. Wanting to tap into a targeted testing audience, we adapted the application to appeal to Brisbane university students and promptly created an MVP. To get the product on the market as soon as possible, I designed the app structure and built a web-modal application, disguised in an app.</p>
                    </div>
                    <div className={`${styles.imgWrap} ${styles.projectExample}`}>
                        <img src="images/portfolio/dailycrowpreview2.PNG" alt="Daily Crow App"/>
                        <img src="images/portfolio/dailycrowpreview3.PNG" alt="Daily Crow App"/>
                        <img src="images/portfolio/dailycrowpreview4.PNG" alt="Daily Crow App"/>
                        <img src="images/portfolio/dailycrowpreview1.PNG" alt="Daily Crow App"/>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.imgWrap}>
                        <img src="images/portfolio/kicbak.png" alt="The dashboard interface for Kicbak"/>
                    </div>
                    <div className={styles.content}>
                        <h3>Co-started Kicbak</h3>
                        <p>I worked on the UX, prototyping and front-end development for an app dreamt up internally at OD called Kicbak. Kicbak is an app for mates to easily manage shared funds. If you pay for the pizza amongst 5 mates, chuck it in Kicbak and it instantly divvies out what everyone owes you. There’s no need for cash or pay back. </p>
                    </div>
                    <div className={`${styles.imgWrap} ${styles.projectExample}`}>
                        <img src="images/portfolio/kicbakpreview1.PNG" alt="Kicbak App"/>
                        <img src="images/portfolio/kicbakpreview2.PNG" alt="Kicbak App"/>
                        <img src="images/portfolio/kicbakpreview3.PNG" alt="Kicbak App"/>
                    </div>
                </div>
                {/* <div className={styles.project}>
                    <div className={styles.imgWrap}>
                        <img src="images/portfolio/wintergarden.png" alt="Wintergarden Gift Guide Wireframe"/>
                    </div>
                    <div className={styles.content}>
                        <h3>UX design for Wintergarden</h3>
                        <p>I worked closely with the marketing team at Wintergarden to develop an engaging new website that would best suit their target demographic. The lead UI designer and I collaborated often and well. Once finishing an interactive prototype, we passed the project onto an external development team and sadly lost a lot of control in the final product. I’m still proud of my UX input in the project. </p>

                        <a href="https://wgarden.com.au/styles/" target="_blank">The site</a>	
                    </div>
                </div> */}
                <div className={styles.project}>
                    <div className={styles.imgWrap}>
                        <img src="images/portfolio/internship.png" alt="Maddie thinking or dancing"/>
                    </div>
                    <div className={styles.content}>
                        <h3>Founded & managed the OD Internship Program</h3>
                        <p>When I worked at Orange Digital, I started a 12 week intern program which recruited local talent to run through a series of lectures, workshops, and work experience. As well as creating the program content and structure, I mentored and managed the intern cohort every year. I hope it gave young designers/developers some industry insight, experience, and support at the early stages of their careers. </p>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.imgWrap}>
                        <img src="images/portfolio/coffeepost.png" alt="Alana and myself packing some hay, moving some bags around"/>
                    </div>
                    <div className={styles.content}>
                        <h3>Co-founded, built &amp; ran a side biz, The Coffee Post</h3>
                        <p>TCP was a monthly subscription service, supporting a community of independent roasters &amp; delivering local speciality beans to Australia-wide customers. We won seed money to take this idea forward. I built an online shop, produced a regimented workflow for product &amp; packaging. Created &amp; managed social marketing. Then went onto build relationships with roasters &amp; subscribers alike. When I left Brisbane, I sold this business and unfortunately the new owners didn't continue with it. </p>
                    </div>
                </div>
                
                
            </Carousel>

        </main>
        </div>
    )
//   }
}
