import React from "react";
// import Work from "./components/Work.css";

import "../Style/Work.css";
import burger from "../../src/pics/burger.png";
import ice1 from "../../src/pics/ice1.png";
import ice4 from "../../src/pics/ice4.svg";



const Contact = () => {
  return (
    <>
{/* for -top navbar============= */}

<nav>
        <div class="img">
<img src={ice4} alt=""/>
        </div>
        <div class="search">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Search"/>
        </div>
        <div class="icon">
            <i class="bi bi-bag"></i>
            <i class="bi bi-person"></i> 
            <i class="bi bi-list"></i>
        </div>
    </nav>
{/* for -top navbar over ============= */}










      {/* =======for left navbar ========= */}
      <div className="col-lg-2 navbar-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-arrow-left-circle arrow"
          viewBox="0 0 16 16"
          onClick={{}}
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>

        {/* <h1>dsgs</h1> */}
        <div className="line-navbar" />
      </div>

      {/*========= middle portion of content ========== */}
      <div className="col-lg-8 middle-content">
        <div className="heading">
          {/* ====== */}

          <div className="heading-recipes">
            <hr className="line-upper" />
            <p>Recipes</p>

            <hr className="line-down" />
          </div>
        </div>
        {/* ==== */}

        {/* burger-menu====== */}

        {/* burger menu over====== */}
        <div className="  front-page">
          <div className=" left-side-content">
            <div className="create">Created by : Jhan</div>

            <h1>Beef Burger and kebabs</h1>

            <p>
              In a small bowl, combine yogurt, lemon juice, garlic, remaining
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <div className="time-qunatity">
              <p>
                Serves : <span>3</span>
              </p>
              <p>
                Prep time : <span>45mins</span>
              </p>
            </div>
          </div>
          <div className=" right-side-image">
            {/* <img src="burger.png" alt="" /> */}
            <img src={burger} />
            <h2 className="keep-going" >keep going&nbsp;  &nbsp; ></h2>
          </div>

         
        </div>

        {/* <div className="line-downn" /> */}

        <div className="method-details">
          {/* <div className="preparation-heading">
            <p>PREPARATION</p>
            <p>INGREDIENTS</p>
          </div> */}

          {/* <div className="line-downnn" /> */}

{/* ======paste=== */}
<section className="container">
          <div className="headingpre">
            <div id="left-heading" >
              <p>
               PREPARATION
              </p>
            </div>
            <div id="right-heading">
              <p>
                INGRIEDENTS
              </p>
            </div>
          </div>
          <div className="presection">
            <div id="leftpart">
              <div className="content">
                <ul>
                  <li>Heat the olive oil in a frying pan, add the onion and cook for 5 minutes until softened and
                    starting to turn golden. Set aside.
                  </li>
                  <li>In a bowl, combine the beef mince with the herbs and the egg. Season, add the onions and mix
                    well. Using your hands, shape into 4 patties.
                  </li>
                  <li>Cook the burgers on a preheated barbecue or griddle for 5-6 minutes on each side. While the
                    second side is cooking, lay a slice of cheese on top to melt slightly (if using).</li>
                  <li>Lay burgers on an oiled barbecue grill over a solid bed of hot coals or high heat on a gas
                    grill
                    (you can hold your hand at grill level only 2 to 3 seconds); close lid on gas grill. Cook
                    burgers, turning once, until browned on both sides and no longer pink inside (cut to test),
                    7 to
                    8 minutes total. Remove from grill</li>
                  <li>Meanwhile, lightly toast the cut-sides of the buns on the barbecue. Fill with the lettuce,
                    burgers and tomato slices. Serve with ketchup, if you like. </li>
                  <li>Meanwhile, lightly toast the cut-sides of the buns on the barbecue. Fill with the lettuce,
                    burgers and tomato slices. Serve with ketchup, if you like.</li>
                </ul>
              </div>
            </div>
            <div id="rightpart">
              <div className="content">
                <ul>
                  <li>1 lb. Beyond Beef Cooking spray</li>
                  <li> 16 cherry tomatoes</li>
                  <li> 2 small zucchini, each cut into 8 (½-inch) slices</li>
                  <li> 1 tbsp olive oil</li>
                  <li>¾ tsp kosher salt, divided</li>
                  <li> ¾ tsp black pepper, divided</li>
                  <li>½ cup plain fat-free Greek yogurt</li>
                  <li> 1 tbsp olive oil</li>
                  <li>¾ tsp kosher salt, divided</li>
                  <li> ¾ tsp black pepper, divided</li>
                  <li>½ cup plain fat-free Greek yogurt</li>
                  <li> 2 small zucchini, each cut into 8 (½-inch) slices</li>
                  <li> 1 tbsp olive oil</li>
                  <li>¾ tsp kosher salt, divided</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

          {/* <div className="line-downnn" /> */}
          {/* <div className="line-dowe" /> */}

          {/* ================recipes=======carosuel==== */}



          <div className="carousel">
            <h2 className="recipes">look at more recipe</h2>

            {/* <div className="carosuel-cards">

            </div> */}
{/* =============cards============== */}
<div class="cards-wrapper">
  <div class="card">
    <img src={ice1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">FRESH PANCAKES</h5>
      
      
    </div>
  </div>
  <div class="card">
    <img src={ice1}  class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">ICE-CREAM</h5>
      
    </div>
  </div>
  <div class="card">
    <img src={ice1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">SALMON</h5>
      
    </div>
  </div>
 
</div>

<h2 className="keep-goingg" >keep Looking&nbsp;  &nbsp; ></h2>

<div className="line-downnn" />
{/* =========================== */}


<div className=" marquee-container d-none d-sm-block">
        <div className="marquee ">
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          <span className="marquee-name " >SIGN UP NOW!</span>
          
        </div>
      </div>







    


<div>

  


        
        <footer>
          <div className="stayup">
            <div className="footer-heading">
              <p>Stay up with XYZ</p>
            </div>
            <div className="footer-content">
              <p className="heading">Tales from Outer Space</p>
              <p className="para">Science, Technology and Culture.
                </p>
                <p className="para">
                No email marketing. No Newsletters.</p>
            </div>
          </div>
          <div className="workwithus">
            <div className="footer-heading">
              <p>Work with us</p>
            </div>
            <div className="footer-content">
              <ul>
                <li>
                  <p className="heading">kitchens</p>
                </li>
                <li>
                  <p className="heading">investors</p>
                </li>
                <li>
                  <p className="heading">careers</p>
                </li>
                <li>
                  <p className="heading">cold chain</p>
                </li>
                <li>
                  <p className="heading">sustainability</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="quicklink">
            <div className="footer-heading">
              <p>quick links</p>
            </div>
            <div className="footer-content">
              <ul>
                <li>
                  <p className="heading">gifts</p>
                </li>
                <li>
                  <p className="heading">shop</p>
                </li>
                <li>
                  <p className="heading">golden ticket</p>
                </li>
                <li>
                  <p className="heading">FAQ’s</p>
                </li>
                <li>
                  <p className="heading">Support</p>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="ending-footer">
          <div className="companyname">
            <p> <b> xyz </b></p>
          </div>
          <div className="logodiv">
            <a href>Whatsapp</a>
            <a href>linkedin</a>
            <a href>Whatsapp</a>
            {/* <a href> <i className="bi bi-linkedin" />Linkledin</a>
            <a href> <i className="bi bi-linkedin" />Linledin</a> */}
            {/* <a href /> <i className="bi bi-facebook" /> */}
          </div>
        </div>
      </div>
{/* =========================== */}


          </div>

        </div>
      </div>

      {/* ==========preparation====== */}

      {/* =========right navbar======== */}
      <div className="line-navbar-right" />
      <div className="col-lg-2 navbar-right">
        {/* <hr className='line-navbar-right' /> */}

        <ul className="navbar-items">
          <ol>Appetizer</ol>
          <hr />
          <ol>deserts</ol>
          <hr />
          <ol>combos</ol>
          <hr />
          <ol>seafood</ol>
          <hr />
          <ol>vegeterain</ol>
          <hr />
          <ol>meat</ol>

          
          <hr />
          <ol style={{ color: "#F4A73F" }}>viewAll </ol>

          
        </ul>
      </div>

      {/* ========= */}
    </>
  );
};

export default Contact;
