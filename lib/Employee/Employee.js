
class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    

// getters n methods
get Name() {
    return this.name;
}

get Id() {
    return this.id;
}

get Email() {
    return this.email;
}

get Role() {
    return this.title;
}
}
module.export;