export default interface RandomUser {
  name: {
    first: string;
  };
  phone: string;
  registered: {
    age: number;
  };

  email:string;

  picture: {
    large: string
    medium: string
    low: string
  }
  }