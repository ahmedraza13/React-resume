import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Hi() {
  return <div>
     <div className="container">
        <div className="header">
            <h1>
               AHMED RAZA
            </h1>
            <p> <b>Mobile</b>: 0314-2322336 </p>
            <p><b>Address</b>: Soldier Bazar, Karachi  </p>
            <p> <b>Email</b>: ahmedfaisalakhawala@gmail.com </p>
        </div>
        <div className="content">
            <h2>OBJECTIVE</h2>
            <p id='obj'>
                To secure a challenging position in a reputable organization to expand my learnings, knowledge, and
                skills. Secure a responsible career opportunity to fully utilize my training and skills, while
                making a significant contribution to the success of the company.
            </p>
            <h2>EDUCATION</h2>

            <ul>
                <li>Bachelors of Commerce (University Of Karachi) 
                    December,2020</li>
                <li>
                    Intermediate (Govt College of Commerce & Economics) JULY,2018
                </li>
                <li>
                    Matriculation(Rose Petal School) JULY,2016
                </li>
            </ul>
           <h2>WORK EXPERIENCE</h2>
           <div className='exp'>
            <h3>Data Entry Operator</h3>
            <h4 className='resp'>Job Responsibilities</h4>
            <ul className='expe'>
                <li>Prepare Bills and quotations</li>
                <li>Work on SQL Database</li>
                <li>Prepare source data for computer entry by compiling and sorting information</li>
            </ul>
            </div>

            <h2>SKILLS</h2>

            <ul>
                <li>MS Office(2016)</li>
                <li>Responsive Web Layout (HTML,CSS,JAVASCRIPT)</li>
                <li>Internet Browsing</li>
            </ul>
            <h2 >CERTIFICATE</h2>
            <p className='ml'>WEB DESIGNING</p>
            <h2> REFERENCE</h2>
            <p className='ml'>
                will be furnished on request
            </p>

        </div>


    </div>

  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));