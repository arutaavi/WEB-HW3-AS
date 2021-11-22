<template>
<div class="flex-containeer">
    <div>
        <img src="@/assets/NoteIt.png" alt="NoteIt">
        <div class="helper">
            <img src="@/assets/NoteIt.png" alt="NoteIt">
        </div>
        <h1>Welcome to postIt!</h1>
        <p><a href='index.html'>Create an Account</a></p>
        <p>Or</p>
        <p>Please Log In</p>
        <form>
            <input type="text" placeholder="Email"><br>
            <input type="password" placeholder="Password"><br>
            <input type="button" value="Log In" id="button" onclick="location.href = 'index.html'">
        </form>
        <p><a href='index.html'>Forgot password?</a></p>
    </div>
</div>
</template>

<style scoped>

.flex-containeer {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.flex-containeer>div {
    padding: 20px;
    margin-top: 15px;
    margin-bottom: 40px;
    background-color: ghostwhite;
    display: block;
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 15px;
    width: 500px;
}

div img {
    height: 100px;
    float: left;
    width: 100px;
    text-align: left;
}

div .helper {
    float: right;
    width: 100px;
    text-align: right;
}

div p {
    font-size: 18px;
}

input {
    width: 200px;
    padding: 10px 18px;
    margin: 8px 10px;
    display: inline-block;
    border: 1px solid black;
}

#button {
    background-color: #5f7de5;
    width: 100px;
    border-radius: 5px;
}

#button:hover {
    background-color: royalblue;
}
</style>