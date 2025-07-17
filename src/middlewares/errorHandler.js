import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  console.error('Error in PATCH request:', err);
  if (err instanceof HttpError) {
    res
      .status(err.status)
      .json({ status: err.status, message: err.name, error: err.message });
  }

  res.status(500).json({
    status: 500,
    message: 'Internal Server Error',
    data: err.message,
  });
};