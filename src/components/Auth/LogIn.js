import React from 'react'
import "./Auth.scss"
import TextField from '@mui/material/TextField'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import {setUser} from '../redux/user/userActions'
import { useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert'
import WooCommerceAPI from 'woocommerce-api'
import SimpleBackdrop from '../utils/SimpleBackdrop';
import {connect} from 'react-redux'
function LogIn(props) {
  const {handleSubmit,register,formState:{errors}}=useForm()
  const [error,setError]=React.useState("")
  const [loading,setLoading]=React.useState(false)
  var WooCommerce = new WooCommerceAPI({
    url: 'https://api.hellomitr.com/',
    consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
    consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
    wpAPI: true,
    version: 'wc/v1',
    queryStringAuth:true
  });
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        confirmpassword:"",
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const onSubmit = (data)=>{
        setLoading(true)
        WooCommerce.getAsync(`customers?email=${data.email}`)
        .then((response) => {
          setLoading(false)
          if(JSON.parse(response.toJSON().body).length>0){
            let user = JSON.parse(response.toJSON().body)[0]
            props.history.push("/otp",{user,checkout:props.location.state,mobile:data.phone})
            props.setUser(JSON.parse(response.toJSON().body)[0])
            // if(props.location.state){
            //   props.history.push("/checkout")
            // }else{
            //   props.history.push("/myprofile")
            // }
            
          }else{
            setError("User doesn't exist")
          }
        })
        .catch((error) => {
          setLoading(false)
          
        });
      }

  return (
    <div className="shadow authcontainer">
      <SimpleBackdrop open={loading} />
        <h1>Welcome To Hellomitr</h1>
        <p>Log in with email & password</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <TextField {...register('email',{required:true})} error={errors.email?true:false} className="textfield" id="outlined-basics" variant="outlined" label="Email" fullWidth />
        <TextField {...register('phone',{required:true})} error={errors.phone?true:false}  className="textfield" id="outlined-basics" variant="outlined" label="Phone" fullWidth />
        {/* <FormControl className="textfield" sx={{width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            
            label="Password"
          />
        </FormControl> */}

       
        {error.length>0?<Alert className="alert" severity="error">{error}</Alert>:null}
        {/* <Button className="btn" variant="contained" type="submit">LogIn</Button> */}
        <Button className="btn" variant="contained" type="submit">LogIn</Button>
        </form>
        {/* <div className="alreadyuser">
            <p>Forgot your password? <span onClick={()=>props.history.push("login")}>Reset</span></p>
        </div> */}
    </div>
  )
}

const mapDispatchToProps = (dispatch)=>{
  return {
    setUser:(user)=>dispatch(setUser(user))
  }
}

export default connect(null,mapDispatchToProps)(LogIn)