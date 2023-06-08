import React from 'react'

const Card = (props) => {
   
  return (
  <>
  <main>
            <div className="card">
              <img
                src={props.src}
                alt=""
              />
                      <div className="card-content">
                              <h2> {props.title}</h2>
                              <p></p>
                              <a href="https://www.pexels.com/fr-fr/" className="button">
                                Find out more<br />
                                <span className="material-symbols-outlined">{props.bio}</span>
                              </a>
                      </div>
            </div>
  </main>
  </>
  )
}

export default Card