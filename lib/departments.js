function Departments () {
                 this.banking = function(){
                    return faker.random.arrayElement(faker.definitions.departments.banking);
                }
                this.police = function(){
                    return faker.random.arrayElement(faker.definitions.departments.police);
                }
                this.states = function(){
                    return faker.random.arrayElement(faker.definitions.departments.states);
                }
                this.transport = function(){
                    return faker.random.arrayElement(faker.definitions.departments.transport);
                }
}
module['exports'] = Departments;
