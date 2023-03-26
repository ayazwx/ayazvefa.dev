import React from "react"
import "./404.css"

const ErrorPage = () => {
  return (
      <div class="error-container">
        <img src="assets/images/something-lost.png" alt="page not found" />
        <h1>Oops, looks like the page is lost.</h1>
        <p>This is not a fault, just an accident that was not intentional.</p>
        <a href="https://ayazvefa.dev">Home <i class="fas fa-external-link-alt"></i></a>
      </div>
  )
};

export default ErrorPage;
