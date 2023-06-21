import "../styles/base.css"

const Form = () => {
  return (
    <>
        <form id="my_form">
            <label htmlFor="">Username:</label><br />
            <input type="text" />
            <br />
            <label htmlFor="">Password:</label><br />
            <input type="text" />
            <br /><br />
            <input type="submit" value="Submit"/>
        </form>
    </>
  )
}

export default Form