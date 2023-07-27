import React from 'react'
import { Link } from "react-router-dom"
import Users from "../Users"

export const adminMainDisplay = () => {
  return (
      <div className="p-10">
        <section>
            <h1>Admins Page</h1>
            <br />
            <Users />
            <br />
            <p>You must have been assigned an Admin role.</p>
            <div className="flexGrow">
                <Link to="/home">Home</Link>
            </div>
        </section>
      </div>
       
  )
}


export default adminMainDisplay