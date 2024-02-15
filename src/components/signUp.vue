<template>
<wrapper>
      <div className='conainerr'>
        
       <p>{{ this.message }}</p>
        <div className='modal'>
          <div className='modal-container'>
            <div className='modal-left'>
              <h1 className="modal-title">Welcome!</h1>
              <p className='modal-desc'>
                to the GYM Freak website for trained your body .

              </p>
              <form>
                <div className='input-block'>
                  <lable htmlFor='name' className='input-lable'>First-name
                  </lable>
                  <input
                  type='name'
                  autoComplete='off'
                  name="name"
                  id='name'
                  placeholder='First-Name'
                  v-model.lazy="form.name"
                 
                  />
                </div>

                <div className='input-block'>
                  <lable htmlFor='last_name' className='input-lable'>Last-name
                  </lable>
                  <input
                  type='last_name'
                  autoComplete='off'
                  name="last_name"
                  id='last_name'
                  placeholder='Last-Name'
                  v-model.lazy="form.last_name"
                 
                  />
                </div>

                <div className='input-block'>
                  <lable htmlFor='email' className='input-lable'>Email
                  </lable>
                  <input
                  type='email'
                  autoComplete='off'
                  name="email"
                  id='email'
                  placeholder='Email'
                  v-model.lazy="form.email"
                  />
                 
                </div>

                <div className='input-block'>
                  <lable htmlFor='password' className='input-lable'>Password
                  </lable>
                  <input
                  type='password'
                  autoComplete='off'
                  name="password"
                  id='password'
                  placeholder='Password'
                  v-model.lazy="form.password"
                 
                  />
                </div>

                <div className='input-block'>
                  <lable htmlFor='password' className='input-lable'>Confirm-Password
                  </lable>
                  <input
                  type='password'
                  autoComplete='off'
                  name="Confirm_Password"
                  id='Confirm_Password  '
                  placeholder='Confirm-Password'
                  v-model.lazy="form.Confirm_password"
                 
                  />
                </div>
                <div className='modal-buttons'>
                <a href='#' className=''>
                  Thanks for register!
                </a>
                <button className='input-button' type='submit' v-on:click="handleValue">
                  Registration
                </button>
                </div>
              </form>
              <p className='sign-up'>
                <router-link to="/login">Already have an account?</router-link>
              </p>
              <p>{{ this.form.name }}</p>
            </div>
          </div>

        </div>
      </div>
    </wrapper>
</template>
<script>
    import axios from 'axios'
export default{

    data(){
        return{
         form:  { name: "",
    last_name:"",
    email: "",
    password: "",
    Confirm_password: "",},
    error:[],
    message:''
        }
    },
    
    methods:{
      
        handleValue(e) {
      
            this.error = [];
            for (const item in this.form){
                if(this.form[item]===null || this.form[item].length===0){
                   this.error.push(`${item} not valid`)
                }
            }
            // if(this.error.length == 0){
            //     console.log("form submmited")
            // }
            this.addApi()
            // console.log(this.form ,this.error)
            e.preventDefault();

        },
        async addApi(){
      await axios.post('http://20.193.142.95:8000/user/signup',{
           firstName:this.form.name,
           lastName:this.form.last_name,
           email:this.form.email,
           password:this.form.password
       } )
       .catch(error => {
                    this.message = 'Error updating data: ' + error.message;
                });
      
     }

    },
 
}
</script>
<style>
.conainerr{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #d385ac;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal{
    width: 100%;
    background: rgba(175, 102, 102, 0.5);    
 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: 0.4s;

}

.modal-container{
display: flex;
max-width: 60vw;
width: 100%;
border-radius: 10px;
overflow: hidden;
position: absolute;
transition-duration: 0.3s;
background: #fff;

}

.modal-title{
    margin: 0;
    font-weight: 400;
    color: #b22b27;
}

.modal-desc{
    margin: 6px 0 30px 0;

}

.modal-left{
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1 ;
    
}

/* .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  } */

  .modal-buttons{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }

  .modal-buttons a{
    color:  rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up{
    color: #8c7569;
  }

  .input-button{
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transform: 0.3s;
    cursor: pointer;
    font-family: "Nunito",sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-lable{
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block{
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }

  .input-block input{
    outline: 0;
    border: 0;
    padding: 4px 0 0 ;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }

  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media only screen and (max-width:445px) {
.modal-container{
  /* max-width: 220px; */
  display: flex;
  justify-content: center;
}
.modal-left{
  padding: 10px 10px 10px 10px;
}
.input-block{
  width: 200px;
}
.input-button{
  padding: 0.7rem 1.2rem;
}
form{
  display: flex;
  flex-direction: column;
 
  align-items: center;
}
.sign-up{
  padding-top: 5px;
  font-weight: 200;
}
} 
</style>