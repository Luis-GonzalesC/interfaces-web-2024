import { useSnapshot } from 'valtio';
import {state} from "./state";
import { useEffect } from 'react';

function Times() {
    const snap = useSnapshot(state);//Para leer
  
    useEffect(()=>{
      const interval = setInterval(()=>{
        state.times++;
      }, 1000);
      return ()=> clearInterval(interval);
    },[]);
  
    return (
      <>
        <div>{snap.times}s</div>
      </>
    );
}

export default Times;
