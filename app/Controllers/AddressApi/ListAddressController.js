const CourseModel = require('../../Models/CourseModel');

class ListCourseController {

    async handle(req, res) {

        try {

            const courses = await CourseModel.findAll();

            return res.json(courses);

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

}

module.exports = new ListCourseController();