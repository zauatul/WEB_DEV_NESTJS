import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform // Because it implements PipeTransform, NestJS knows this class is a custom pipe.
{

  transform(value: any, metadata: ArgumentMetadata) // Every custom pipe must contain a transform method
  {
    if(typeof value === 'string')
    {
      return value.toUpperCase();
    }
    return value;
  }

}
