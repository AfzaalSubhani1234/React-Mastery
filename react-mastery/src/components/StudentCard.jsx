function StudentCard() {
    const name = "AFzaal"
    const age = 2434
    const course = ['React', 'Javascript', 'Mern']
    const city = 'Lahore'
    const isEnrolled = true
    const marks = 434
    return (
        <>
            <h1>Name:{name}</h1>
            <h1>Age:{age}</h1>
            <h1>Course:{course[0]},{course[1]},{course[2]}</h1>
            <h1>{isEnrolled ? "no" : "yes"}</h1>
            <h1>marks:{marks}</h1>
        </>
    )
}

export default StudentCard