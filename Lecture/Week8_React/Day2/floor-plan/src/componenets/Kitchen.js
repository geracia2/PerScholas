import Oven from './Oven'
import Sink from './Sink'

export default function Kitchen() {
    return (
        <div className='kitchen'>
        <h1>Kitchen</h1>
        <Oven />
        <Sink />
        </div>
    );
}