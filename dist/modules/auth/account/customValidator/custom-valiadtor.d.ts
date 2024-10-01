import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsEqualTo implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
