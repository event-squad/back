export class DecodedJWT {
  decoded: {
    userId: number;
    email: string;
    iat: Date;
    exp: Date;
  };
}
