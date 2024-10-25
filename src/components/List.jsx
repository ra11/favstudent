import { useState } from "react" 
import { Arrcontext } from "./contents"
import { useContext } from "react"

function List(){
    const { ArrActivity, favourite, setfavourite } = useContext(Arrcontext);
  const [clicked,setclicked] = useState(false)
  const addfav = (ArrActivity) => {
    if (!favourite.includes(ArrActivity)) {
      setfavourite([...favourite, ArrActivity])
      setclicked(false)
      setclicked(true)
    }
  };
  return (<>

    <div className="pl-10 mt-5 flex flex-col gap-3 ">
      {
        ArrActivity.map(function (item, index) {
          return <><h1>{index + 1}{"."} {item}

          <button className='  ml-44 bg-black text-white p-1 rounded-md  '
              onClick={() => addfav(item)} disabled={clicked}>Add to favourite</button>
            </h1>
          </>
        })
      }

    </div>

  </>
  )
}
export default List