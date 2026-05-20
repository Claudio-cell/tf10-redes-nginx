const CourseModel = require('../../Models/CourseModel');

class DeleteCourseController {

    async handle(req, res) {

        try {

            const { id } = req.params;

            const course = await CourseModel.findByPk(id);

            if (!course) {
                return res.status(404).json({
                    message: 'Curso não encontrado'
                });
            }

            await course.destroy();

            return res.json({
                message: 'Curso removido'
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

}

module.exports = new DeleteCourseController();