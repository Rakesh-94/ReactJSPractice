import React from "react";
import { Link } from "react-router-dom";

const NavAll = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active"  to="/">
                  QuestionnoOne
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active"  to="/QuestionnoTwo">
                  QuestionnoTwo
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active"  to="/QuestionnoThree">
                  QuestionnoThree
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active"  to="/QuestionnoFour">
                  QuestionnoFour
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active"  to="/QuestionnoFive">
                  QuestionnoFive
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link active"  to="/QuestionnSix">
                  QuestionnSix
                </Link>
              </li> */}
              {/* <li class="nav-item">
                <Link class="nav-link active"  to="/QuestionnoSeven">
                  QuestionnoSeven
                </Link>
              </li> */}
              <li class="nav-item">
                <Link class="nav-link active"  to="/QuestionnoEight">
                  QuestionnoEight
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link active"  to="/QuestionnoNine">
                  QuestionnoNine
                </Link>
              </li> */}
              <li class="nav-item">
                <Link class="nav-link active"  to="/QuestionnoTen">
                  QuestionnoTen
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavAll;
