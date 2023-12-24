import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @ApiProperty({ example: 'John', description: 'User first name' })
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'User last name' })
  lastName: string;

  @ApiProperty({ example: 'test@mail.com', description: 'User email' })
  email: string;

  @ApiProperty({ example: 'password', description: 'User password' })
  password: string;
}

export class UserLoginDto {
  @ApiProperty({ example: 'test@mail.com', description: 'User email' })
  email: string;

  @ApiProperty({ example: 'password', description: 'User password' })
  password: string;
}

export class AddFriendDto {
  @ApiProperty({ example: 1, description: 'Friend User Id' })
  friendId: number;
}
