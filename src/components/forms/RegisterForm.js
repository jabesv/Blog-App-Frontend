import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const RegisterForm = (props) => {
    const history = useHistory()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password:'',
    })






    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData);
 
        axios.post ('http://localhost:5002/users', formData)
        .then(res => {
            console.log(res.data)
            
            if (res.data.token && res.data.user){
                localStorage.setItem('userToken', res.data.token)
                props.setUser(res.data.user)
                history.push('/home')
            } else {
                console.log(res.data);
            }
        })
    }
    return (
        <div>
            <form>


                
            </form>
        </div>
)


}