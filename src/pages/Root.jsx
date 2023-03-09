import {useRef} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'

function Root() {
    const forms = useRef()
    const dispatch = useDispatch()


    const handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData(forms.current)

        dispatch({
            type: "ADD_EVENT",
            value: {
                id: formData.get('id'),
                name: formData.get('name'),
                price: formData.get('price')
            }
        })
    }
    return ( 
        <>
            <form ref={forms}>
                <label>ID
                    <input type="number" name="id"/>
                </label>
                <label>Name
                    <input type="text" name="name"/>
                </label>
                <label>Price
                    <input type="number" name="price" />
                </label>
                <button onClick={handleClick}>Guardar registro</button>
            </form>
            <Link to="/events">Ir a eventos</Link>
        </>
     );
}

export default Root;