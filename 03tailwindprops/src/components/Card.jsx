import React from "react";
import myimage from "../assets/image.jpg"

function Card({username ,btntext = "visit me"}){
    return(
        < >
        <div className="relative h-[400px] w-[300px] rounded-md ml-5 ">
            <img src={myimage} alt="image" 
             className="z-0 h-full w-full rounded-md object-cover mt-2 flex justify-center "/>

             <div className="absolute bottom-4 left-4 text-left">

                <h1 className="text-lg font-semibold text-white"> {username}</h1>

                <p className="mt-2 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolorum odio doloremque illo at unde tempore, enim iste architecto deleniti perferendis quae quod laborum? Eum provident libero accusamus quae fugiat.</p>

                <button className="mt-2 inline-flex cursor-pointer items-center text-sm    font-semibold text-black bg-white p-2 rounded-md"> {btntext}
                </button>
             </div>
        </div>
        </>
    )
}

export default Card