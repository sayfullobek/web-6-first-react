import { useEffect, useState } from 'react'
import {Button, Form, Modal, ModalHeader, ModalTitle, Table} from 'react-bootstrap'
import { toast } from 'react-toastify'
export const Phone = () => {
    const [showModal, setShowModal] = useState(false)
    const [editShowModal, setEditShowModal] = useState(false)
    const [phones, setPhones] = useState([
        {id:1, name:'Iphone', color:'black', memory:10, ram:1, px:1, img:'123', price:12}
    ])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [memory, setMemory] = useState(0)
    const [ram, setRam] = useState(0)
    const [px, setPx] = useState(0)
    const [img, setImg] = useState('')
    const [price, setPrice] = useState(0)
    const openModal = () => {
        setShowModal(!showModal)
    }

    const openEditModal = (id) => {
        setEditShowModal(!editShowModal)
        setId(id)
    }

    const getAll = () => {
        const arr = []
        phones.map(item=>(
            arr.push(item)
        ))
        setPhones(arr)
    }
    useEffect(()=>{
            getAll()
    }, [])

    const savePhone = () => {
        if (name.trim().length===0){
            return toast.warning("Phone name not null")
        }
        if (memory<=0){
            return toast.warning("Phone memory not null")
        }
        if (ram<=0){
            return toast.warning("Phone ram not null")
        }
        if (px<=0){
            return toast.warning("Phone camera px not null")
        }
        if (img.trim().length===0){
            return toast.warning("Phone img not null")
        }
        if (price<=0){
            return toast.warning("Phone price not null")
        }
        const arr = []
        phones.map(item=>{
            arr.push(item)
        })
        const obj = {id:phones.length+1, name, color, memory, ram, px, img, price}
        phones.push(obj)
        setPhones(arr)
        toast.success("Successfully saved phone")
        setShowModal(false)
        getAll()
        setName('')
        setMemory(0)
        setRam(0)
        setPx(0)
        setImg('')
        setPrice(0)

    }
    const deletePhone = (id) => {
        const a = window.confirm("O'chirasizmi?")
        if (a){
            const res = phones.filter(item=>item.id!==id)
            setPhones(res)
            toast.success("O'chirildi")
        }
    }
    const editPhone = ()=>{
        if (name.trim().length===0){
            return toast.warning("Phone name not null")
        }
        if (memory<=0){
            return toast.warning("Phone memory not null")
        }
        if (ram<=0){
            return toast.warning("Phone ram not null")
        }
        if (px<=0){
            return toast.warning("Phone camera px not null")
        }
        if (img.trim().length===0){
            return toast.warning("Phone img not null")
        }
        if (price<=0){
            return toast.warning("Phone price not null")
        }
        let a = []
            const res = phones.filter(item=>item.id!==id)
            res.map(item=>{
                if (item.id!==id){
                    a.push(item)
                }
            })
        const obj = {id:id, name, color, memory, ram, px, img, price}
        a.push(obj)
        console.log(a);
        setPhones(a)
        toast.success("Successfully edited")
        setEditShowModal(false)
        setName('')
        setMemory(0)
        setRam(0)
        setPx(0)
        setImg('')
        setPrice(0)
    }
    console.log(phones);
    return(
        <div>
            <h1 className="text-center text-success">Phone page</h1>
            <Button variant="success" onClick={()=>openModal()}>+ Add</Button>
            
            {phones.length===0?(
                <h1 className='text-center text-danger'>Phone not...</h1>
            ):(
                <GetPhoneTable phones={phones} deletePhone={deletePhone} openEditModal={openEditModal}/>
            )}

            <Modal onHide={openModal} show={showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Phone modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone name</Form.Label>
                            <Form.Control value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Enter phone name'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Phone color</Form.Label>
                            <Form.Control value={color} onChange={e=>setColor(e.target.value)} type="color" placeholder='Enter phone color'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Phone memory</Form.Label>
                            <Form.Control value={memory} onChange={e=>setMemory(e.target.value)} type="number" placeholder='Enter phone memory'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>Phone ram</Form.Label>
                            <Form.Control value={ram} onChange={e=>setRam(e.target.value)} type="number" placeholder='Enter phone ram'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label>Phone camera px</Form.Label>
                            <Form.Control value={px} onChange={e=>setPx(e.target.value)} type="number" placeholder='Enter phone camera px'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label>Phone img</Form.Label>
                            <Form.Control value={img} onChange={e=>setImg(e.target.value)} type="text" placeholder='Enter phone img'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label>Phone price</Form.Label>
                            <Form.Control value={price} onChange={e=>setPrice(e.target.value)} type="number" placeholder='Enter phone price'/>
                        </Form.Group>

                        <Button variant='success' onClick={()=>savePhone()} className='m-3'>Save</Button>
                        <Button variant='danger' className='m-3' onClick={()=>openModal()}>Close</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal onHide={openEditModal} show={editShowModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Phone modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone name</Form.Label>
                            <Form.Control value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Enter phone name'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Phone color</Form.Label>
                            <Form.Control value={color} onChange={e=>setColor(e.target.value)} type="color" placeholder='Enter phone color'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Phone memory</Form.Label>
                            <Form.Control value={memory} onChange={e=>setMemory(e.target.value)} type="number" placeholder='Enter phone memory'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>Phone ram</Form.Label>
                            <Form.Control value={ram} onChange={e=>setRam(e.target.value)} type="number" placeholder='Enter phone ram'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label>Phone camera px</Form.Label>
                            <Form.Control value={px} onChange={e=>setPx(e.target.value)} type="number" placeholder='Enter phone camera px'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label>Phone img</Form.Label>
                            <Form.Control value={img} onChange={e=>setImg(e.target.value)} type="text" placeholder='Enter phone img'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label>Phone price</Form.Label>
                            <Form.Control value={price} onChange={e=>setPrice(e.target.value)} type="number" placeholder='Enter phone price'/>
                        </Form.Group>

                        <Button variant='success' onClick={()=>editPhone()} className='m-3'>Edit</Button>
                        <Button variant='danger' className='m-3' onClick={()=>openEditModal()}>Close</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

const GetPhoneTable = ({phones, deletePhone, openEditModal}) => {
    const [seeModal, setSeeModal] = useState(false)
    const [img, setImg] = useState('')
    const showSeeModal = (rasm)=>{
        setSeeModal(!seeModal)
        setImg(rasm)
    }
    return(
        <div>
            <Table striped bordered hover variant="light" className='mt-3'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Memory</th>
                        <th>Ram</th>
                        <th>Camera</th>
                        <th>Price</th>
                        <th colSpan={3}>Action</th>
                    </tr>    
                </thead>    
                <tbody>
                    {phones.map((item, i)=>(
                        <tr>
                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.color}</td>
                            <td>{item.memory}</td>
                            <td>{item.ram}</td>
                            <td>{item.px}</td>
                            <td>{item.price}</td>
                            <td>
                                <Button variant="warning" className='mt-0 mb-0 m-2' onClick={()=>openEditModal(item.id)}>Edit</Button>
                                <Button variant="danger" className='mt-0 mb-0 m-2' onClick={()=>deletePhone(item.id)}>Delete</Button>
                                <Button variant="info" className='mt-0 mb-0 m-2' onClick={()=>showSeeModal(item.img)}>See img</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal onHide={showSeeModal} show={seeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        See phone img
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width={'100%'} src={img} alt='plase wait...'/>
                </Modal.Body>
            </Modal>
        </div>
    )
}