import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const Register = ()=>{
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [password, setPassword] = useState('')
    const [prePassword, setPrePassword] = useState('')
    
    const registerHandler = () => {
        if (name.trim().length===0){
            return toast.warning("Ism kiritish shart oka")
        }
        if (surname.trim().length===0){
            return toast.warning("Familiya kiritish shart oka")
        }
        if (phoneNumber.length!==9){
            return toast.warning("Tel raqamda xatolik iltimos qayta urinib ko'ring")
        }
        if (!email.endsWith("@gmail.com")){
            return toast.warning("Emailda xatolik iltimos qayta urinib ko'ring")
        }
        if (password.length<8){
            return toast.warning("Parol 8ta belgidan ko'p yoki teng bo'lishi kerak")
        }
        if (password!==prePassword){
            return toast.warning("Parol va tasdqilash paroli teng bo'lishi shart")
        }
        toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz")
        navigate("/cabinet")
        // toast.success("ibrohim qozi va kamol (nihon)")
        // toast.error("xota bobir (Rayhon 09)")
        // toast.info('Mustafo (humoy) panji')
        // toast.warning('ohoglantiraman rayhon bobir yobir')
    }

    return(
        <div className="w-100 d-flex align-items-center justify-content-center" style={{height:'100%'}}>
            <div className="w-50 border shadow p-5">
                <h2 className="text-center text-primary">Ro'yxatdan o'tish</h2>
                <form>
                    <label htmlFor="name" className="m-3 text-primary">Ism</label>
                    <input type="text" placeholder="Ismingizni kiriting..." name="name" id="name" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>

                    <label htmlFor="surname" className="m-3 text-primary">Familiya</label>
                    <input type="text" placeholder="Familiyangizni kiriting..." name="surname" id="surname" className="form-control" value={surname} onChange={e=>setSurname(e.target.value)}/>
                
                    <label htmlFor="phoneNumber" className="m-3 text-primary">Telefon raqam</label>                
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">+998</span>
                        <input type="number" placeholder="Telefon raqamingizni kiriting..." name="phoneNumber" id="phoneNumber" className="form-control" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
                    </div>

                    <label htmlFor="email" className="m-3 text-primary">Email</label>
                    <input type="email" placeholder="Emailingizni kiriting..." name="email" id="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                
                    <label htmlFor="birthDate" className="m-3 text-primary">Tug'ilgan kun</label>
                    <input type="date" placeholder="Tug'ilgan kuningizni belgilang..." name="birthDate" id="birthDate" className="form-control" value={birthDate} onChange={e=>setBirthDate(e.target.value)}/>
                
                    <label htmlFor="password" className="m-3 text-primary">Parol</label>
                    <input type="password" placeholder="Parolingizni kiriting..." name="password" id="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
                
                    <label htmlFor="prePassword" className="m-3 text-primary">Tasdiqlash paroli</label>
                    <input type="password" placeholder="Tasdiqlash uchun parolingizni qayta kiriting..." name="prePassword" id="prePassword" className="form-control" value={prePassword} onChange={e=>setPrePassword(e.target.value)}/>
                
                    <button type="button" onClick={()=>registerHandler()} className="btn btn-primary mt-3">Ro'yxatdan o'tish</button>
                </form>
            </div>
        </div>
    )
}