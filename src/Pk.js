import{useState} from "react";

export default function ToggleContent(){
    const[isVisible,setIsVisible] = useState(false);

    return(
        <div className=" flex flex-col items-center gap-4">
            <button className="m-5 bg-warning" onClick={() =>setIsVisible(!isVisible)}
                >
                {isVisible ? "Hide":"Show"} Content
            </button>
            {isVisible &&(
                <div className=" h1  p-2 bg-warning">
                    Hii gokul How are You
                </div>
            )}
        </div>
    )
}