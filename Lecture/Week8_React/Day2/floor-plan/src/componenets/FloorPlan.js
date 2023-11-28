import Kitchen from "./Kitchen";
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

export default function FloorPlan (props) {
    return (
        <div className='floorPlan'>
        <Kitchen />
        <LivingRoom />
        <Bedroom bedNum='1' />
        <Bedroom bedNum='2' />
        <Bedroom bedNum='3' />
        <Bath size='Half'/>
        <Bath size='Full'/>
        </div>
    );
}
 
