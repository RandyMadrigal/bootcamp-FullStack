export interface IDragonBallResponse {
  items: IDragonBall[];
}

interface IDragonBall {
  id: number;
  name: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
}
