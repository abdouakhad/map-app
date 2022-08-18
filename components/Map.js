import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
const api_key = process.env.GOOGLE_MAP_API_KEY

const render = () => {
    return <h1>{Status}</h1>;
  };
  
  <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
    <YourComponent/>
  </Wrapper>

export default Map