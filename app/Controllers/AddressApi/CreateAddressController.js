const CourseModel = require('../../Models/CourseModel');

class CreateCourseController {

    async handle(req, res) {

        try {

            const data = req.body;

            const course = await CourseModel.create(data);

            return res.status(201).json(course);

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

}

module.exports = new CreateCourseController();