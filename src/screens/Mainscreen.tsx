import { useState } from 'react';
import Comp1 from '../Components/comp1';
import Comp2 from '../Components/comp2';


const Mainscreen = () => {
    return ( 
      <>
            <div>Titleline</div>
            <Comp1 />
            <Comp2 />
      </>
    );

}

export default Mainscreen;