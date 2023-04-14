<template>
    <div class="container">
        <h4>
            <form>
                <div>
                    <label for="adminId">User id:    </label>
                    <input type="text" class="text-field" id="userId" v-model="adminLoginRequest.adminId" placeholder="Enter your id"/>
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" class="text-field" id="password" v-model="adminLoginRequest.password" placeholder="Enter your password"/>
                </div>
                <div>
                    <button  class="button" type="submit" @click="login">login</button>
                </div>


            </form>
            <p>{{ message }}</p>
        </h4>
    </div> 
</template>


<script>
import LoginService from "../services/LoginService";

export default{
    name: "adminLogin",

    data() {
    return{
        adminLoginRequest: { adminId : "", password:""},
        message:""
        }
    },


    methods : {
        login(event){
            event.preventDefault();
            LoginService.login(this.adminLoginRequest)
            .then(response => {
                let admin = response.data;
                console.log(admin);
                this.message = admin;
                this.$router.push({name:"productList"});
            })
            .catch(error=>{
                
                this.adminLoginRequest.adminId="";
                this.adminLoginRequest.password="";
                this.message=error.response.data.message;
                console.error(this.message);
            });
        }

    },
    mounted(){
        this.message="";
    }
}
</script>
<style>


body {
  background-color: #f2f2f2;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-field {
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}

.button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.button:hover {
  background-color: #3e8e41;
}

.button:active {
  background-color: #367c39;
}
</style>