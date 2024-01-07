import { ApiProperty } from '@nestjs/swagger';

export class SesSnsResponseDto {
  @ApiProperty({ example: true })
  spam: boolean;

  @ApiProperty({ example: true })
  virus: boolean;

  @ApiProperty({ example: true })
  dns: boolean;

  @ApiProperty({ example: 'September' })
  mes: string;

  @ApiProperty({ example: true })
  retrasado: boolean;

  @ApiProperty({ example: '61967230-7A45-4A9D-BEC9-87CBCF2211C9' })
  emisor: string;

  @ApiProperty({
    example: ['recipient'],
  })
  receptor: string[];
}
