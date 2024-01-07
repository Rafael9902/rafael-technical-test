import { SesSnsResponseDto } from '../dto/ses-sns-response.dto';

export const mockResponse: SesSnsResponseDto = {
  spam: true,
  virus: true,
  dns: true,
  mes: 'September',
  retrasado: false,
  emisor: '61967230-7A45-4A9D-BEC9-87CBCF2211C9',
  receptor: ['recipient'],
};
