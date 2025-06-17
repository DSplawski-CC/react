export interface ReviewDataDto {
  author: UserDto;
  title: string;
  content: string;
  rating: number;
}

export interface ReviewDto extends ReviewDataDto {
  id: string;
  movieId: number;
  createdAt: string;
}

export interface UserDto {
  email: string;
  name: string;
}

export interface LoginData {
  email: string;
  password: string;
}
