import '../../assets/css/contacts.css';
import Button from '../basics/button';
import Map from '../basics/map';

export default function Contacts() {
    return (
        // entire section
        <div className="contacts-section">
            <h2>CALL OR VISIT</h2>
            <div className="contacts-info">
                {/* 1st column */}
                <div className="content">
                    <h3>SEND US A MESSAGE</h3>
                    <div className="form">
                        <form action="">
                            <div className='info'>
                                <label htmlFor="">Name<span>*</span></label>
                                <input type="text" required />
                            </div>
                            <div className='info'>
                                <label htmlFor="">Email<span>*</span></label>
                                <input type="email" required />
                            </div>
                            <div className='info'>
                                <label htmlFor="">Message</label>
                                <textarea required></textarea>
                            </div>
                        </form>
                        <div>
                            <Button className={'btn-primary'} label={'SEND'}/>
                        </div>
                    </div>
                </div>
                {/* 2nd column */}
                <div className="content">
                    <h3 className='pb-5'>REACH US</h3>
                    <div className='info'>
                        <Button className={'btn-primary'} label={<><i className="fa-brands fa-whatsapp"></i> WhatsApp</>}/>
                    </div>
                    <div className="info">
                        <p className='fw-bold'>Marci Metzger - THE RIDGE REALTY GROUP</p>
                    </div>
                    <div className="info">
                        <p className='fw-lighter'>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
                    </div>
                    <div className="info">
                        <p className='fw-lighter text-decoration-underline'>(206) 919-6886</p>
                    </div>
                    <div className="info">
                        <p className='fw-bold'>Office Hours</p>
                    </div>
                    <div className="info">
                        <p>Open daily </p>
                        <span>8:00 am - 7:00 pm</span>
                    </div>
                    <div className="info">
                        <p>Appointments outside office hours available upon request. Just call!</p>
                    </div>
                </div>
            </div>
            <Map className='map'/>
        </div>
    )
}