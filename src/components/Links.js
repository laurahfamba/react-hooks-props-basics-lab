import React from "react";
import { render, screen } from "@testing-library/react"

const Links= (links)=> {
  const {github, linkedin} = links
  return (
    <div id="links">
      <h3>Links</h3>
     
     <a href={github}>{github}</a>
     <a href={linkedin}>{linkedin}</a> 
    </div>
  );
}

export default Links;