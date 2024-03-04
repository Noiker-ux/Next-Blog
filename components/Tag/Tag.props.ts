import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  tag: 'light' | 'normal' | 'bold';
}
