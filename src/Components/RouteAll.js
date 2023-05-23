import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavAll from './NavAll';
import QuestionnoOne from './QuestionnoOne/QuestionnoOne';
import { QuestionnoTwo } from './QuestionnoTwo/QuestionnoTwo';
import QuestionnoThree from './QuestionnoThree/QuestionnoThree';
import QuestionnoFour from './QuestionnoFour/QuestionnoFour';
import QuestionnoFive from './QuestionnoFive/QuestionnoFive';
// import QuestionnoSix from './QuestionnoSix/QuestionnoSix';
import QuestionnoSeven from './QuestionnoSeven/QuestionnoSeven';
import QuestionnoEight from './QuestionnoEight/QuestionnoEight';
// import QuestionnoNine from './QuestionnoNine/QuestionnoNine';
import QuestionnoTen from './QuestionnoTen/QuestionnoTen';

const RouteAll = () => {
  return (
    <div>
        <Router>
            <NavAll />
            <Routes>
                <Route path="/" element={<QuestionnoOne />} />
                <Route path="/QuestionnoTwo" element={<QuestionnoTwo />} />
                <Route path="/QuestionnoThree" element={<QuestionnoThree />} />
                <Route path="/QuestionnoFour" element={<QuestionnoFour />} />
                <Route path="/QuestionnoFive" element={<QuestionnoFive />} />
                {/* <Route path="/QuestionnoSix" element={<QuestionnoSix />} /> */}
                <Route path="/QuestionnoSeven" element={<QuestionnoSeven />} />
                <Route path="/QuestionnoEight" element={<QuestionnoEight />} />
                {/* <Route path="/QuestionnoNine" element={<QuestionnoNine />} /> */}
                <Route path="/QuestionnoTen" element={<QuestionnoTen />} />
            </Routes>
        </Router>
    </div>
  )
}

export default RouteAll