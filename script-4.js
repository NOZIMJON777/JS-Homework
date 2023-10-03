let obj = {
    name: 'Nozim',
    surname: 'Oydinov',
    age: 25,
    status: 'Frontend Developer',
    experince: 'Junior',


    get fullname() {
        return `${this.name} ${this.surname} ${this.age}`
    },

    set fullname(value) {
        let values = value.split(" ");
        this.name = values[0];
        this.surname = values[1];
        this.age = values[2]
    }
}

obj.fullname = 'Nozimjon Oydinov 25'
console.log(obj.fullname);

