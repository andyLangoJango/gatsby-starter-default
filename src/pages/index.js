import React, { useEffect } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Cookies from 'universal-cookie';
import { Auth0Provider } from "@auth0/auth0-react";
import * as queryString from "query-string";

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ location }) => {
  console.log(location); // inspect location for yourself
  const { access_token} = queryString.parse(location.hash);
  console.log(access_token);
  const cookies = new Cookies();
  if (access_token != null) {
    // if (cookies.get('jwt') != null) {
    //   send that info to database
    // }
    console.log("error checking");
    cookies.set('jwt', access_token, { path: '/' });
    console.log(cookies.get('jwt')); // Pacman
  }
  // function Botcopy() {
  //   console.log("testing");
  // }
  useEffect(() => {
    // On mount, we check if a user is logged in.
    // If so, we'll retrieve the authenticated user's profile.
    window.addEventListener('botcopy-events', function (e) {
      switch(e.detail.type) {
        case 'bc-initialized':
          console.log("bc-initialized")
          // do something
          break
  
        case 'bc-auth-required':
          console.log("bc-auth-required")
          this.Botcopy.setESParameters({
            webhookHeaders: {jwt: cookies.get('jwt')}
          })
          break
      }
  });
    
  }, []);
    return (
        <Helmet>
        <script
          type="text/javascript"
          id="botcopy-embedder-d7lcfheammjct"
          className="botcopy-embedder-d7lcfheammjct" 
          data-botid="61b7d8f1f34a7e00096b54cc"
          src = 'https://widget.botcopy.com/js/injection.js'
        >
        </script>
        </Helmet>
    )
}


export default IndexPage
