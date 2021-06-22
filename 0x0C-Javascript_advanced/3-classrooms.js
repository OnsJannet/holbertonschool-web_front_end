// returns number of students

function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function(){ return seat };
    }
	let students = [];
	for (let iteration = 0; iteration < numberOfStudents; iteration++) {
		students.push(studentSeat(iteration + 1));
	}
	return students;
}

let classRoom = createClassRoom(10);
