import { useParams } from "react-router-dom"

const SingleJob = ()=>{

    const id = useParams()
    console.log(id, '===>id')
    return(
        <>
        <h1>{id.uniqueId}</h1>
        </>
    )
}

export default SingleJob