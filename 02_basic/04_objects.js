// singleton object const tinderUser = new Object()

// object literals  

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    regularemail: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Anubhav",       //nesting of object. object within object.
            lastName: "Singh",
        }
    }

}

//console.log(regularUser.fullName);
//console.log(regularUser.fullName.userFullName);
//console.log(regularUser.fullName.userFullName.lastName);



const obj1 = {
    1: "a", 2: "b"
}
const obj2 = {
    3: "c", 4: "d"
}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);
//console.log();

const obj3 = {...obj1, ...obj2}   //mainly this method used

//console.log(obj3);

// jab database se value aayegi

const user = {
    id1: 1,
    email1: "papa@rdx.com",
    id2: 2,
    email2: "papa@two.com",
    id3: 3,
    email3: "papa@three.com",
    id4: 4,
    email4: "papa@four.com",
    id5: 5,
    email5: "papa@five.com",
    id6: 6,
    email6: "papa@six.com",
}
//user[1].email
//console.log(Object.keys(user));
//console.log(Object.values(user));
//console.log(Object.entries(user));
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//console.log(user.hasOwnProperty('id6'));


// destructring - 
const course = {
    courseName: "js in hindi",
    courseFees: "999",
    courseInstructor: "Hitesh Choudhary",
    courseIsOngoing: true,
}
//
//console.log(course.courseIsOngoing);
//console.log(course["courseIsOngoing"]);
//console.log(course["courseFees"]);
//



//course.courseInstructor//



//const {kyaValueExtractKarSakteHai} = yahaSeValueExtractKarniHai
//react me jyada use hogi datarestructure
const {courseInstructor} = course
//console.log(courseInstructor);
const {courseInstructor: instructor} = course
//console.log(instructor);
//const navbar = () => ({company})

//navbar(company = "hitesh")

/*{
    "name": "anubhav",
    "course": "js",
    "price": "free"
}

[
{}
{}
]