import React, { Component } from 'react'
import '../index.css';
export default class Footer extends Component {
  render() {
    return (
      <div>
      <div className="container my-3">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
      </a>
      <span className="mb-3 mb-md-0 text-muted text-center">&copy; 2023 Dev Kakadiya</span>
    </div>

   
  </footer>
</div>
      </div>
    )
  }
}
