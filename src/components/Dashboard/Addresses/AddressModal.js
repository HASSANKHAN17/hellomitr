import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useForm} from 'react-hook-form'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import {connect} from 'react-redux'
import LoadingButton from '@mui/lab/LoadingButton';
import WooCommerceAPI from 'woocommerce-api'
import {setUser} from '../../redux/user/userActions'
import SimpleBackdrop from '../../utils/SimpleBackdrop';
function AddressModal(props) {
    //id type open setopen [props]
    const {register,handleSubmit,formState:{errors},setValue}=useForm()
    const [loading,setLoading]=React.useState(false)
    var WooCommerce = new WooCommerceAPI({
        url: 'https://api.hellomitr.com/',
        consumerKey: 'ck_d7bd31411532bc4fbfa97da6d587492acb1ed00c',
        consumerSecret: 'cs_c1c28f110eee7b2a528cde222bad766892f004d0',
        wpAPI: true,
        version: 'wc/v1',
        queryStringAuth:true
      });
    React.useEffect(()=>{
        if(props.type==="shipping"){
            setValue("firstname",props.user.shipping.first_name)
            setValue("lastname",props.user.shipping.last_name)
            setValue("phone",props.user.shipping.phone)
            setValue("address",props.user.shipping.address_1)
            
            setValue("city",props.user.shipping.city)
            setValue("state",props.user.shipping.state)
            setValue("postcode",props.user.shipping.postcode)
        }else{
            setValue("firstname",props.user.billing.first_name)
            setValue("lastname",props.user.billing.last_name)
            setValue("phone",props.user.billing.phone)
            setValue("address",props.user.billing.address_1)
            
            setValue("city",props.user.billing.city)
            setValue("state",props.user.billing.state)
            setValue("postcode",props.user.billing.postcode)
        }
        
    },[])

    const onSubmit = (formData)=>{
        let data = {}
        if(props.type==="shipping"){
             data = {
                shipping: {
                  first_name: formData.firstname,
                  last_name:formData.lastname,
                  phone:formData.phone,
                  address_1:formData.address,
                  address_2:"",
                  city:formData.city,
                  state:formData.state,
                  postcode:formData.postcode
                }
              };
        }else{
             data = {
                billing: {
                    first_name: formData.firstname,
                    last_name:formData.lastname,
                    phone:formData.phone,
                    address_1:formData.address,
                    address_2:"",
                    city:formData.city,
                    state:formData.state,
                    postcode:formData.postcode
                }
              };
        }
        setLoading(true)
          
          WooCommerce.putAsync(`customers/${props.user.id}`, data)
            .then((response) => {
              props.setUser(JSON.parse(response.toJSON().body))
              props.setOpen(false)
              setLoading(false)
            })
            .catch((error) => {
              props.setOpen(false)
              setLoading(false)
            });
    }

  return (
    <div>
      <SimpleBackdrop open={loading} />
      <Dialog open={props.open} onClose={()=>props.setOpen(false)}>
        <DialogTitle>Edit Info</DialogTitle>
        <form onSubmit = {handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogContentText>
            Note : Phone number can't be edited, use a different account instead
          </DialogContentText>
          <TextField
          inputProps={{ maxLength: 200 }}
          {...register('firstname',{required:true})}
          error={errors.firstname?true:false}
            autoFocus
            margin="dense"
            id="name"
            label="Firstname"
            fullWidth
            variant="standard"
          />
          <TextField
          inputProps={{ maxLength: 200 }}
          {...register('lastname',{required:true})}
          error={errors.lastname?true:false}
            margin="dense"
            id="lastname"
            label="Lastname"
            fullWidth
            variant="standard"
          />
           <TextField
          inputProps={{ maxLength: 200 }}
          {...register('phone',{required:true})}
          error={errors.phone?true:false}
            margin="dense"
            id="phone"
            label="Phone"
            fullWidth
            variant="standard"
          />
           <TextField
          inputProps={{ maxLength: 200 }}
          {...register('address',{required:true})}
          error={errors.address?true:false}
            margin="dense"
            id="address"
            label="Address 1"
            fullWidth
            variant="standard"
          />
           {/* <TextField
          inputProps={{ maxLength: 200 }}
          {...register('address2',{required:true})}
          error={errors.address2?true:false}
            margin="dense"
            id="address2"
            label="Address 2 (optional)"
            fullWidth
            variant="standard"
          /> */}
          <TextField
          inputProps={{ maxLength: 200 }}
          {...register('city',{required:true})}
          error={errors.city?true:false}
            margin="dense"
            id="city"
            label="City"
            fullWidth
            variant="standard"
          />
          <TextField
          inputProps={{ maxLength: 200 }}
          {...register('state',{required:true})}
          error={errors.address?true:false}
            margin="dense"
            id="state"
            label="State"
            fullWidth
            variant="standard"
          />
          <TextField
          inputProps={{ maxLength: 200 }}
          {...register('postcode',{required:true})}
          error={errors.postcode?true:false}
            margin="dense"
            id="postcode"
            label="Postcode"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        {!loading?<DialogActions>
          <Button onClick={()=>props.setOpen(false)}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>:
        <DialogActions>
        <LoadingButton loading variant="">
        Submit
      </LoadingButton>
      </DialogActions>
        }
        </form>
      </Dialog>
    </div>
  );
}

const mapStateToProps = ({user})=>{
    return {
        user:user.user
    }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    setUser:(user)=>dispatch(setUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddressModal)