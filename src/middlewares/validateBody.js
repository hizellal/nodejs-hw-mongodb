import createHttpError from 'http-errors';

export const validateBody = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body, { aboutEarly: false });
            next();
        } catch (err) {
            const error = createHttpError(
                400,
                'Validation error. Please check the required fields and their values',
                { errors: err.details },
              );
              next(error);
        }
    };
};