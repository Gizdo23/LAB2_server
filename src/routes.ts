import { Request, Response } from 'express';

export const handleCheckboxClick = (req: Request, res: Response) => {
  console.log('Checkbox clicked!');
  res.send('Checkbox clicked! Check the server logs.');
};

export const parseText = (req: Request, res: Response) => {
    const text  = req.body.text;
    
    //console.log(text)
    res.send(text);
    //res.render('index', { message: text })
};