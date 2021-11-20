import Thumbnail from "./Thumbnail"
import FlipMove from 'react-flip-move'
const Results = ({ results }) => {
    return (
        <div className='px-10 my-5  sm:grid sm:grid-cols-2 md:grid-cols-3
         2xl:flex 2xl:flex-wrap 2xl:justify-center
         '>
            <FlipMove>
                {
                    results.map((value, index) => (
                        <Thumbnail key={index} data={value} />
                    ))
                }
            </FlipMove>
        </div>
    )
}

export default Results
