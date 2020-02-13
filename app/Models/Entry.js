class Entry{
    constructor(){
        this.name = '';
        this.description = '';
        this.category = '';
        this.image = '';
        this.privacy = '';
        this.userId = '';
    }

    static async getEntries(API_URL, id, ACCESS_TOKEN){
        const api_url_by_id = API_URL + 'entry/user/' + id;
        try {
            const data = await fetch(api_url_by_id, {
                method: 'get',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': ACCESS_TOKEN
                })
            });
            const entries = await data.json();
            return entries.entries;
        } catch (error) {
            console.log(error);
        }
    }

    static async setEntry(API_URL, ACCESS_TOKEN){
        const api_url_create_entry = API_URL + 'entry';
        console.log('Bearer ' + ACCESS_TOKEN);
        try {
            const data = await fetch(api_url_create_entry, {
                method: 'post',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + ACCESS_TOKEN
                }),
                body: JSON.stringify({})
            });
            const result = await data.json();
            console.log("DATA", result);
        } catch (error) {
            console.log(typeof error, error);
        }
    }
}

export { Entry };