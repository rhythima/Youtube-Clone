import {Button,Form,InputGroup} from 'react-bootstrap';
import {useState} from 'react';

function Searchbar({onSubmit})
{

    const[searchTerm,setSearchTerm]=useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        onSubmit(searchTerm);
    }

    return(
<Form onSubmit={submitHandler}>
<InputGroup className="mb-3">
        <Form.Control aria-describedby="basic-addon2" type="text" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}/>
        <Button variant="primary" type="submit">
        Search
        </Button>
      </InputGroup>
      </Form>
    )
}
export default Searchbar;