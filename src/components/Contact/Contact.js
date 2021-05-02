import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_it4foia', 'template_t6z3ppp', e.target, 'user_vMc1L4MV3kPY6PgY9V4tH')
          .then((result) => {
             if(result){
                 alert('sucssefully');
             }
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
           <div className="row mt-5 pt-5">
               <div className="col-md-12">
               <h2 className="text-center">Contact Me</h2>
               <form className="mt-5" onSubmit={sendEmail}>
                    <input style={{padding:"8px 3px",width:"470px",border:'none'}} class="form-control" name="name" placeholder="Your name"/><br/>
                    <input style={{padding:"8px 3px",width:"470px",border:'none'}} class="form-control" name="email" placeholder="Email"/><br/>
                    <span className="text" name="message"></span>
                    <textarea style={{padding:'25px 0px'}} class="form-control"  placeholder="Description"></textarea>
                   <div className="send text-center mt-4 fs-5">
                        <input style={{width:'150px',padding:'7px 0',marginTop:'5px',backgroundColor:'#659dbd',color:'white',fontWeight:'bold',border:'none',borderRadius:'20px'}} type="submit" value="Send"/>
                    </div>         
                            
                </form>
            </div>
               </div>
           </div>
         </div>
    );
};

export default Contact;