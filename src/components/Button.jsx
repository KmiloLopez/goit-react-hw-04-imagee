import React from 'react';
import { Buttonn } from '../Styled.components/Button.styled';
const Button =({LoadMore, picturesFound})=> {
    
      
      return (
        <>
        {picturesFound&&<Buttonn type="button"onClick={LoadMore}>Load More
        </Buttonn>}
        

       {/*  {console.log(`Pages ${pages}`)} */}
        </>
        
        
      )
    
  }
  
  export default Button;
