import type { CVData } from '../types';
import { modern } from './modern';
import { classic } from './classic';
import { creative } from './creative';
import { minimalist } from './minimalist';
import { corporate } from './corporate';
import { academic } from './academic';
import { executive } from './executive';
import { elegant } from './elegant';
import { bold } from './bold';
import { geometric } from './geometric';
import { info } from './info';
import { sharp } from './sharp';
import { gallery } from './gallery';
import { impact } from './impact';
import { defaultValue } from './default';

export const previewDataSets: { [key: string]: CVData } = {
  default: defaultValue,
  modern,
  classic,
  creative,
  minimalist,
  corporate,
  academic,
  executive,
  elegant,
  bold,
  geometric,
  info,
  sharp,
  gallery,
  impact,
};
