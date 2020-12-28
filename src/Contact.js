import React from 'react'

const Contact = () => {
    return (
        <form>
            <h1>Хүсэлт</h1>
            <label>Нэр</label>
            <input placeholder='Байгуулга,хувь хүний нэр'/>          
            <label>Email</label>
            <input placeholder='Холбоо барих цахим хаяг аа оруулна уу'/>    
            <label>Санал</label>
            <textarea placeholder='Хамтран ажиллах санал хүсэлтээ оруулна уу'></textarea> 
        </form>
    )
}

export default Contact
