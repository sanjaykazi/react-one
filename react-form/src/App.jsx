import './App.css';
import {useForm} from 'react-hook-form';
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isSubmitting},
  } = useForm();
  async function onSubmit(data) {
    // api call simulation
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting form data", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          First Name:
        </label>
        <input className={errors.firstname ? 'input-error': ""}
        {...register('firstname', 
        {
          required: true, 
          minLength:{value:3, message:"Min length 3"}, 
          maxLength:{value:6, message:"Max length 6"}
          })}/>
          {errors.firstname && <p className='error-msg'>{errors.firstname.message}</p>}

      </div>
      <br></br>
      <div>
        <label>
          Middle Name:
        </label>
        <input className={errors.middlename ? 'input-error': ""}
        {...register('middlename')}>
          
        </input>
      </div>
      <br></br>
      <div>
        <label>
          Last Name:
        </label>
        <input className={errors.lastname ? 'input-error': ""}
        {...register('lastname',{
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Not as per rule"
          }
        })}/>
          {errors.lastname && <p className='error-msg'>{errors.lastname.message}</p>}
      </div>
      <br />
      <input type='submit' disabled={isSubmitting}
        value={isSubmitting ? "Submitting..." : "Submit"}
      />
    </form>
  )
}

export default App
