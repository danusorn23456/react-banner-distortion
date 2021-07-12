import { useEffect,useState } from 'react'

export default function UseMousePosition(initial = 0) {
    const [position,setPosition] = useState({x:initial,y:initial})

    const mouseMoveHandler = (e) =>{
        setPosition({x:e.clientX,y:e.clientY});
    }

    useEffect(()=>{
        window.addEventListener('mousemove',mouseMoveHandler);
        return ()=>{
            window.removeEventListener('mousemove',mouseMoveHandler);
        }
    },[])

    return position;
}
