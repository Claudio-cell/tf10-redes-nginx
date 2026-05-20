const CourseModel = require('../../Models/CourseModel');

class GetCourseController {

    async handle(req, res) {

        try {

            const { id } = req.params;

            const course = await CourseModel.findByPk(id);

            if (!course) {
                return res.status(404).json({
                    message: 'Curso não encontrado'
                });
            }

            return res.json(course);

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

}

module.exports = new GetCourseController();