import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface IParagraphProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  lineHeight: 'big' | 'small';
}
