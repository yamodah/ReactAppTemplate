
function LogInButton ({logIn,accountHandler}){
return <button onClick ={accountHandler}>
    {logIn?"Switch to Yassine":"Switch to Yamodah"}
</button>
}

export default LogInButton
