import Head from 'next/head'
import Carousel from '../../components/carousel';
import Layout from '../../components/layout'
import Title from '../../components/title'
import Paragraph from '../../components/paragraph'
import styles from './about.module.scss';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export default function HelloJodie() {

  return (
    <Layout>

      <Head>
        <title>Hi Jodie</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon@2x.png" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <main>
<Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>
        {/* <Logo /> */}
        <Title>
          Hello Jodie, my name's Lara Salameh.
          <br />
          I'm a frontend designer and I'm looking for new opportunities. 
        </Title>
        <Paragraph>
          <span className={styles.callout}>Hey Jodie! I had been mid-build on this portfolio so I've adapted it a little just to share with you for now while I continue to get it ready for release in the background. </span>
        </Paragraph>
        <Paragraph>
          For the past 10 years, between marketing agencies, freelance, and a not-for-profit, I’ve worked in what I think is a pretty special middle-ground between design & development. 
        </Paragraph>
        <Paragraph>
          As a frontend designer, I spend my days collaborating with great teams to design user experiences and then bring those designs to life through code. While I’ve primarily worked on UX design and frontend development, I have experience in web, app & product design, branding, seo and start-up consulting.
        </Paragraph>
        <Paragraph>
          I work remotely, based in Melbourne, Australia.
        </Paragraph>
        <Paragraph>Call <a href="tel:61424578459">+61 424 578 459</a>,&nbsp;&nbsp;or write to me at <a href="mailto:hello@larasalameh.com?subject=Hello Lara, let's talk">hello@larasalameh.com</a> anytime.</Paragraph>



        <section class="columns">
            <div class="slider-controls">
                <span id="slider-prev"></span> 
                <span id="slider-next"></span>
            </div>
            <div class="row">
                




                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img class="dva-thumb" src="images/dva.png" alt="Snippet of Teachers Resources"/></div>
                        <div class="content">
                            <h3>I lead the UX and then some for DVA portal</h3>
                            <p>I worked closely with the education team at Department of Veteran Affairs, thoroughly exploring their values, goals &amp; vision for the portal. Working within limitations to sketch, prototype &amp; test various applications of the wireframe. This site has since been redesigned, though I then went on to analyse user behaviour, data &amp; ran focus groups. </p>
                        

                            <a href="http://anzacportal.dva.gov.au/" target="_blank">The site</a>
                            <a href="http://wireframes.orangedigital.com.au/dva/revision10/" target="_blank">The wireframe</a>	

                        </div>                   
                    </div>
                </div>

                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/bounds.jpg" alt="Preview of Bounds Logo"/></div>
                        <div class="content">
                            <h3>UX/UI and branding for new Sydney startup</h3>
                            <p>This project is still under wraps, so without giving too much away, I'm currently branding, completing the UX/UI and project managing a new Sydney startup. The client came to me with an idea and the request to help make it into a usable product. I've worked closely with him for the past several months in developing a well-thought out UX, followed by UI and we're now in development.  </p>
                        

                            <a id="fancybox-bounds" href="javascript:;">Inconspicuous UX</a> 
                        
                        </div>
                    </div>
                </div>







                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/nachbarn.png" alt="Preview of Nachbarn design"/></div>
                        <div class="content">
                            <h3>Designed UI for Berlin Hospitality Group</h3>
                            <p>Nachbarn, translating to Neighbours in English is a mobile restaurant opening in Berlin. Nachbarn contracted me to design their very first website, requesting a playful and abstract vibe.</p>
                        

                            <a id="fancybox-nachbarn" href="javascript:;">View designs</a> 
                        
                        </div>
                    </div>
                </div>



                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/odsite2.png" alt="Example of OD site redesign"/></div>
                        <div class="content">
                            <h3>UX + Lead a small team dedicated to redesigning the OD website</h3>
                            <p>One of the last projects I was proud to contribute to at OD was reimagining the company website. I ran the UX on this and worked closesly with the lead designer to come up with new concepts. Example mockups of the Career pages attached below.</p>
                        

                            <a id="fancybox-odsite" href="javascript:;">View designs</a> 
                        
                        </div>
                    </div>
                </div>



                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/pears.png" alt="Screenshot of Pears portal"/></div>
                        <div class="content">
                            <h3>Imagined, designed and built Pears</h3>
                            <p>I created Pears as a passion-project through Thinkdo at OD. I wanted an online community for young UXers to encourage self-directed learning as a group. I completely built the front-end of this project and a back-end developer helped turn it into a functioning live product with over 100 active users. I'm currently in the process of trying to restore this project.</p>
                        

                            <a id="fancybox-pears" href="javascript:;">View Pears</a> 
                        
                        </div>
                    </div>
                </div>

                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/tinysite.png" alt="Redesigned Tiny Website"/></div>
                        <div class="content">
                            <h3>Redesigned Melbourne agency website and brand</h3>
                            <p>As the newest company in Customer Experience in Melbourne Tiny contacted me take on branding as well as UX/UI. The website design was nominated for an Awwward. The live site design has slightly changed since my work - original designs can be seen below. </p>
                        

                            <a id="fancybox-tiny" href="javascript:;">View Tiny</a> 

                        
                        </div>
                    </div>
                </div>



                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/buchanan2.png" alt="Rebranded  Melbourne law firm"/></div>
                        <div class="content">
                            <h3>Rebranded  Melbourne law firm</h3>
                            <p>Working alongside Melbourne studio, Tiny CX, I was contracted to design a new brand for Buchanan Law. Wanting something that stood out amongst competition, Buchanan's brand is simple, modern and versatile.</p>
                        

                            <a id="fancybox-buchanan" href="javascript:;">View brand</a> 
                        
                        </div>
                    </div>
                </div>




                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/unrealestate.png" alt="Swiping right on a good looking house"/></div>
                        <div class="content">
                            <h3>Unreal UX for Unreal Estate</h3>
                            <p>Unreal Estate is venture idea thought up in OD's innovation space for a well-known Queensland auto club. I worked closely with the UI designer to draw user flows, storyboards, develop wireframes and prototype the concept. This idea was closely built around the Build Measure Learn methodology. Following this build, I went on to planning marketing. </p>

                            <a id="fancybox-unrealestate" href="javascript:;">View screenshots</a> 
                            <a class="wireframe" href="http://wireframes.orangedigital.com.au/unrealestate/UX_revision3/" target="_blank">The wireframe</a>

                        </div>
                        
                    </div>
                </div>


                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/dailycrow.png" alt="Hold down to record in 10 secs or less"/></div>
                        <div class="content">
                            <h3>I thought up and helped build Daily Crow</h3>
                            <p>Another venture from my innovation team, Daily Crow is an app that allows anyone to deliver/listen to the news in 10 seconds or less. Wanting to tap into a targeted testing audience, we adapted the application to appeal to university students and promptly created an MVP. To get the product on the market as soon as possible, I designed the app structure and built a web-modal application, disguised in an app.</p>
                        

                            <a id="fancybox-dailycrow" href="javascript:;">View screenshots</a> 
                        
                        </div>
                    </div>
                </div>

                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/kicbak.png" alt="The dashboard interface for Kicbak"/></div>
                        <div class="content">
                            <h3>Dreamt up UX for Kicbak</h3>
                            <p>I worked on the UX, prototyping and front-end development for an app dreamt up internally at OD called Kicbak. Kicbak is an app for mates to easily manage shared funds. If you pay for the pizza amongst 5 mates, chuck it in Kicbak and it instantly divvies out what everyone owes you. There’s no need for cash or pay back. </p>

                            <a id="fancybox-kicbak" href="javascript:;">View screenshots</a>
                            

                        </div>
                        
                    </div>
                </div>



                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/move.png" alt="Female user personas for MOVE website"/></div>
                        <div class="content">
                            <h3>Created user personas and did a lot of testing for MOVE</h3>
                            <p>Railways Credit Union,  underwent a large rebrand to MOVE. I lead the UX team in gathering data, focus groups,  user personas, running interviews with staff and members, &amp; building wireframes from concepts to developed prototypes. This UX process was highly involved as the company was rebranding a 48 year brand and identity. </p>
                            <a href="http://wireframes.orangedigital.com.au/move/revision18/" target="_blank">The wireframe</a>	




                        </div>
                        
                    </div>
                </div>
                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/wintergarden.png" alt="Wintergarden Gift Guide Wireframe"/></div>
                        <div class="content">
                            <h3>Designed UX for the new Wintergarden website</h3>
                            <p>I worked closely with the marketing team at Wintergarden to develop an engaging new website that would best suit their target demographic. The lead UI designer and I collaborated often and well. Once finishing an interactive prototype, we passed the project onto an external development team and sadly lost a lot of control in the final product. I’m still proud of my UX input in the project. </p>

                            <a href="http://wireframes.orangedigital.com.au/wintergarden/revision5/" target="_blank">The wireframe</a>	

                        </div>
                        
                    </div>
                </div>

                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/internship.png" alt="Maddie thinking or dancing"/></div>
                        <div class="content">
                            <h3>I co-founded and managed the OD Internship Program</h3>
                            <p>Five years ago, I approached one of OD's directors to start an intern program. We founded the program and every year since (sometimes twice) I recruited, lectured, ran workshops, hired/fired, mentored and hopefully gave young designers/developers some industry insight, experience, and support. </p>
                            <a href="http://internship.orangedigital.com.au/" target="_blank">The site</a>	
                        </div>
                        
                    </div>
                </div>

                
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/coffeepost.png" alt="Alana and myself packing some hay, moving some bags around"/></div>
                        <div class="content">
                            <h3>Co-founded, built &amp; ran a side biz, The Coffee Post</h3>
                            <p>TCP is a monthly subscription service, supporting a community of independent roasters &amp; delivering local speciality beans to Australia-wide customers. We won seed money to take this idea forward. I built an online shop, produced a regimented workflow for product &amp; packaging. Created &amp; managed social marketing. Then went onto build relationships with roasters &amp; subscribers alike. I've since sold this business. </p>


                            <a href="http://thecoffeepost.com.au/" target="_blank">The site</a>	
                            <a href="https://www.facebook.com/thecoffeepostau" target="_blank">FB</a>	
                            <a href="https://www.instagram.com/thecoffeepostau/" target="_blank">Insta</a>	

                        </div>
                        
                    </div>
                </div>

                            

                    
                <div class="col-sm-4 slide">
                    <div class="feature">
                        <div class="img-wrap"><img src="images/circlelead.png" alt="Lara sipping coffee like an idiot"/></div>
                        <div class="content">
                            <h3>I was our Circle Ambassador</h3>
                            <p>In this role, I lead a small team of 4-5 in a production circle. We worked together as a team as I monitored the progression and development of projects within the team. I lead discussions in our circle group and also acted as spokesperson between the other teams at Orange Digital. </p>
                        </div>
                        
                    </div>
                </div>



            </div>
        </section>
        
      </main>
    </Layout>
  )
}
