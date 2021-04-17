import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail.js';
import ApprovalCard from './ApprovalCard.js';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// 43 video

const Appp = () => {
  return (    
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail 
        author= "Zulejha" 
        timeAgo="Today at 4:45PM" 
        content="Nice blog post"
        avatar={faker.image.avatar()}
       />
      </ApprovalCard>
      <ApprovalCard> 
      <CommentDetail 
        author= "Roki" 
        timeAgo="Today at 2:00AM" 
        content="I like the subject. hmm"
        avatar={faker.image.avatar()}
       />
       </ApprovalCard>
       <ApprovalCard>
      <CommentDetail 
        author= "Mira" 
        timeAgo="Today at 5:00PM" 
        content="I like the writing"
        avatar={faker.image.avatar()}
       />
       </ApprovalCard>
       <ApprovalCard>
      <CommentDetail 
      author= "Stanka" 
      timeAgo="Today at 1:00AM" 
      content="I like driving bike"
      avatar={faker.image.avatar()}
       />
       </ApprovalCard>
       <ApprovalCard>
      <CommentDetail 
      author= "Trajanka" 
      timeAgo="Today at 3:50PM" 
      content="I like walking"
      avatar={faker.image.avatar()}
       />
       </ApprovalCard>
      </div>
  );
};

ReactDOM.render(<Appp />, document.querySelector('#root')); 