class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    async login(api_url){
        const userURL = api_url + 'user/login';
        try {
            const data = await fetch(userURL, {
                method: 'post',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    email : this.username,
                    password: this.password
                })
            });
            const result = await data.json();
            // console.log("RES", result);
            return result
        } catch (error) {
            console.log(error);
        }
    }

    print(){
        console.log(this.username, this.password);
    }
}

export { User }