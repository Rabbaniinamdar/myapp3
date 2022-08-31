import './App.css'
export default function App() {
  // const [menu, setMenu] = useState({
  //   display:"block"
  // })

  // const changeMode = () => {
  //   if (menu.display === "block") {
  //     setMenu({
  //       display:"none"
  //     })
  //   }
  //   else{
  //     setMenu({
  //       display:"block"
  //     })
  //   }

  // }
  // const [menu1, setMenu1] = useState({
  //   display:"block"
  // })
  // const changeMode1 = () => {
  //   if (menu1.display === "block") {
  //     setMenu1({
  //       display:"none"
  //     })
  //   }
  //   else{
  //     setMenu1({
  //       display:"block"
  //     })
  //   }

  // }
  return (<>
    <section className="header" id="header">
      <nav>
        <a href="#project10.html"
        ><img src="logo.png" alt=""
          /></a>
        <div className="nav-link">
          <li><p className="cr">&Cross;</p></li>
          <li><a href="/">HOME</a></li>
          <li><a href="/">ABOUT</a></li>
          <li><a href="/">COURSE</a></li>
          <li><a href="/">BLOG</a></li>
          <li><a href="/">CONTACT</a></li>
        </div>
        <div className="menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <div className="text-box">
        <h1 className="main-hd">World's Biggest University</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          dicta. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing <br />
          Id, quis. Lorem ipsum dolor sit amet.
        </p>
        <a href="/" className="hero-btn">Visit Us To Know More</a>
      </div>
    </section>

    <section className="course" id="course">
      <h1>Courses We Offer</h1>
      <p className="c-p">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <div className="row">
        <div className="course-col">
          <h3>Intermediate</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            facilis quas possimus exercitationem distinctio officia maiores
            autem enim repellendus cumque rem dolore atque sit repudiandae vel
            harum voluptatem obcaecati sint est laborum ut officiis
          </p>
        </div>
        <div className="course-col">
          <h3>Degree</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            facilis quas possimus exercitationem distinctio officia maiores
            autem enim repellendus cumque rem dolore atque sit repudiandae vel
            harum voluptatem obcaecati sint est laborum ut officiis
          </p>
        </div>
        <div className="course-col">
          <h3>Post Graduation</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            facilis quas possimus exercitationem distinctio officia maiores
            autem enim repellendus cumque rem dolore atque sit repudiandae vel
            harum voluptatem obcaecati sint est laborum ut officiis
          </p>
        </div>
      </div>
    </section>


    <section className="compus">
      <h1>Our Global Campus</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        repellendus dolorem recusandae
      </p>
      <div className="row">
        <div className="com-col">
          <img src="london.png" alt="" />
          <div className="layer">
            <h3>LONDON</h3>
          </div>
        </div>
        <div className="com-col">
          <img src="newyork.png" alt="" />
          <div className="layer">
            <h3>NEW YORK</h3>
          </div>
        </div>
        <div className="com-col">
          <img src="washington.png" alt="/" />
          <div className="layer">
            <h3>WASHONGTON</h3>
          </div>
        </div>
      </div>
    </section>

    <section className="faciliti">
      <h1>Our Facilities</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        officiis ipsa nesciunt obcaecati, quae numquam ipsam soluta
      </p>
      <div className="row row2">
        <div className="facili-col">
          <img src="library.png" alt="" />
          <div className="layer-1">
            <h3>World className Library</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
            voluptatem perspiciatis? Deserunt repudiandae.
          </p>
        </div>
        <div className="facili-col">
          <img src="basketball.png" alt="" />
          <div className="layer-1">
            <h3>Largest Play Ground</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
            voluptatem perspiciatis? Deserunt repudiandae.
          </p>
        </div>
        <div className="facili-col">
          <img src="cafeteria.png" alt="" />
          <div className="layer-1">
            <h3>Tasty and Healthy Food</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
            voluptatem perspiciatis? Deserunt repudiandae.
          </p>
        </div>
      </div>
    </section>

    <section className="stu-s">
      <h1>What Our Student Says</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vel?</p>
      <div className="row2">
        <div className="u-feed">
          <img src="user1.jpg" alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita sint commodi sequi labore, minus sapiente libero aut id
              laudantium corporis, itaque, eius hic deleniti porro consequatur
              aliquid obcaecati. Porro ab iure aliquid quia laborum, fugiat
            </p>
            <h3 className="h3">-Christin Berkly</h3>
          </div>
        </div>
        <div className="u-feed">
          <img src="user2.jpg" alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita sint commodi sequi labore, minus sapiente libero aut id
              laudantium corporis, itaque, eius hic deleniti porro consequatur
              aliquid obcaecati. Porro ab iure aliquid quia laborum, fugiat
            </p>
            <h3 className="h3">-Devid Bond</h3>
          </div>
        </div>
      </div>
    </section>
    <section className="con">
      <div className="bac-img">
        <h1>Enroll for Our Various Online Courses AnyWhere From The World</h1>
        <a href="/">CONTACT US</a>
      </div>
    </section>
    <section className="abt">
      <h2>About Us</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad
        eaque voluptas sapiente magni nisi pariatur, voluptatibus culpa natus
        veritatis.
      </p>
      <div className="icons">
        <i className=" "></i>
      </div>
    </section>

  </>
  )
}
