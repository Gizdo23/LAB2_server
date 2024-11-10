import { Request, Response } from 'express';

// Define the handler for when the checkbox is clicked
export const handleCheckboxClick = (req: Request, res: Response) => {
  console.log('Checkbox clicked!');
  res.send('Checkbox clicked! Check the server logs.');
};

export const parseText = (req: Request, res: Response) => {
    const { text } = req.body;
    console.log(text)

};