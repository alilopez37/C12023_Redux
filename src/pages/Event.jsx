import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function Event() {
    const events = useSelector(state => state.events);
    return (
        <>
            <h1>Lista de eventos registrados</h1>
            {events.listEvents && events.listEvents.map( event => {
                return (<div keys={event.id}>
                            <p>ID: {event.id} Name: {event.name} Price: {event.price}</p>
                        </div>)
            })} 
            <Link to="/">Ir a alta</Link>
        </>
      );
}

export default Event;