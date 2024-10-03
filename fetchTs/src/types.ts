export interface IDragonBallResponse {
  items: IDragonBall[];
}

export interface IDragonBall {
  id: number;
  name: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
}
