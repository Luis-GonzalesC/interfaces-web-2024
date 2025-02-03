import { useSnapshot } from 'valtio';
import {state} from "./state";

function Count() {
    const snap = useSnapshot(state);//Para leer
    return (
      <>
        <button onClick={()=>{
          state.count++;
        }}>{snap.count}</button>
      </>
    );
}

export default Count;
  